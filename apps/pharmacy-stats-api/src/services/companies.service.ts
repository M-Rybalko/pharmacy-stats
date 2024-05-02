import fs from 'fs';
import CompaniesResponse from '../responses/CompaniesResponse';
import companiesParser from '../parsers/companies-parser/CompaniesParser';

const companiesService = () => {
  const payments2022 = fs.readFileSync(
    './src/data/payments_on_contracts_pharmacy_2022.csv',
    {encoding: 'utf8'}
  );
  const payments2023 = fs.readFileSync(
    './src/data/payments_on_contracts_pharmacy_2023.csv',
    {encoding: 'utf8'}
  );
  const response: CompaniesResponse = new CompaniesResponse();
  response['2022'] = companiesParser(payments2022);
  response['2023'] = companiesParser(payments2023);
  return response;
};

export default companiesService;
