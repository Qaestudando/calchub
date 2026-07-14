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