import trimData from '../utils';
import {months} from '../constants';
import CompaniesDTO, {
  CompanyStat,
  MonthlyTopCompanies,
} from '../../dtos/CompaniesDTO';

const paymentParser = (csv: string) => {
  const trimmedCsv: string = trimData(csv);
  const rows = trimmedCsv.split('\n');
  const keys: string[] = rows[0].split(',');
  const monthIndex = keys.indexOf('period_month');
  const paymentIndex = keys.indexOf('pay_package');
  const companyIndex = keys.indexOf('legal_entity_name');
  const data: string[][] = [];
  const result: CompaniesDTO = new CompaniesDTO();

  const stringValues = rows.slice(1, rows.length);
  for (const str of stringValues) {
    data.push(str.split(','));
  }

  for (const key of Object.keys(months)) {
    const curMonth: string[][] = data.filter(row => row[monthIndex] === key);
    const companies: Set<string> = new Set();
    const monthlyStat: MonthlyTopCompanies = {companies: [], total: 0};
    for (const record of curMonth) {
      companies.add(record[companyIndex]);
      monthlyStat.total += +record[paymentIndex];
    }
    monthlyStat.total = +monthlyStat.total.toFixed(2);
    for (const company of companies) {
      const current: CompanyStat = {name: company, payment: 0};
      const companyPayments = curMonth.filter(
        row => row[companyIndex] === company
      );
      companyPayments.map(
        payment => (current.payment += +payment[paymentIndex])
      );
      current.payment.toFixed(2);
      monthlyStat.companies.push(current);
    }
    monthlyStat.companies.sort((a, b) => b.payment - a.payment);
    monthlyStat.companies = monthlyStat.companies.slice(0, 10);
    result[months[key]] = monthlyStat;
  }
  return result;
};

export default paymentParser;
