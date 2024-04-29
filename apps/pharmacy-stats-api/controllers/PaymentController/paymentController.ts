import fs from 'fs';
import MonthlyPaymentsResponse from '../../responses/MonthlyPaymentsResponse';
import paymentParser from '../../parsers/payment-parser/PaymentsParser';

const getMonthlyPayments = async (req, res) => {
  const payments2022 = fs.readFileSync(
    './data/payments_on_contracts_pharmacy_2022.csv',
    {encoding: 'utf8'}
  );
  const payments2023 = fs.readFileSync(
    './data/payments_on_contracts_pharmacy_2023.csv',
    {encoding: 'utf8'}
  );
  const response = new MonthlyPaymentsResponse();
  response['2022'] = paymentParser(payments2022);
  response['2023'] = paymentParser(payments2023);
  if (response['2022'] && response['2023']) res.send(response);
  else res.sendStatus(404);
};

export default getMonthlyPayments;
