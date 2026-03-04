"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getPublicPlans } from "@/app/lib";
import { formatCurrency } from "@/app/helper";
import { ConfirmationProps } from "@/app/types";

export const Confirmation = ({ paymentData }: ConfirmationProps) => {
  const router = useRouter();
  const [planName, setPlanName] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (!paymentData) return;
    getPublicPlans().then((res) => {
      const plan = res.data.find((p: any) => p.code === paymentData.planCode);
      if (plan) {
        setPlanName(plan.name);
        const price = plan.prices.find(
          (p: any) => p.period === paymentData.period,
        );
        if (price) setAmount(Number(price.price));
      }
    });
  }, [paymentData]);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-emerald-500" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-1">¡Pago exitoso!</h2>
      <p className="text-slate-500 text-sm mb-8">
        Tu cuenta ha sido creada. Revisa tu email para acceder.
      </p>

      {paymentData && (
        <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left border border-slate-100">
          <p className="text-sm font-semibold text-slate-700 mb-4">
            Resumen del pago
          </p>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Empresa</span>
              <span className="font-medium text-slate-800">
                {paymentData.companyName}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Plan</span>
              <span className="font-medium text-slate-800">{planName}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Facturación</span>
              <span className="font-medium text-slate-800">
                {paymentData.period === "MONTHLY" ? "Mensual" : "Anual"}
              </span>
            </div>
            <div className="border-t border-slate-200 pt-3 flex justify-between text-sm">
              <span className="text-slate-500">Total pagado</span>
              <span className="font-bold text-slate-900">
                {formatCurrency(amount)}
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">ID de pago</span>
              <span className="text-slate-400 font-mono">
                {paymentData.paymentId.slice(0, 8)}...
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 rounded-xl p-4 mb-8 text-left">
        <p className="text-xs font-medium text-blue-700 mb-3">
          Próximos pasos:
        </p>
        <ul className="space-y-2">
          {[
            "Revisa tu email para confirmar tu cuenta",
            "Inicia sesión con tus credenciales",
            "Configura tu empresa y usuarios",
          ].map((step, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-5 h-5 bg-hero text-white rounded-full flex items-center justify-center text-xs shrink-0">
                {index + 1}
              </div>
              <span className="text-xs text-blue-700">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() =>
          (window.location.href =
            process.env.NEXT_PUBLIC_DASHBOARD_URL + "/login")
        }
        className="w-full h-12 bg-hero text-white rounded-xl font-medium text-sm hover:opacity-90 transition-all flex justify-center items-center gap-1"
      >
        <span>Iniciar sesión</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
