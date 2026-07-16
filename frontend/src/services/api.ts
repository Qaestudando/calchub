const API_URL = "http://127.0.0.1:8000";

export interface HistoryItem {
  month: number;
  balance: number;
}

export interface CompoundInterestResponse {
  initial_amount: number;
  monthly_contribution: number;
  months: number;
  rate: number;

  total_contributions: number;
  total_invested: number;

  final_amount: number;
  interest_earned: number;
  profitability: number;

  history: HistoryItem[];
}

export interface SimpleInterestResponse {
  capital: number;
  rate: number;
  months: number;
  interest_earned: number;
  final_amount: number;
}

export interface PercentageResponse {
  value: number;
  percentage: number;
  result: number;
}

export async function calculateCompoundInterest(
  capital: number,
  rate: number,
  months: number,
  monthlyContribution: number,
): Promise<CompoundInterestResponse> {
  const params = new URLSearchParams({
    capital: capital.toString(),
    rate: rate.toString(),
    months: months.toString(),
    monthly_contribution: monthlyContribution.toString(),
  });

  const response = await fetch(
    `${API_URL}/compound-interest?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Erro ao calcular juros compostos.");
  }

  return await response.json();
}

export async function calculateSimpleInterest(
  capital: number,
  rate: number,
  months: number,
): Promise<SimpleInterestResponse> {
  const params = new URLSearchParams({
    capital: capital.toString(),
    rate: rate.toString(),
    months: months.toString(),
  });

  const response = await fetch(
    `${API_URL}/simple-interest?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Erro ao calcular juros simples.");
  }

  return await response.json();
}

export async function calculatePercentage(
  value: number,
  percentage: number,
): Promise<PercentageResponse> {
  const params = new URLSearchParams({
    value: value.toString(),
    percentage: percentage.toString(),
  });

  const response = await fetch(
    `${API_URL}/percentage?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Erro ao calcular porcentagem.");
  }

  return await response.json();
}