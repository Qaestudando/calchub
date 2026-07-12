export interface CompoundInterestResponse {
  initial_amount: number;
  monthly_contribution: number;
  rate: number;
  months: number;
  total_invested: number;
  final_amount: number;
  interest_earned: number;
  profitability: number;
  history: {
    month: number;
    balance: number;
  }[];
}