export type PlanPeriod = "MONTHLY" | "ANNUAL";

export interface PlanPrice {
  id: string;
  planId: string;
  period: PlanPeriod;
  price: string;
  currency: string;
  label: string;
  validFrom: string;
  validUntil: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Plan {
  id: string;
  code: string;
  name: string;
  description: string;
  features: Record<string, any>;
  isActive: boolean;
  isPublic: boolean;
  isFeatured: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  prices: PlanPrice[];
}

export interface PlansResponse {
  message: string;
  data: Plan[];
  success: boolean;
}
