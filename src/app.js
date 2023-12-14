const express = require('express');
const namesRoute = require('./routes');

const app = express();
app.use(express.json());
app.get('/', namesRoute);

app.get('/checkHealth', (req, res) => {
  res.sendStatus(200);
});

module.exports = app;