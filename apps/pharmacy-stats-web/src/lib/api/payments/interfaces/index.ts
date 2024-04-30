export interface MonthlyPayments {
  January: number;
  February: number;
  March: number;
  April: number;
  May: number;
  June: number;
  July: number;
  August: number;
  September: number;
  October: number;
  November: number;
  December: number;
}

export interface AnnualPayments {
  2022: MonthlyPayments;
  2023: MonthlyPayments;
}
