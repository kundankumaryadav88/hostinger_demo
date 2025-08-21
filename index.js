const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
  res.send(`Hello World from ${env} environment!`);
});

app.get('/health', (req, res) => {
  res.send('Health check passed and server is running and enjoying!');
});

app.get('/status', (req, res) => {
  res.json({
    status: 'OK',
    environment: env,
    message: 'Server is running smoothly!'
  });
});

app.get('/info', (req, res) => {  
  res.json({
    app: 'Hostinger Demo App',
    version: '1.0.0',
    environment: env,
    description: 'This is a demo application running on Hostinger.',  
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
