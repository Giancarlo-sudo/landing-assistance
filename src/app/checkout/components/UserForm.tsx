"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react";
import { UserFormValues, UserProps } from "@/app/types";
import { userValidationSchema } from "@/app/validation";
import { inputClass } from "@/app/helper";

export const UserForm = ({ onSubmit, onBack }: UserProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik<UserFormValues>({
    initialValues: {
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userPassword: "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
      <div className="mb-6">
        <p className="text-xs text-hero font-medium uppercase tracking-wider">
          Paso 2 de 4
        </p>
        <h2 className="text-2xl font-bold text-slate-900 mt-1">
          Datos del administrador
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Este usuario tendrá acceso total a tu cuenta
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Nombre
            </label>
            <input
              type="text"
              name="userFirstName"
              value={formik.values.userFirstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Juan"
              className={inputClass(
                formik.touched,
                formik.errors,
                "userFirstName",
              )}
            />
            {formik.touched.userFirstName && formik.errors.userFirstName && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.userFirstName}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Apellido
            </label>
            <input
              type="text"
              name="userLastName"
              value={formik.values.userLastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Pérez"
              className={inputClass(
                formik.touched,
                formik.errors,
                "userLastName",
              )}
            />
            {formik.touched.userLastName && formik.errors.userLastName && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.userLastName}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email del administrador
          </label>
          <input
            type="email"
            name="userEmail"
            value={formik.values.userEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="admin@miempresa.com"
            autoComplete="email"
            className={inputClass(formik.touched, formik.errors, "userEmail")}
          />
          {formik.touched.userEmail && formik.errors.userEmail && (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.userEmail}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Contraseña
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="userPassword"
              value={formik.values.userPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Mínimo 8 caracteres"
              autoComplete="new-password"
              className={`${inputClass(formik.touched, formik.errors, "userPassword")} pr-12`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          {formik.touched.userPassword && formik.errors.userPassword && (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.userPassword}
            </p>
          )}
        </div>

        <div className="flex gap-3 mt-2">
          <button
            type="button"
            onClick={onBack}
            disabled={formik.isSubmitting}
            className="w-1/3 h-12 bg-white flex justify-center items-center gap-1 cursor-pointer text-slate-700 rounded-xl font-medium text-sm border border-slate-200 hover:bg-slate-50 transition-all disabled:opacity-50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Atrás</span>
          </button>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="flex-1 h-12 bg-hero flex justify-center items-center gap-1 cursor-pointer text-white rounded-xl font-medium text-sm hover:opacity-90 transition-all disabled:opacity-50"
          >
            <span>Continuar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
