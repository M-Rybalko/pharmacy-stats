import express from 'express';
const app = express();
const port = 4455;

app.get('/api/payments', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
