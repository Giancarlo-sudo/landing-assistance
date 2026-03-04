export interface CompanyFormData {
  companyName: string;
  ruc: string;
  phone: string;
  email: string;
  address?: string;
}

export interface UserFormData {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPassword: string;
}

export interface PaymentFormData {
  cardToken: string;
  paymentMethodId: string;
  payerEmail: string;
  promoCode?: string;
}

export interface CheckoutData {
  company: CompanyFormData;
  user: UserFormData;
  planCode: string;
  billingPeriod: "MONTHLY" | "ANNUAL";
}
