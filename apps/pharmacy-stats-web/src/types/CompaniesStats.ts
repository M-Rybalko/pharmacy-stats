import {MonthlyTopCompanies} from '@/lib/api/companies/interfaces';

export interface CompaniesStats {
  [key: string]: MonthlyTopCompanies;
}
