import { PaymentFormData } from "@/app/types";
import { apiClient } from "./apiClient";
import axios from "axios";

export class PaymentService {
  private baseURL: string = "payments";

  async processPayment(orderId: string, payment: PaymentFormData) {
    try {
      const { data } = await apiClient.post(this.baseURL, {
        orderId,
        ...payment,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "Error al procesar el pago",
        );
      }
      throw error;
    }
  }
}

export const paymentService = new PaymentService();

export const processPayment = async (
  orderId: string,
  payment: PaymentFormData,
) => {
  return paymentService.processPayment(orderId, payment);
};
