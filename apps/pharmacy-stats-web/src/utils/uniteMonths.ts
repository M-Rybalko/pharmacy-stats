import {AnnualPayments, MonthlyPayments} from '@/lib/api/payments/interfaces';
import {PaymentStats} from '@/types/PaymentStats';

export const uniteMonths = (data: AnnualPayments) => {
  const unitedPayments: PaymentStats = {};
  let monthNumber = 0;
  for (const year in data) {
    const monthlyPayments: MonthlyPayments = data[year];
    for (const month in monthlyPayments) {
      monthNumber++;
      unitedPayments[monthNumber.toString()] = monthlyPayments[month];
    }
  }
  return unitedPayments;
};
