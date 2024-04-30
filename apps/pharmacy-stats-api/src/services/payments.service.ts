import fs from 'fs';
import MonthlyPaymentsResponse from '../responses/MonthlyPaymentsResponse';
import paymentParser from '../parsers/payments-parser/PaymentsParser';

const paymentsService = () => {
  const payments2022 = fs.readFileSync(
    './src/data/payments_on_contracts_pharmacy_2022.csv',
    {encoding: 'utf8'}
  );
  const payments2023 = fs.readFileSync(
    './src/data/payments_on_contracts_pharmacy_2023.csv',
    {encoding: 'utf8'}
  );
  const response = new MonthlyPaymentsResponse();
  response['2022'] = paymentParser(payments2022);
  response['2023'] = paymentParser(payments2023);
  return response;
};

export default paymentsService;
