// Send guard: a PreToolUse hook for the Resend MCP server.
// It reads the tool call as JSON from standard input.
// Exit 0 allows the call. Exit 2 blocks it, and the message on stderr is shown to Claude.

const SEND_TOOLS = ["send-email", "send-batch-emails"];
const ALWAYS_BLOCK = [
  "send-broadcast",
  "create-automation",
  "send-inbox-draft",
  "send-new-inbox-email",
];
const ADDRESS_FIELDS = ["to", "cc", "bcc"];

function block(reason) {
  process.stderr.write(`Send guard blocked this call: ${reason}\n`);
  process.exit(2);
}

// Turn "Name <a@b.com>" or "a@b.com" into "a@b.com", in lower case.
function cleanAddress(value) {
  const text = String(value).trim();
  const match = text.match(/<([^>]+)>/);
  return (match ? match[1] : text).trim().toLowerCase();
}

// Collect every address in to, cc and bcc, at any depth.
// This covers send-email (fields at the top) and send-batch-emails (a list of emails).
function collectAddresses(node, found = []) {
  if (Array.isArray(node)) {
    for (const item of node) collectAddresses(item, found);
  } else if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node)) {
      if (ADDRESS_FIELDS.includes(key.toLowerCase())) {
        const list = Array.isArray(value) ? value : [value];
        for (const item of list) {
          if (item === null || item === undefined || item === "") continue;
          // A single string may hold several addresses separated by commas.
          for (const part of String(item).split(",")) {
            if (part.trim()) found.push(cleanAddress(part));
          }
        }
      } else {
        collectAddresses(value, found);
      }
    }
  }
  return found;
}

let raw = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  let call;
  try {
    call = JSON.parse(raw);
  } catch {
    block("could not read the tool call, so it is blocked to be safe.");
  }

  const toolName = String(call.tool_name || "");
  // tool_name looks like mcp__resend__send-email. Keep only the last part.
  const shortName = toolName.split("__").pop();

  if (ALWAYS_BLOCK.includes(shortName)) {
    block(
      `${shortName} can reach whole lists of people, so it is never allowed in this studio.`
    );
  }

  if (!SEND_TOOLS.includes(shortName)) {
    process.exit(0);
  }

  const myEmail = cleanAddress(process.env.MY_EMAIL || "");
  const addresses = collectAddresses(call.tool_input || {});

  if (addresses.length === 0) {
    block(`${shortName} has no to, cc or bcc address that the guard can check.`);
  }

  const notAllowed = addresses.filter(
    (address) => !address.endsWith("@resend.dev") && !(myEmail && address === myEmail)
  );

  if (notAllowed.length > 0) {
    block(
      `${notAllowed.join(", ")} is not allowed. ` +
        "Email may only go to @resend.dev test addresses or to MY_EMAIL."
    );
  }

  process.exit(0);
});
