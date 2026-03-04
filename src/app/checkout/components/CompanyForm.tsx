"use client";

import { useFormik } from "formik";
import { companyValidationSchema } from "@/app/validation";
import { CompanyFormValues, CompanyFormProps } from "@/app/types";
import { inputClass } from "@/app/helper";
import { ArrowRight } from "lucide-react";

export const CompanyForm = ({ onSubmit }: CompanyFormProps) => {
  const formik = useFormik<CompanyFormValues>({
    initialValues: {
      companyName: "",
      name: "",
      ruc: "",
      phone: "",
      email: "",
      address: "",
    },
    validationSchema: companyValidationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
      <div className="mb-6">
        <p className="text-xs text-hero font-medium uppercase tracking-wider">
          Paso 1 de 4
        </p>
        <h2 className="text-2xl font-bold text-slate-900 mt-1">
          Datos de tu empresa
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Ingresa la información de tu empresa para crear tu cuenta
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1.5">
            Razón social
          </label>
          <input
            type="text"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ej: Mi Empresa S.A.C"
            className={inputClass(formik.touched, formik.errors, "companyName")}
          />
          {formik.touched.companyName && formik.errors.companyName && (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.companyName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1.5">
            Nombre de la Empresa
          </label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ej: Mi Empresa S.A.C"
            className={inputClass(formik.touched, formik.errors, "name")}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1.5">
              RUC
            </label>
            <input
              type="text"
              name="ruc"
              value={formik.values.ruc}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="20xxxxxxxxx"
              maxLength={11}
              className={`${inputClass(formik.touched, formik.errors, "ruc")} font-mono`}
            />
            {formik.touched.ruc && formik.errors.ruc && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.ruc}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1.5">
              Teléfono
            </label>
            <input
              type="text"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="9xxxxxxxx"
              maxLength={9}
              className={`${inputClass(formik.touched, formik.errors, "phone")} font-mono`}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1.5">
            Email de la empresa
          </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="contacto@miempresa.com"
            autoComplete="email"
            className={inputClass(formik.touched, formik.errors, "email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1.5">
            Dirección
            <span className="text-gray-400 font-normal text-xs">
              (opcional)
            </span>
          </label>
          <input
            type="text"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Av. Example 123, Lima"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none transition-all focus:border-hero focus:ring-2 focus:ring-blue-50"
          />
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full h-12 bg-hero cursor-pointer  disabled:bg-gray-200 flex justify-center items-center gap-1 text-white rounded-xl font-medium text-sm hover:opacity-90 transition-all mt-2 disabled:opacity-50"
        >
          <span>Continuar</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
