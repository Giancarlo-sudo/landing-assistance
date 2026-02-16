import { PlanPeriod } from "@/app/types";

interface Props {
  period: PlanPeriod;
  onChange: (period: PlanPeriod) => void;
}

export const PricingToggle = ({ period, onChange }: Props) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative inline-flex rounded-xl bg-slate-100 p-1.5 border border-slate-200 shadow-sm">
        <div
          className={`absolute top-1.5 bottom-1.5 bg-white rounded-lg shadow-sm transition-transform duration-200 ease-out ${
            period === "MONTHLY"
              ? "left-1.5 right-[50%]"
              : "right-1.5 left-[50%]"
          }`}
          style={{
            transform:
              period === "MONTHLY" ? "translateX(0%)" : "translateX(0%)",
          }}
        />

        <button
          onClick={() => onChange("MONTHLY")}
          className={`relative px-6 py-2.5 left-6 rounded-lg text-sm font-semibold transition-colors z-10 ${
            period === "MONTHLY"
              ? "text-slate-900"
              : "text-slate-600 hover:text-slate-700"
          }`}
        >
          Mensual
        </button>

        <button
          onClick={() => onChange("ANNUAL")}
          className={`relative px-12 py-2.5 rounded-lg text-sm font-semibold transition-colors z-10 flex justify-center left-8 items-center gap-2 ${
            period === "ANNUAL"
              ? "text-slate-900"
              : "text-slate-600 hover:text-slate-700"
          }`}
        >
          Anual
          <span className="bg-[#2e2f45] text-white text-xs px-2 py-1 rounded-full font-medium">
            Ahorra 15%
          </span>
        </button>
      </div>
    </div>
  );
};
