# FAC-2 Show "Member since" on My Account

Request (word for word): On the My Account page, show when I joined, like "Member since March 2023", under the "User Settings" title.

## What changes
The My Account page (User Settings) shows the signed-in user's join month and year, taken from their account's creation date, directly under the "User Settings" title.

## Acceptance criteria
- AC-1: A signed-in user opens My Account (`/user/settings`) and sees a line reading "Member since <Month> <YYYY>" (full English month name, four-digit year), placed directly under the "User Settings" title and above the settings form.
- AC-2: The month and year match the user's account creation date. For the environment's test user (created 9 March 2023) the line reads exactly "Member since March 2023".
- AC-3: The rest of the My Account page is unchanged: the settings form (first name, last name, email, phone number) still shows and can be saved.

## Not in scope
- Showing the join date anywhere else (profile, sidebar, other users).
- Showing the day or time of joining.
- Any change to the data stored for a user.

## ContextQA tests (requirement 448, suite 210, plan 210, env payments-factory)

| Criterion | Test case | Status | Result on this branch |
|---|---|---|---|
| AC-1 | 1199 Verify Member Since Date Display on My Account Page | kept | passed (plan run 958) |
| AC-2 | 1200 Verify Member Since Date Format Strictly Displays Month and Year | kept | passed (plan run 958) |
| AC-3 | 1201 Verify Saving Unchanged Settings Form Retains Data Without Validation Errors | kept | passed (plan run 958) |

Discarded drafts: 2022 (field pre-population, overlaps 1201) and 2024 (end-to-end journey repeating 1199 to 1201). Gaps: none.
