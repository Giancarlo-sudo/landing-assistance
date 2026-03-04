import { formatCurrency } from "@/app/helper";
import { Plan, PlanPeriod } from "@/app/types";
import { ArrowRightIcon, CheckIcon, Rocket, Star } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  plan: Plan;
  period: PlanPeriod;
  icon?: React.ReactNode;
}

export const PricingCard = ({ plan, period, icon }: Props) => {
  const price = plan.prices.find((p) => p.period === period);

  if (!price) return null;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/checkout?planCode=${plan.code}&period=${period}`);
  };

  const formatFeature = (key: string, value: any): string => {
    return typeof value === "boolean" && value ? key : `${key}: ${value}`;
  };

  const calculateSavings = (prices: any[]): string => {
    const monthlyPrice = prices.find((p) => p.period === "MONTHLY")?.price || 0;
    const annualPrice = prices.find((p) => p.period === "ANNUAL")?.price || 0;
    const monthlyCost = monthlyPrice * 12;
    const savings = monthlyCost - annualPrice;
    return savings.toLocaleString();
  };

  return (
    <div
      className={`relative rounded-2xl min-h-[560px] h-full p-6 flex flex-col transition-all duration-300 drop-shadow-md ${
        plan.isFeatured
          ? "bg-pricing-card shadow-xl scale-[1.02]"
          : "bg-pricing-card"
      }`}
    >
      <div className="mb-4 flex items-center gap-2">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            plan.isFeatured
              ? "bg-hero-pricing text-hero-pricing-foreground"
              : "bg-hero text-hero-pricing-foreground"
          }`}
        >
          {plan.isFeatured ? (
            <Rocket className="w-5 h-5" />
          ) : (
            <Star className="w-5 h-5" />
          )}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-card-foreground">
          {plan.name}
        </h3>
        <p className="text-muted-pricing-foreground text-sm leading-relaxed">
          {plan.description}
        </p>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-card-foreground tracking-tight">
            {formatCurrency(Number(price.price))}
          </span>
          <span className="text-sm text-muted-pricing-foreground">
            / {period === "MONTHLY" ? "mes" : "año"}
          </span>
        </div>
        {period === "ANNUAL" && (
          <div className="mt-2">
            <span className="text-xs font-medium text-savings bg-savings-bg py-1 px-3 rounded-full">
              Ahorra {formatCurrency(Number(calculateSavings(plan.prices)))}{" "}
              anual
            </span>
          </div>
        )}
      </div>

      <button
        className="w-full h-12 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200 bg-hero-pricing text-hero-pricing-foreground hover:opacity-90 shadow-md hover:shadow-lg hover:-translate-y-0.5 mb-6 cursor-pointer"
        onClick={handleClick}
      >
        <span>Comenzar ahora</span>
        <ArrowRightIcon className="w-4 h-4" />
      </button>

      <div>
        <p className="text-sm font-medium text-card-foreground mb-3">
          Incluye:
        </p>
        <ul className="space-y-3 grow">
          {Object.entries(plan.features).map(([key, value]) => (
            <li key={key} className="flex items-start">
              <CheckIcon className="w-4 h-4 text-hero-pricing mr-2 mt-0.5 shrink-0" />
              <span className="text-muted-pricing-foreground text-sm leading-relaxed">
                {formatFeature(key, value)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
