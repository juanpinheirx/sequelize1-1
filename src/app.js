const express = require('express');

const app = express();

app.get('/checkHealth', (req, res) => {
  req.sendStatus(200);
});

module.exports = app;