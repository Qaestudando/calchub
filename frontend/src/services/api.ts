import type { CompoundInterestResponse } from "@/src/components/calculators/compound-interest/types";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000";

export async function apiGet<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Erro ao conectar com a API.");
  }

  return response.json();
}

export async function calculateCompoundInterest(
  capital: number,
  rate: number,
  months: number,
  monthlyContribution: number
): Promise<CompoundInterestResponse> {
  const params = new URLSearchParams({
    capital: capital.toString(),
    rate: rate.toString(),
    months: months.toString(),
    monthly_contribution: monthlyContribution.toString(),
  });

  return apiGet<CompoundInterestResponse>(
    `/compound-interest?${params.toString()}`
  );
}