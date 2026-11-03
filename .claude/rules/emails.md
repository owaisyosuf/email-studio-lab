---
paths:
  - "campaigns/**/emails/*.md"
---

# Rules for every email file

These rules apply to every email file in any campaign, and only to email files.

Each email file must:

1. **Start with the subject and preview lines.** The first line is `Subject: ...`, 50 characters or fewer. The second line is `Preview: ...`, 90 characters or fewer.

2. **Greet the reader by name** with `{{first_name}}`, for example "Hi {{first_name}},".

3. **Have exactly one main link: our WhatsApp.** Write it as a button link to our WhatsApp number with a pre-filled message, like this:

   `[Send us your size on WhatsApp](https://wa.me/923174724400?text=Hi%20Baber%20Tyres%20Corporation%2C%20my%20tyre%20size%20is%20)`

   - The button text and pre-filled message can change to suit the email and the group. For example, corporate emails can use "Request a quotation on WhatsApp".
   - The link must always go to `https://wa.me/923174724400`.
   - No other links. In particular, never link to or mention the website.

4. **End with our sign-off from `brand/voice.md`**, then this two-line footer as plain text, not inside a code block:

You're getting this because you asked to hear from Baber Tyres Corporation.
Baber Tyres Corporation, M.A. Jinnah Road, Karachi · Unsubscribe: {{unsubscribe_url}}
