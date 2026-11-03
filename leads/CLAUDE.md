# Rules for the leads folder

These rules apply only to files in `leads/`.

- **Everyone here is made up.** The people in `leads.csv` are practice customers for the Email Studio Lab, not real Baber Tyres customers.
- **Never add real people or real email addresses.** Don't copy in real customers, real corporate clients or real company names.
- **Every row needs a consent value.** It records how the person agreed to hear from us: `shop sign-up` for car and SUV owners, `corporate opt-in` for corporate clients. A row with an empty consent value must not be emailed.
- **Never change the `@example.com` addresses.** That domain is reserved and can never receive mail, so no real person is ever emailed.
- **Keep the columns exactly as they are:** `first_name,last_name,email,group,joined_on,consent`.
- **Use only these five groups:** `car-owners`, `suv-owners`, `corporate-fleet`, `corporate-trucks`, `corporate-lifters`.
