const express = require('express');

const app = express();

app.get('/checkHealth', (req, res) => {
  res.sendStatus(200);
});

module.exports = app;