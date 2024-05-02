export interface CompanyStat {
  name: string;
  payment: number;
}

export interface MonthlyTopCompanies {
  companies: CompanyStat[];
  total: number;
}

class CompaniesDTO {
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

export default CompaniesDTO;
