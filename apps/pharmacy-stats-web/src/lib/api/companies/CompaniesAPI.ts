import {client} from '../client';
import {Companies} from '@/lib/api/companies/interfaces';

class CompaniesAPI {
  async getCompanies() {
    const {data} = await client.get<Companies>('/companies');
    return data;
  }
}

export default new CompaniesAPI();
