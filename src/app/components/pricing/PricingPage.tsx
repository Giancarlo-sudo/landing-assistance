import { getPublicPlans } from "@/app/lib";
import { PricingSection } from "./PricingSection";
import { HandCoins } from "lucide-react";
import { BagTitle } from "../ui";
import { Plan } from "@/app/types";

export const PricingPage = async () => {
  let plans: Plan[] = [];
  try {
    const { data } = await getPublicPlans();
    plans = data;
  } catch {
    plans = [];
  }
  return (
    <section className="min-h-screen bg-gray-50" id="plan">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <BagTitle icon={HandCoins} title="Planes" />

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Gestiona las asistencias de tu equipo sin complicaciones
          </h2>
          <p className=" text-slate-600 leading-relaxed max-w-xl mx-auto text-sm font-medium">
            La solución moderna que necesitas para gestionar asistencias,
            horarios y permisos de tu equipo de forma inteligente y sin
            complicaciones.
          </p>
        </div>

        <PricingSection plans={plans} />
      </div>
    </section>
  );
};
