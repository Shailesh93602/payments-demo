# FAC-2 Show when I joined on My Account

**Request (verbatim):** On the My Account page, show when I joined, like "Member since March 2023", under the "User Settings" title.

## What changes
The My Account page (`/user/settings`) shows a line "Member since <Month> <YYYY>" directly under the "User Settings" title, built from the signed-in user's account creation date.

## Acceptance criteria
- AC-1: A signed-in user opens My Account (`/user/settings`, "My Account" in the side menu) and sees the text "Member since <full month name> <4-digit year>" directly under the "User Settings" title. For the environment's test user (joined 9 March 2023) the exact text is "Member since March 2023".
- AC-2: The "User Settings" title and the settings form (First Name, Last Name, Email, Phone Number, Save) still show on the page as before.

## Not in scope
- Any other page, the exact day of joining, editing the join date, time zones beyond the month shown, translations.

## Tests (ContextQA)
| Criterion | Test case | Status |
|---|---|---|
| AC-1 | 1211 Verify account join date display format on User Settings page | kept (prerequisite swapped to sign-in case 1203) |
| AC-2 | 1212 Verify settings form elements visibility on User Settings page | kept (prerequisite swapped to sign-in case 1203) |

Generated: 2 tests + 1 login prerequisite (1213, replaced, not deleted). Suite 212, plan 212 (parallel_nodes 3). No gaps.
