import express from 'express';
import paymentsRouter from './routers/paymentsRouter';
import cors from 'cors';
import companiesRouter from './routers/companiesRouter';
const app = express();
const port = 4455;

app.use(cors());
app.use('/payments', paymentsRouter);
app.use('/companies', companiesRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
