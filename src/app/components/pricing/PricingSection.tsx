"use client";

import { Fragment, useState } from "react";
import { Plan, PlanPeriod } from "@/app/types";
import { PricingCard } from "./PricingCard";
import { PricingToggle } from "./PricingToggle";

interface Props {
  plans: Plan[];
}

export const PricingSection = ({ plans }: Props) => {
  const [period, setPeriod] = useState<PlanPeriod>("MONTHLY");

  return (
    <Fragment>
      {/* Toggle Mensual/Anual */}
      <PricingToggle period={period} onChange={setPeriod} />

      {/* Grid de planes */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} period={period} />
        ))}
      </div>
    </Fragment>
  );
};
