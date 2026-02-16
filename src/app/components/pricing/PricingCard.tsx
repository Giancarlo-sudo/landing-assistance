import { formatCurrency } from "@/app/helper";
import { Plan, PlanPeriod } from "@/app/types";
import { ArrowRightIcon, CheckIcon, Star } from "lucide-react";

interface Props {
  plan: Plan;
  period: PlanPeriod;
  className?: string;
}

export const PricingCard = ({ plan, period, className = "" }: Props) => {
  // Obtener precio según periodo seleccionado
  const price = plan.prices.find((p) => p.period === period);

  if (!price) return null;

  const formatFeature = (key: string, value: any): string => {
    // Tu lógica existente para formatear features
    return typeof value === "boolean" && value ? key : `${key}: ${value}`;
  };

  const calculateSavings = (prices: any[]): string => {
    // Tu lógica existente para calcular ahorros
    const monthlyPrice = prices.find((p) => p.period === "MONTHLY")?.price || 0;
    const annualPrice = prices.find((p) => p.period === "ANNUAL")?.price || 0;
    const monthlyCost = monthlyPrice * 12;
    const savings = monthlyCost - annualPrice;
    return savings.toLocaleString();
  };

  return (
    <div
      className={`relative rounded-2xl min-h-[600px] h-full p-6 flex flex-col transition-all duration-300 ${
        plan.isFeatured
          ? "bg-white border-2 border-hero shadow-xl shadow-blue-100/50 scale-105"
          : "bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-slate-300 hover:shadow-lg"
      }`}
    >
      {/* Badge "Most Popular" */}
      {plan.isFeatured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-hero text-white px-4 py-1.5 rounded-full shadow-lg flex justify-center items-center">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-xs font-medium">Más Popular</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="py-1 mb-4">
        <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
        <p className="text-gray-500 text-xs leading-relaxed">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="text-start mb-6">
        <div className="flex items-baseline mb-2">
          <div className="flex items-end gap-1">
            <span className="text-3xl font-bold text-slate-900 tracking-tight">
              {formatCurrency(Number(price.price))}
            </span>
            <span className="text-xs font-medium text-gray-500 tracking-tight mb-2">
              {period === "MONTHLY" ? "/mensual" : "/anual"}
            </span>
          </div>
          {period === "ANNUAL" && (
            <span className="text-lg text-slate-400 ml-2 line-through">
              {formatCurrency(Number(price.price) * 1.15)}
            </span>
          )}
        </div>

        {/* Ahorro anual */}
        {period === "ANNUAL" && (
          <div className="mt-2">
            <span
              className="
              text-xs text-emerald-600 font-medium bg-emerald-100 py-1 px-3 rounded-full"
            >
              Ahorra {formatCurrency(Number(calculateSavings(plan.prices)))}{" "}
              anual
            </span>
          </div>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex grow flex-col h-full">
        {Object.entries(plan.features).map(([key, value]) => (
          <li key={key} className="flex items-start">
            <CheckIcon className="w-5 h-5 text-hero mr-1.5 mt-0.5 shrink-0" />
            <span className="text-slate-700 text-sm leading-relaxed">
              {formatFeature(key, value)}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`w-full h-12 py-3.5 px-6 rounded-xl flex justify-center items-center transition-all duration-200 ${
          plan.isFeatured
            ? "bg-hero text-white hover:bg-hero shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            : "bg-white text-[#2e2f45] hover:bg-[#2e2f45] hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
        }`}
      >
        {/* {plan.isFeatured ? "Upgrade to Pro" : `Upgrade to ${plan.name}`} */}
        <span className="text-xs">Comenzar ahora</span>
        <ArrowRightIcon className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};
