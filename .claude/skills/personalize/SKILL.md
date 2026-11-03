---
name: personalize
description: Write a version of each campaign email for every lead group in leads/leads.csv. Use when a campaign's emails are final and you want one copy per group.
argument-hint: "[campaign folder]"
context: fork
allowed-tools: Read, Glob, Grep, Write
---

# Personalize campaign emails per lead group

Campaign folder: $ARGUMENTS

## 1. Check the input

- If no campaign folder was given, **stop**. Use Glob on `campaigns/*/` to find the campaign folders, list them, and ask which one to use. Write nothing.
- If the folder has no `emails/*.md` files, stop and say so.

## 2. Read before writing

1. `brand/voice.md`: the voice, the words we use and avoid, the claims we never make, the sign-off, and the tone for each audience.
2. `.claude/rules/emails.md`: the format every email file must follow. It applies to the group versions too.
3. `CLAUDE.md`: the confirmed business facts. Use only these facts.
4. `leads/leads.csv`: read the `group` column and collect every distinct group name. Don't assume the groups; use what the file says.
5. Every file in `<campaign folder>/emails/`, in order.

## 3. Write one version of each email per group

For every group and every email, write `<campaign folder>/groups/<group>/emails/<same file name>`.

**Keep exactly the same:**
- The structure and order of sections.
- The `Subject:` line and the `Preview:` line.
- The WhatsApp link destination (`https://wa.me/923174724400`) and the email's reference code (`ref E1`, `ref E2` and so on).
- The sign-off and the two-line footer, word for word.

**Change only:**
- **The opening line** (the first sentence after "Hi {{first_name}},"), so it speaks to that group.
- **One example**, so it fits that group. For example, use a truck size such as 11R22.5 for trucks, or a forklift size such as 7.00-12 for lifters, in place of the car size.
- **For corporate groups only**, follow `.claude/rules/emails.md`: the button text becomes "Request a quotation on WhatsApp" and the pre-filled message becomes "Hi Baber Tyres Corporation (ref E1). We'd like a quotation for " (keeping that email's own ref code).

**Tone by group** (from `brand/voice.md`):

| Group | Tone | Focus |
|---|---|---|
| `car-owners` | Friendly and guiding | Their everyday car. Help them find their size. |
| `suv-owners` | Friendly and guiding | SUV, 4x4 and off-road tyres, and larger sizes |
| `corporate-fleet` | Professional and short | Company car fleets. One quotation for many vehicles. |
| `corporate-trucks` | Professional and short | Trucks and commercial vehicles |
| `corporate-lifters` | Professional and short | Forklifts and warehouse vehicles |

If `leads/leads.csv` has a group that isn't in this table, pick the closest tone from `brand/voice.md`.

**Never**, in any version: prices, discounts, "in stock", the words warranty, cheap, cheapest or sasta, website links, client names, or calling a dealer brand imported. Don't add facts that aren't in `CLAUDE.md`.

## 4. Check each file before saving

- The subject is 50 characters or fewer, and the preview is 90 or fewer.
- There is exactly one link, and it goes to `https://wa.me/923174724400` with the right ref code.
- The file ends with the exact sign-off and footer, with no code block.

## 5. Reply with a short summary only

Reply with just:
- How many files were written (for example, "20 files: 4 emails x 5 groups").
- One example opening line per group.

Don't paste the full emails.
