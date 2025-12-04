import { ValidateFormProps } from "../types";

export const validateForm = ({ formData, setErrors }: ValidateFormProps) => {
  const newErrors: Record<string, string> = {};

  if (!formData.name.trim()) {
    newErrors.name = "El nombre es requerido";
  }

  if (!formData.email.trim()) {
    newErrors.email = "El email es requerido";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Email inválido";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "El teléfono es requerido";
  } else if (!/^\+?[\d\s-]{9,}$/.test(formData.phone)) {
    newErrors.phone = "Teléfono inválido";
  }

  if (!formData.company.trim()) {
    newErrors.company = "La empresa es requerida";
  }

  if (!formData.employees) {
    newErrors.employees = "Selecciona el número de empleados";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
