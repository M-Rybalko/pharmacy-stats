import express from 'express';
import getMonthlyPayments from '../controllers/PaymentsController/paymentsController';

const paymentsRouter = express.Router();

paymentsRouter.get('/', getMonthlyPayments);

export default paymentsRouter;
