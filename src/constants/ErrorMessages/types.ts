export type iInvalidDateRangeHandler = (
  field: string,
  beforeOrAfter: "before" | "later than",
  date: string
) => string;

export type BeforeOrAfterType = "before" | "later than";
