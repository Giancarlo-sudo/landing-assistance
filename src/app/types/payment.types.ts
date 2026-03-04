import { CompanyFormData, UserFormData } from "./checkout.types";
import { Period } from "./order.types";

export interface PaymentResult {
  paymentId: string;
  status: string;
  companyName: string;
  planCode: string;
  period: Period;
}

export interface PaymentProps {
  companyData: CompanyFormData;
  userData: UserFormData;
  planCode: string;
  period: Period;
  orderId: string | null;
  onOrderCreated: (id: string) => void;
  onSuccess: (data: PaymentResult) => void;
  onBack: () => void;
}

export interface PaymentFormValues {
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvv: string;
  identificationNumber: string;
}
