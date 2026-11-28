import { describe, expect, it } from "vitest";
import { formatMemberSince } from "../memberSinceUtils";

describe("formatMemberSince", () => {
  it("shows the full month name and year of the join date", () => {
    expect(formatMemberSince("2023-03-09T12:00:00.000Z")).toBe("Member since March 2023");
  });

  it("accepts a Date", () => {
    expect(formatMemberSince(new Date(2021, 10, 15))).toBe("Member since November 2021");
  });
});
