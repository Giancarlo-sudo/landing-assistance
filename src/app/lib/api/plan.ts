import { PlansResponse } from "@/app/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function getPublicPlans(): Promise<PlansResponse> {
  const response = await fetch(`${API_URL}/api/plan/public`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Error al obtener planes");
  }

  return response.json();
}
