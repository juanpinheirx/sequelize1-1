const express = require('express');
const route = express.Router();
const { namesController } = require('../controller');

route.get('/', namesController.getAll);

module.exports = route;