export interface CompanyFormValues {
  name: string;
  companyName: string;
  ruc: string;
  phone: string;
  email: string;
  address?: string;
}

export interface CompanyFormProps {
  onSubmit: (data: CompanyFormValues) => void;
}
