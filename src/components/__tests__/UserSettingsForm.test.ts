import { describe, expect, it } from "vitest";
import { phoneRegExp } from "../UserSettingsForm";

describe("UserSettingsForm phoneRegExp", () => {
  it.each(["(415) 555-0132", "+1 415 555 0132", "415-555-0132", "398-225-9900", "4155550132"])(
    "accepts %s",
    (phone) => {
      expect(phoneRegExp.test(phone)).toBe(true);
    }
  );

  it.each(["abc", "415-555-01x2", "\\\\415"])("rejects %s", (phone) => {
    expect(phoneRegExp.test(phone)).toBe(false);
  });
});
