import { PlanPrice } from "@/app/types";

export const calculateSavings = (prices: PlanPrice[]) => {
  const monthly = prices.find((p) => p.period === "MONTHLY");
  const annual = prices.find((p) => p.period === "ANNUAL");

  if (!monthly || !annual) return 0;

  const monthlyTotal = Number(monthly.price) * 12;
  const annualTotal = Number(annual.price);

  return (monthlyTotal - annualTotal).toLocaleString();
};
