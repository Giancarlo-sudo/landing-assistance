import { CheckoutData } from "@/app/types";
import { apiClient } from "./apiClient";
import axios from "axios";

export class OrderService {
  private baseURL: string = "orders";

  async createOrder(checkoutData: CheckoutData) {
    try {
      const { data } = await apiClient.post(this.baseURL, {
        ...checkoutData.company,
        ...checkoutData.user,
        planCode: checkoutData.planCode,
        billingPeriod: checkoutData.billingPeriod,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data?.data?.orderId) {
          return { data: { id: error.response.data.data.orderId } };
        }
        throw new Error(
          error.response?.data?.message || "Error al crear la orden",
        );
      }
      throw error;
    }
  }
}

export const orderService = new OrderService();

export const createOrder = async (data: CheckoutData) => {
  return orderService.createOrder(data);
};
