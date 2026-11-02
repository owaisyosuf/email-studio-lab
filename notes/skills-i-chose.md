# Skills I chose

Searched skills.sh on 2026-11-02 with `npx skills find` for: email marketing, email sequence, campaign plan, resend. Star counts come from GitHub on the same day.

## Use these

**1. Anthropic's marketing plugin, for planning and writing campaigns**
- Source: `anthropics/knowledge-work-plugins` (34,420 GitHub stars, official Anthropic organization, updated today).
- Skills found: `campaign-plan` (3.3K installs), `email-sequence` (3K installs), `draft-outreach` (3.3K installs).
- Why: it is made by the company behind Claude, it is actively maintained, and it covers exactly what we need: a campaign plan, then an email sequence. Its install numbers are modest, but the publisher and the star count are strong.

**2. Resend's own skills, for sending email**
- Source: `resend/resend-skills` (208 stars) and `resend/email-best-practices` (146 stars), both from the official Resend organization.
- Skills found: `resend` (24.1K installs), `send-email`, `resend-cli`, `email-best-practices` (8.2K installs).
- Why: Resend is the email service we will connect, so its own team knows the API best. The star counts are low, but that is normal for a company's small helper repo. The publisher is the service itself, which matters more here.

## Avoid these

**1. `mbfinotti/sales-skills` and its sister repos (advertising-skills, partnerships-skills)**
- About 31K installs each (for example `sales-outbound-sequence`, `cold-email-deliverability`), but only 2–3 GitHub stars per repo, from one personal account.
- Why: tens of thousands of installs with almost nobody starring the code does not add up. Install counts can be inflated, and the stars suggest real people are not using it. They are also sales and cold-outreach skills, not waitlist launch emails.

**2. `caffeinelabs/skills@extension-email-marketing`**
- 29.4K installs, but the repository has only 2 GitHub stars.
- Why: the same mismatch. High installs with no community trust behind them, and it is unclear who maintains it or what it actually does.

Honourable mention, not avoided but not needed: `coreyhaines31/marketingskills` is popular and well-starred (57.9K stars), but it comes from one person rather than an official publisher. Its `email-sequence` and `emails` skills overlap, so check which one is current before you use it.

## How I decided

Check these three things before installing any skill:

1. **Who publishes it?** Prefer the official maker of the tool (anthropics, resend) over an unknown account.
2. **Do the GitHub stars match the installs?** Thousands of installs with a handful of stars is a warning sign that the numbers were inflated.
3. **Is it maintained, and does it fit the job?** Look at when the repository was last updated, and read the skill's own file to see what it actually does, and what it runs, before you trust it.
