const express = require('express');
const jwt = require('jsonwebtoken');
const { expressjwt: expressJwt } = require('express-jwt');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const apiKey = '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c';
const jwtSecret = 'JWT_SECRET=ec8529cd20aa5e02a6ed3daf9ed6fc3c3b1651fcc9d700491c914dea134e6169';

app.use(
  expressJwt({ secret: jwtSecret, algorithms: ['HS256'], credentialsRequired: true }).unless({
    path: [{ url: '/DevOps', methods: ['POST'] }, { url: '/generate-jwt', methods: ['POST'] }],
  })
);

app.post('/DevOps', (req, res) => {
  if (req.headers['x-parse-rest-api-key'] !== apiKey) {
    res.status(403).send('Forbidden');
    return;
  }

  const { message, to, from, timeToLifeSec } = req.body;

  if (message && to && from && timeToLifeSec) {
    res.status(200).json({
      message: `Hello ${to}, your message will be sent`,
    });
  } else {
    res.status(400).send('Bad Request');
  }
});

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  }
});

app.use('*', (req, res) => {
  res.status(405).send('ERROR');
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on('SIGTERM', () => {
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
  });
});

module.exports = app;
