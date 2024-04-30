import express from 'express';
import paymentsRouter from './routers/paymentsRouter';
const app = express();
const port = 4455;

app.use('/payments', paymentsRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
