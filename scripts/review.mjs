#!/usr/bin/env node
// Headless email review.
// Usage: node scripts/review.mjs <campaign-folder>
// Runs Claude Code without chat, saves review/findings.json,
// and exits with code 1 if any finding is high severity.

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const folder = process.argv[2];
if (!folder) {
  console.error("Usage: node scripts/review.mjs <campaign-folder>");
  process.exit(2);
}
if (!existsSync(folder)) {
  console.error(`Folder not found: ${folder}`);
  process.exit(2);
}

const schemaText = readFileSync("review/findings.schema.json", "utf8");

// On Windows, the npm "claude" command is a .cmd/.ps1 shim, which Node can't
// start without a shell. Use the real claude.exe behind it when we can find it.
function claudeCommand() {
  if (process.env.CLAUDE_BIN) return process.env.CLAUDE_BIN;
  if (process.platform === "win32" && process.env.APPDATA) {
    const exe = join(process.env.APPDATA, "npm", "node_modules", "@anthropic-ai", "claude-code", "bin", "claude.exe");
    if (existsSync(exe)) return exe;
  }
  return "claude";
}

// Same folder written two ways ("campaigns/x/" and "campaigns\x") should match.
const folderKey = folder.replace(/\\/g, "/").replace(/\/+$/, "");
const findingsPath = "review/findings.json";

// If the last review was for this same folder, pass its findings along so the
// new review reports only problems that are new or still not fixed.
let previous = null;
if (existsSync(findingsPath)) {
  try {
    const saved = JSON.parse(readFileSync(findingsPath, "utf8"));
    if (saved.folder === folderKey && Array.isArray(saved.findings)) previous = saved.findings;
  } catch {
    // An unreadable old file just means a full review.
  }
}

let prompt =
  `Review every email in ${folderKey} against brand/voice.md and .claude/rules/emails.md. ` +
  `Report only real problems.`;

if (previous) {
  prompt +=
    `\n\nThese are findings from the last review. Report only problems that are new or still not fixed. ` +
    `Don't repeat ones that have been fixed.\n` +
    JSON.stringify(previous, null, 2);
}

const result = spawnSync(
  claudeCommand(),
  [
    "-p", prompt,
    "--output-format", "json",
    "--json-schema", schemaText,
    "--allowedTools", "Read,Glob,Grep",
  ],
  { encoding: "utf8", maxBuffer: 50 * 1024 * 1024 }
);

if (result.error) {
  console.error(`Could not start claude: ${result.error.message}`);
  process.exit(2);
}
if (result.status !== 0) {
  console.error(`claude exited with code ${result.status}`);
  if (result.stderr) console.error(result.stderr.trim());
  process.exit(2);
}

let output;
try {
  output = JSON.parse(result.stdout);
} catch {
  console.error("claude did not return valid JSON:");
  console.error(result.stdout.slice(0, 500));
  process.exit(2);
}

// The output is either one result object, or a list whose last item is the result.
const final = Array.isArray(output) ? output[output.length - 1] : output;
const structured = final?.structured_output;
if (!structured || !Array.isArray(structured.findings)) {
  console.error("No structured_output with a findings array in claude's result.");
  if (final?.is_error) console.error(`claude reported an error: ${final.result ?? final.subtype}`);
  process.exit(2);
}

mkdirSync("review", { recursive: true });
writeFileSync(
  findingsPath,
  JSON.stringify({ folder: folderKey, findings: structured.findings }, null, 2) + "\n"
);

const count = { high: 0, medium: 0, low: 0 };
for (const f of structured.findings) count[f.severity] = (count[f.severity] ?? 0) + 1;

console.log(
  `${folderKey}: ${structured.findings.length} finding(s) ` +
  (previous ? `[re-review, ${previous.length} earlier] ` : "") +
  `(high ${count.high}, medium ${count.medium}, low ${count.low}). Saved to review/findings.json.`
);

process.exit(count.high > 0 ? 1 : 0);
