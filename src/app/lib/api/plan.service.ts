import { PlansResponse } from "@/app/types";
import { apiClient } from "./apiClient";

export class Plan {
  private readonly baseURL: string = "plan";

  async getPublicPlans(): Promise<PlansResponse> {
    try {
      const { data } = await apiClient.get(`${this.baseURL}/public`);
      return data;
    } catch (error) {
      console.error("Error al obtener planes", error);
      throw error;
    }
  }
}

export const planService = new Plan();

export const getPublicPlans = () => planService.getPublicPlans();
