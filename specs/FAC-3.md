# FAC-3 US phone numbers rejected in My Account (bug)

**Report (verbatim):** "I can't save my phone number in My Account. I typed (415) 555-0132 and it says 'Phone number is not valid'. Same with +1 415 555 0132. That's a normal US number."

## Reproduction
ContextQA `reproduce_from_ticket` → test case 1210, run result 2837: FAILURE (bug reproduced). "I entered '(415) 555-0132' into the phone number field in My Account, but the validation error 'Phone number is not valid' appeared and the Save button remained disabled."

## Cause
`src/components/UserSettingsForm.tsx:30`: `phoneRegExp` is a regex *literal* written with doubled backslashes (`\\+`, `\\(`, `\\)`, `\\-`), as if it were a string. In a literal, `\\` matches a backslash character, so `+1 …` and `(415) …` can never match.

## Acceptance criteria
- AC-1: On My Account, "(415) 555-0132" is accepted (no "Phone number is not valid") and can be saved.
- AC-2: "+1 415 555 0132" is accepted.
- AC-3: Formats that were accepted before (for example "398-225-9900") are still accepted; non-numbers are still rejected.

## Not in scope
Backend validation (the API already accepts any string), phone formatting/normalisation.

## Tests (ContextQA)
| Criterion | Test case | Status |
|---|---|---|
| AC-1, AC-2 | 1210 FAC-3 US phone number rejected in My Account (regression, from reproduction) | kept |
| AC-3 | none in ContextQA; covered by the unit test `phoneRegExp.test.ts` | gap (ContextQA) |
