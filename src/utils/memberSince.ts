import { format } from "date-fns";

export const formatMemberSince = (createdAt: Date | string) =>
  `Member since ${format(new Date(createdAt), "MMMM yyyy")}`;
