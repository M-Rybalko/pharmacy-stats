import trimData from '../utils';
import {months} from '../constants';
import MonthlyPaymentsDTO from '../../dtos/MonthlyPaymentsDTO';
const paymentParser = (csv: string) => {
  const trimmedCsv: string = trimData(csv);
  const rows = trimmedCsv.split('\n');
  const keys: string[] = rows[0].split(',');
  const monthIndex = keys.indexOf('period_month');
  const paymentIndex = keys.indexOf('pay_package');
  const data: string[][] = [];
  const payments = new MonthlyPaymentsDTO();

  const stringValues = rows.slice(1, rows.length);
  for (const str of stringValues) {
    data.push(str.split(','));
  }

  for (const key of Object.keys(months)) {
    let monthSum = 0;
    const curMonth: string = months[key];
    for (const payment of data) {
      if (payment[monthIndex] === key) {
        monthSum += +payment[paymentIndex];
      }
    }
    payments[curMonth] = monthSum.toFixed(2);
  }

  return payments;
};

export default paymentParser;
