import { PlanPeriod } from "@/app/types";

interface Props {
  period: PlanPeriod;
  onChange: (period: PlanPeriod) => void;
}

export const PricingToggle = ({ period, onChange }: Props) => {
  return (
    <div className="w-full flex justify-center mb-8">
      <div className="max-w-64  relative inline-flex rounded-full bg-slate-50 p-1.5 border border-slate-200 shadow-sm">
        <div
          className={`absolute top-1.5 bottom-1.5  rounded-lg transition-transform duration-200 ease-out ${
            period === "MONTHLY" ? "left-2 right-[50%]" : "right-2 left-[50%]"
          }`}
          style={{
            transform:
              period === "MONTHLY" ? "translateX(0%)" : "translateX(0%)",
          }}
        />

        <button
          onClick={() => onChange("MONTHLY")}
          className={`relative py-1 left-4 rounded-full text-sm font-semibold transition-colors z-10 ${
            period === "MONTHLY"
              ? "text-slate-900"
              : "text-slate-600 hover:text-slate-700"
          }`}
        >
          Mensual
        </button>

        <button
          onClick={() => onChange("ANNUAL")}
          className={`relative px-6 py-1 rounded-lg text-sm font-semibold transition-colors z-10 flex justify-center left-4 items-center gap-2 ${
            period === "ANNUAL"
              ? "text-slate-900"
              : "text-slate-600 hover:text-slate-700"
          }`}
        >
          Anual
          <span className="bg-hero-pricing text-hero-pricing-foreground text-xs px-2 py-1 rounded-full font-medium">
            Ahorra 15%
          </span>
        </button>
      </div>
    </div>
  );
};
