"use client";

import { useEffect } from "react";
import { useFormik } from "formik";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { MercadoPagoInstance } from "@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago";
import { PaymentFormValues, PaymentProps } from "@/app/types";
import { createOrder, processPayment } from "@/app/lib";
import {
  detectCardType,
  formatCardNumber,
  formatExpiryDate,
  inputClass,
} from "@/app/helper";
import { paymentValidationSchema } from "@/app/validation";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const PaymentForm = ({
  companyData,
  userData,
  planCode,
  period,
  orderId,
  onOrderCreated,
  onSuccess,
  onBack,
}: PaymentProps) => {
  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!);
  }, []);

  const formik = useFormik<PaymentFormValues>({
    initialValues: {
      cardNumber: "",
      cardholderName: "",
      expiryDate: "",
      cvv: "",
      identificationNumber: "",
    },
    validationSchema: paymentValidationSchema,
    onSubmit: async (values, { setStatus, resetForm }) => {
      try {
        // Crear orden si no existe
        let currentOrderId = orderId;
        if (!currentOrderId) {
          const order = await createOrder({
            company: companyData,
            user: userData,
            planCode,
            billingPeriod: period,
          });
          currentOrderId = order.data.id;
          onOrderCreated(currentOrderId!);
        }

        // Obtener instancia MP y crear token
        const mpInstance = await MercadoPagoInstance.getInstance();
        if (!mpInstance) throw new Error("Error al inicializar MercadoPago");

        const [month, year] = values.expiryDate.split("/");
        const paymentMethodId = detectCardType(
          values.cardNumber.replace(/\s/g, ""),
        );

        const tokenResponse = await mpInstance.createCardToken({
          cardNumber: values.cardNumber.replace(/\s/g, ""),
          cardholderName: values.cardholderName.toUpperCase(),
          cardExpirationMonth: month.trim(),
          cardExpirationYear: `20${year}`.trim(),
          securityCode: values.cvv,
          identificationType: "DNI",
          identificationNumber: values.identificationNumber,
        });

        // Procesar pago
        const result = await processPayment(currentOrderId!, {
          cardToken: tokenResponse.id,
          paymentMethodId,
          payerEmail: userData.userEmail,
        });

        if (result.data.status === "approved") {
          resetForm();
          onSuccess({
            paymentId: result.data.paymentId,
            status: result.data.status,
            companyName: companyData.companyName,
            planCode,
            period,
          });
        } else if (result.data.status === "in_process") {
          setStatus("Tu pago está en proceso. Te notificaremos por email.");
        } else {
          setStatus("El pago fue rechazado. Intenta con otra tarjeta.");
        }
      } catch (err: any) {
        setStatus(err.message || "Error procesando el pago");
      }
    },
  });

  useEffect(() => {
    const timer = setTimeout(
      () => {
        formik.resetForm();
        formik.setStatus(
          "Por seguridad, tus datos han sido limpiados. Por favor vuelve a ingresarlos.",
        );
      },
      6 * 60 * 1000,
    );
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
      <div className="mb-6">
        <p className="text-xs text-hero font-medium uppercase tracking-wider">
          Paso 3 de 4
        </p>
        <h2 className="text-2xl font-bold text-slate-900 mt-1">
          Datos de pago
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Tu información está protegida con encriptación SSL
        </p>
      </div>

      {formik.status && (
        <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-3 rounded-xl mb-6 text-xs">
          <span>{formik.status}</span>
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Número de tarjeta
          </label>
          <input
            type="text"
            name="cardNumber"
            value={formatCardNumber(formik.values.cardNumber)}
            onChange={(e) =>
              formik.setFieldValue(
                "cardNumber",
                e.target.value.replace(/\s/g, ""),
              )
            }
            onBlur={formik.handleBlur}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            className={`${inputClass(
              formik.touched,
              formik.errors,
              "cardNumber",
            )} font-mono`}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber && (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.cardNumber}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Nombre en la tarjeta
          </label>
          <input
            type="text"
            name="cardholderName"
            value={formik.values.cardholderName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="JUAN PEREZ"
            className={inputClass(
              formik.touched,
              formik.errors,
              "cardholderName",
            )}
          />
          {formik.touched.cardholderName && formik.errors.cardholderName && (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.cardholderName}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Vencimiento
            </label>
            <input
              type="text"
              name="expiryDate"
              value={formik.values.expiryDate}
              onChange={(e) =>
                formik.setFieldValue(
                  "expiryDate",
                  formatExpiryDate(e.target.value),
                )
              }
              onBlur={formik.handleBlur}
              placeholder="MM/YY"
              maxLength={5}
              className={`${inputClass(
                formik.touched,
                formik.errors,
                "expiryDate",
              )} font-mono`}
            />
            {formik.touched.expiryDate && formik.errors.expiryDate && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.expiryDate}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              CVV
            </label>
            <input
              type="password"
              name="cvv"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="•••"
              maxLength={4}
              className={`${inputClass(
                formik.touched,
                formik.errors,
                "cvv",
              )} font-mono`}
              onCopy={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
              onCut={(e) => e.preventDefault()}
            />
            {formik.touched.cvv && formik.errors.cvv && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.cvv}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            DNI
          </label>
          <input
            type="text"
            name="identificationNumber"
            value={formik.values.identificationNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="12345678"
            maxLength={8}
            className={`${inputClass(
              formik.touched,
              formik.errors,
              "identificationNumber",
            )} font-mono`}
          />
          {formik.touched.identificationNumber &&
            formik.errors.identificationNumber && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.identificationNumber}
              </p>
            )}
        </div>

        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-xs text-emerald-700">
          <p className="font-medium mb-1">Pago 100% seguro</p>
          <p>• Procesado por MercadoPago</p>
          <p>• Encriptación SSL 256 bits</p>
          <p>• Datos protegidos según PCI DSS</p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onBack}
            disabled={formik.isSubmitting}
            className="w-1/3 h-12 bg-white flex items-center justify-center gap-2 text-slate-700 rounded-xl font-medium text-sm border border-slate-200 hover:bg-slate-50 transition-all disabled:opacity-50"
          >
            <span>Atrás</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="flex-1 h-12 bg-hero text-white rounded-xl font-medium text-sm hover:opacity-90 transition-all disabled:opacity-50"
          >
            {formik.isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Procesando...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <span>Pagar</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
