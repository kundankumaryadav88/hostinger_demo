const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
  res.send(`Hello World from ${env} environment!`);
});

app.get('/health', (req, res) => {
  res.send('Health check passed!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
