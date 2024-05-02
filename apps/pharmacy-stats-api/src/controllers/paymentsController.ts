import paymentsService from '../services/payments.service';

const getMonthlyPayments = async (req, res) => {
  const response = paymentsService();
  res.send(response);
};

export default getMonthlyPayments;
