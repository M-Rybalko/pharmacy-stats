export interface CompanyHeight {
  height: number;
  price: number;
  name: string;
}
export interface CompanyMonthBar {
  month: string;
  total: number;
  height: number;
  width: number;
  companies: CompanyHeight[];
}

export type CompaniesBarHeight = CompanyMonthBar[];
