import {client} from '../client';
import {AnnualPayments} from '@/lib/api/payments/interfaces';

class PaymentsAPI {
  async getAnnualPayments() {
    const {data} = await client.get<AnnualPayments[]>('/payments');
    return data;
  }
}

export default new PaymentsAPI();
