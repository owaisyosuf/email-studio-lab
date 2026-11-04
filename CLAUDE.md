# Baber Tyres Email Studio

This studio is where we plan and write email campaigns for a small business: **Baber Tyres Corporation**, a tyre importer and dealer on M.A. Jinnah Road, Karachi. The business has a website, but it is not used in emails yet.

The current campaign is **Send Us Your Size** (`campaigns/send-us-your-size/`). Car and SUV owners send their tyre size, and corporate clients ask for a quotation, on WhatsApp (0317-4724400) or by phone. Every email points people to WhatsApp or a call.

## Confirmed business facts

Owais Yousuf confirmed these on 3 November 2026. Emails may state them. Don't add any other business facts unless they are confirmed.

- **Shop:** M.A. Jinnah Road, Karachi.
- **Hours:** Monday to Saturday, 10 AM to 7 PM. Sunday closed. Closed on Friday 25 December 2026 (Quaid-e-Azam Day).
- **Contact:** WhatsApp or call 0317-4724400.
- **Delivery:** available across Karachi. Charges apply and are confirmed on WhatsApp.
- **Services at the shop:** tyre fitting, computerized wheel alignment, computerized wheel balancing. Alignment and balancing are not available for trucks / commercial vehicles or lifters / forklifts (confirmed 4 November 2026).
- **Brands we import:** Yokohama, Rapid, Michelin, Duhow.
- **Brands we deal in:** Dunlop, General, Armstrong.
- **Tyre types:** car, SUV / 4x4, truck / commercial, lifter / forklift, off-road.
- **Corporate clients:** we supply multinationals, banks, beverage and logistics companies (never name them).

## Folders

- `brand/` – how Baber Tyres sounds: the brand voice guide.
- `leads/` – practice customer lists (made-up people only).
- `campaigns/` – one folder per campaign, with its plan, emails and group versions.
- `notes/` – my working notes and research.

## Rules

- Write in plain English.
- Never send email to real people. Practice leads use `@example.com` addresses only.
  - Sending through Resend is allowed only to Resend's test addresses (ending in `@resend.dev`) and to my own email address (the `MY_EMAIL` value in `.claude/settings.local.json`). Every address in to, cc and bcc must follow this.
  - A send guard (a hook) will enforce this from the next step onward and block any other address.
- Never invent prices, discounts or stock that the business has not confirmed.
- Don't link to or mention the website in emails. Its data is not complete yet, and it shows retail prices that are not right for corporate clients.
- Ask me before deleting anything.

## Brand voice

@brand/voice.md
