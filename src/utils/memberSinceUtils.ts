import { format as formatDate } from "date-fns";

// "Member since March 2023" from a user's createdAt (Date or ISO string).
export const formatMemberSince = (createdAt: Date | string) =>
  `Member since ${formatDate(new Date(createdAt), "MMMM yyyy")}`;
