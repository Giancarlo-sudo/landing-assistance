"use client";

import { Fragment, useEffect, useState } from "react";
import { CompanyFormData, PaymentResult, UserFormData } from "@/app/types";
import {
  CheckoutStepper,
  CompanyForm,
  UserForm,
  PaymentForm,
  Confirmation,
  OrderSummary,
} from ".";
import { useSearchParams } from "next/navigation";
import { HeaderLogo } from "@/app/components";

export const CheckoutClient = () => {
  const searchParams = useSearchParams();
  const planCode = searchParams.get("planCode") || "";
  const period = (searchParams.get("period") || "MONTHLY") as
    | "MONTHLY"
    | "ANNUAL";

  const [currentStep, setCurrentStep] = useState(1);
  const [companyData, setCompanyData] = useState<CompanyFormData | null>(null);
  const [userData, setUserData] = useState<UserFormData | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [paymentResult, setPaymentResult] = useState<PaymentResult | null>(
    null,
  );

  const steps = [
    { number: 1, label: "Empresa" },
    { number: 2, label: "Usuario" },
    { number: 3, label: "Pago" },
    { number: 4, label: "Confirmación" },
  ];

  useEffect(() => {
    const saved = sessionStorage.getItem("pendingOrderId");
    if (saved) setOrderId(saved);
  }, []);

  const handleCompanySubmit = (data: CompanyFormData) => {
    setCompanyData(data);
    setCurrentStep(2);
  };

  const handleUserSubmit = (data: UserFormData) => {
    setUserData(data);
    setCurrentStep(3);
  };

  const handleOrderCreated = (id: string) => {
    setOrderId(id);
    sessionStorage.setItem("pendingOrderId", id);
  };

  const handlePaymentSuccess = (paymentData: PaymentResult) => {
    setPaymentResult(paymentData);
    sessionStorage.removeItem("pendingOrderId");
    setCurrentStep(4);
  };

  return (
    <Fragment>
      <HeaderLogo />

      <div className="min-h-screen bg-slate-50 mt-0">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <CheckoutStepper steps={steps} currentStep={currentStep} />

          <div className="flex gap-8 mt-8">
            <div className="flex-1">
              {currentStep === 1 && (
                <CompanyForm onSubmit={handleCompanySubmit} />
              )}
              {currentStep === 2 && (
                <UserForm
                  onSubmit={handleUserSubmit}
                  onBack={() => setCurrentStep(1)}
                />
              )}
              {currentStep === 3 && companyData && userData && (
                <PaymentForm
                  companyData={companyData}
                  userData={userData}
                  planCode={planCode}
                  period={period}
                  orderId={orderId}
                  onOrderCreated={handleOrderCreated}
                  onSuccess={handlePaymentSuccess}
                  onBack={() => setCurrentStep(2)}
                />
              )}
              {currentStep === 4 && (
                <Confirmation paymentData={paymentResult} />
              )}
            </div>

            {currentStep !== 4 && (
              <div className="w-80">
                <OrderSummary planCode={planCode} period={period} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
