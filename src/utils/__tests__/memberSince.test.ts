import { describe, expect, test } from "vitest";
import { formatMemberSince } from "../memberSince";

describe("formatMemberSince", () => {
  test("formats an ISO date as full month and year", () => {
    expect(formatMemberSince("2023-03-09T22:26:40.101Z")).toBe("Member since March 2023");
  });

  test("accepts a Date", () => {
    expect(formatMemberSince(new Date(2021, 11, 15))).toBe("Member since December 2021");
  });
});
