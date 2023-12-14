const express = require('express');
const { namesRoutes } = require('./routes');

const app = express();
app.use(express.json());
app.use('/', namesRoutes);

app.get('/checkHealth', (req, res) => {
  res.sendStatus(200);
});

module.exports = app;