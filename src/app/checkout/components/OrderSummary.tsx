"use client";

import { useEffect, useState } from "react";
import { CheckIcon } from "lucide-react";
import { Plan, SummaryProps } from "@/app/types";
import { getPublicPlans } from "@/app/lib";
import { formatCurrency } from "@/app/helper";

export const OrderSummary = ({ planCode, period }: SummaryProps) => {
  const [plan, setPlan] = useState<Plan | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPublicPlans()
      .then((res) => {
        const found = res.data.find((p: Plan) => p.code === planCode);
        setPlan(found || null);
      })
      .finally(() => setIsLoading(false));
  }, [planCode]);

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 animate-pulse">
        <div className="h-4 bg-slate-100 rounded w-1/2 mb-4" />
        <div className="h-8 bg-slate-100 rounded w-3/4 mb-6" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-3 bg-slate-100 rounded" />
          ))}
        </div>
      </div>
    );
  }

  if (!plan) return null;

  const price = plan.prices.find((p) => p.period === period);
  if (!price) return null;

  const annualSaving =
    period === "ANNUAL"
      ? Number(plan.prices.find((p) => p.period === "MONTHLY")?.price || 0) *
          12 -
        Number(price.price)
      : 0;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-8">
      <div className="mb-4">
        <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
          Resumen
        </p>
        <h3 className="text-lg font-bold text-slate-900 mt-1">{plan.name}</h3>
      </div>

      <div className="bg-slate-50 rounded-xl p-4 mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-slate-900">
            {formatCurrency(Number(price.price))}
          </span>
          <span className="text-sm text-slate-500">
            /{period === "MONTHLY" ? "mes" : "año"}
          </span>
        </div>
        {period === "ANNUAL" && annualSaving > 0 && (
          <span className="text-xs text-emerald-600 font-medium bg-emerald-100 px-2 py-0.5 rounded-full mt-2 inline-block">
            Ahorras {formatCurrency(annualSaving)} al año
          </span>
        )}
      </div>

      <ul className="space-y-2.5 mb-6">
        {Object.entries(plan.features).map(([key, value]) => (
          <li key={key} className="flex items-start gap-2">
            <CheckIcon className="w-4 h-4 text-hero shrink-0 mt-0.5" />
            <span className="text-slate-600 text-xs leading-relaxed">
              {typeof value === "boolean" ? key : `${key}: ${value}`}
            </span>
          </li>
        ))}
      </ul>

      <div className="border-t border-slate-100 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-slate-700">Total hoy</span>
          <span className="text-lg font-bold text-slate-900">
            {formatCurrency(Number(price.price))}
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          {period === "MONTHLY"
            ? "Se renueva mensualmente"
            : "Se renueva anualmente"}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <svg
          className="w-4 h-4 text-emerald-500 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        <span>Pago seguro garantizado por MercadoPago</span>
      </div>
    </div>
  );
};
