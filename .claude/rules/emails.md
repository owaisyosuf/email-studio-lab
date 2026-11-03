---
paths:
  - "campaigns/**/emails/*.md"
---

# Rules for every email file

These rules apply to every email file in any campaign, and only to email files.

Each email file must:

1. **Start with the subject and preview lines.** The first line is `Subject: ...`, 50 characters or fewer. The second line is `Preview: ...`, 90 characters or fewer.

2. **Greet the reader by name** with `{{first_name}}`, for example "Hi {{first_name}},". When sending, use "there" as the fallback if a first name is missing, so nobody gets "Hi ,".

3. **Have exactly one main link: our WhatsApp.** Write it as a button link to our WhatsApp number with a pre-filled message, like this:

   `[Send us your size on WhatsApp](https://wa.me/923174724400?text=Hi%20Baber%20Tyres%20Corporation%20%28ref%20E1%29.%20My%20tyre%20size%20is%20)`

   - The pre-filled message always includes the email's reference code (`ref E1`, `ref E2` and so on), so we can track which email each enquiry came from.
   - Base emails and car and SUV versions use "Send us your size on WhatsApp". Corporate versions (fleets, trucks, lifters) use "Request a quotation on WhatsApp", with a pre-filled message like "Hi Baber Tyres Corporation (ref E1). We'd like a quotation for ".
   - The link must always go to `https://wa.me/923174724400`.
   - No other links. In particular, never link to or mention the website.

4. **Mention delivery honestly.** Whenever an email mentions delivery across Karachi, it also says that charges apply or are confirmed on WhatsApp.

5. **End with our sign-off from `brand/voice.md`**, then this two-line footer as plain text, not inside a code block. When the email is sent, each sign-off and footer line must stay on its own line (send as plain text, or keep the line breaks if converting to HTML):

You're getting this because you asked to hear from Baber Tyres Corporation.
Baber Tyres Corporation, M.A. Jinnah Road, Karachi · Unsubscribe: {{unsubscribe_url}}
