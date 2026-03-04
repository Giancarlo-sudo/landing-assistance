import * as Yup from "yup";
import { ValidateFormProps } from "../types";
import { validateRUC } from "./validateRuc";

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

// Validacion de formulario de pago
export const paymentValidationSchema = Yup.object({
  cardNumber: Yup.string()
    .required("Número de tarjeta requerido")
    .matches(/^\d{16}$/, "Debe tener 16 dígitos"),
  cardholderName: Yup.string()
    .required("Nombre requerido")
    .min(3, "Nombre muy corto")
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo letras permitidas"),
  expiryDate: Yup.string()
    .required("Fecha requerida")
    .matches(/^\d{2}\/\d{2}$/, "Formato: MM/YY")
    .test("expiry", "Tarjeta vencida", (value) => {
      if (!value) return false;
      const [month, year] = value.split("/");
      const expiry = new Date(2000 + Number(year), Number(month) - 1);
      return expiry > new Date();
    }),
  cvv: Yup.string()
    .required("CVV requerido")
    .matches(/^\d{3,4}$/, "CVV inválido"),
  identificationNumber: Yup.string()
    .required("DNI requerido")
    .matches(/^\d{8}$/, "DNI debe tener 8 dígitos"),
});

// Validacion de formulario para usuarios
export const userValidationSchema = Yup.object({
  userFirstName: Yup.string()
    .required("El nombre es requerido")
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo letras permitidas"),
  userLastName: Yup.string()
    .required("El apellido es requerido")
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo letras permitidas"),
  userEmail: Yup.string()
    .required("El email es requerido")
    .email("Email inválido"),
  userPassword: Yup.string()
    .required("La contraseña es requerida")
    .min(8, "Mínimo 8 caracteres")
    .matches(/[A-Z]/, "Debe tener al menos una mayúscula")
    .matches(/[0-9]/, "Debe tener al menos un número"),
});

// Validacion de formulario de empresa
export const companyValidationSchema = Yup.object({
  companyName: Yup.string()
    .required("El nombre es requerido")
    .min(3, "Nombre muy corto"),
  name: Yup.string()
    .required("El nombre es requerido")
    .min(3, "Nombre muy corto"),
  ruc: Yup.string()
    .required("El RUC es requerido")
    .test("ruc-valido", "RUC inválido", (value) => {
      if (!value) return false;
      return validateRUC(value);
    }),
  phone: Yup.string()
    .required("El teléfono es requerido")
    .matches(/^9\d{8}$/, "Debe empezar con 9 y tener 9 dígitos"),
  email: Yup.string().required("El email es requerido").email("Email inválido"),
  address: Yup.string().optional(),
});
