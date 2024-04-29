import express from 'express';
import getMonthlyPayments from './controllers/PaymentController/paymentController';
const app = express();
const port = 4455;

app.get('/api/payments', getMonthlyPayments);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
