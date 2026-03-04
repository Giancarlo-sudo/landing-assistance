export interface FormDataType {
  name: string;
  email: string;
  phone: string;
  company: string;
  employees: string;
  message: string;
}

export interface ValidateFormProps {
  formData: FormDataType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setErrors: any
}