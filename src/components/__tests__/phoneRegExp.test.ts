import { describe, expect, test } from "vitest";
import { phoneRegExp } from "../UserSettingsForm";

describe("phoneRegExp", () => {
  test.each(["(415) 555-0132", "+1 415 555 0132", "398-225-9900", "4155550132"])(
    "accepts %s",
    (phone) => {
      expect(phoneRegExp.test(phone)).toBe(true);
    }
  );

  test.each(["abc", "415-555-01x2"])("rejects %s", (phone) => {
    expect(phoneRegExp.test(phone)).toBe(false);
  });
});
