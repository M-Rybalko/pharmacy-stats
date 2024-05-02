export interface CompanyStat {
  name: string;
  payment: number;
}

export interface MonthlyTopCompanies {
  companies: CompanyStat[];
  total: number;
}

export interface AnnualCompanies {
  January: MonthlyTopCompanies;
  February: MonthlyTopCompanies;
  March: MonthlyTopCompanies;
  April: MonthlyTopCompanies;
  May: MonthlyTopCompanies;
  June: MonthlyTopCompanies;
  July: MonthlyTopCompanies;
  August: MonthlyTopCompanies;
  September: MonthlyTopCompanies;
  October: MonthlyTopCompanies;
  November: MonthlyTopCompanies;
  December: MonthlyTopCompanies;
}

export interface Companies {
  2022: AnnualCompanies;
  2023: AnnualCompanies;
}
