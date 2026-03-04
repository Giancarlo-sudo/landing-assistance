import { FormikErrors, FormikTouched } from "formik";

export const inputClass = (
  formikTouched: FormikTouched<unknown>,
  formikErrors: FormikErrors<unknown>,
  field: string,
) =>
  `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
    formikTouched[field as keyof typeof formikTouched] &&
    formikErrors[field as keyof typeof formikErrors]
      ? "border-red-400 bg-red-50"
      : "border-slate-200 focus:border-hero focus:ring-2 focus:ring-blue-50"
  }`;
