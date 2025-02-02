import express, { Application } from 'express';

const app: Application = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from TypeScript backend!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
