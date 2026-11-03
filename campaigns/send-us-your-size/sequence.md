# Email Sequence: Send Us Your Size

Notes for the 4 emails in `emails/`. The emails themselves are ready to use. This file covers timing, logic, testing and tracking.

**Goal:** 300 WhatsApp enquiries by Sunday 3 January 2027 (see `plan.md`).
**Conversion:** the person messages us on WhatsApp (tyre size or quotation request), or calls us.

## Overview

| # | File | Subject | Purpose | Send | CTA | Who gets it |
|---|---|---|---|---|---|---|
| 1 | `01-send-us-your-size.md` | Send us your tyre size on WhatsApp | Introduce WhatsApp ordering and the 3 steps | Mon 7 Dec, 10 AM | Send us your size on WhatsApp | Everyone |
| 2 | `02-read-your-size.md` | Where to find your tyre size | Help people who don't know their size | Mon 14 Dec, 10 AM | Send us your size on WhatsApp | Everyone who hasn't messaged us yet |
| 3 | `03-genuine-tyres.md` | Genuine tyres, and who you're buying from | Build trust: imported vs dealer brands, plus services | Mon 21 Dec, 10 AM | Send us your size on WhatsApp | Everyone who hasn't messaged us yet |
| 4 | `04-before-new-year.md` | Send us your size before the new year | Last, friendly reminder | Mon 28 Dec, 10 AM | Send us your size on WhatsApp | Only people who haven't messaged us yet |

These are the base emails. Step 8 creates a version of each for the five groups in `groups/`. Corporate versions will use "Request a quotation on WhatsApp" as the button.

## Other subject lines to test

| # | Option B | Option C |
|---|---|---|
| 1 | {{first_name}}, what size are your tyres? | Genuine tyres, one WhatsApp away |
| 2 | Your tyre size is on the side wall | What 195/65 R15 actually means |
| 3 | Imported or dealt in? We'll always say | The brands we import ourselves |
| 4 | New tyres for the new year? | One message, and we'll do the rest |

## Flow

```
[List: 2,000 people]
        |
        v
Email 1 (Mon 7 Dec) --messaged us?--Yes--> [EXIT: converted]
        |
        No
        v
Email 2 (Mon 14 Dec) --messaged us?--Yes--> [EXIT: converted]
        |
        No
        v
Email 3 (Mon 21 Dec) --messaged us?--Yes--> [EXIT: converted]
        |
        No
        v
Email 4 (Mon 28 Dec)
        |
        v
[EXIT: sequence complete] --> results report Mon 4 Jan
```

## Logic

- **Exit:** anyone who messages us on WhatsApp (any `ref E1`–`E4` code) or calls us stops getting the sequence. Before each Monday send, remove them from the list.
- **Suppression:** never email anyone who unsubscribed, or any row in `leads/leads.csv` without a consent value.
- **No re-entry:** this is a one-time campaign.
- **Tracking:** every WhatsApp button pre-fills a reference code (`ref E1` to `ref E4`), so each enquiry shows which email it came from.

## A/B tests

1. **Subject line, email 1:** option A ("Send us your tyre size on WhatsApp") vs option B ("{{first_name}}, what size are your tyres?"). Split the list 50/50 and pick the winner by WhatsApp enquiries, not opens.
2. **Button text, corporate versions:** "Request a quotation on WhatsApp" vs "Send us your fleet's sizes". Split the corporate groups 50/50 and measure quotation requests.
3. **Send time:** 10 AM vs 5 PM on email 2. Split 50/50 and measure WhatsApp enquiries within 48 hours.

With a list of about 2,000, treat results as a guide, not proof.

## Metrics

| Metric | Target | Notes |
|---|---|---|
| WhatsApp enquiries (primary) | 300 in total | Count by `ref` code and group |
| Open rate | 40% or more | Product-launch emails to a known list |
| Click rate on the WhatsApp button | 10% or more | |
| Unsubscribe rate | Under 1% per email | |
| Drop-off | Track only | Which email has the fewest enquiries |

**Review:** count results every Monday before the next send, and write the full report on Monday 4 January 2027.

## Setup checklist (any email service)

1. Import `leads/leads.csv` and tag each person with their group.
2. Create a 4-email campaign with the send dates above.
3. Before each send, remove everyone who has messaged or called us.
4. Check every WhatsApp link opens with the right reference code.
5. Track WhatsApp enquiries by reference code in a simple sheet.
