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
