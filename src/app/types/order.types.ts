export const Period = {
  MONTHLY: "MONTHLY",
  ANNUAL: "ANNUAL",
} as const;

export type Period = (typeof Period)[keyof typeof Period];
