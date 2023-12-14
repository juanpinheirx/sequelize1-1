const route = require('express').Router();
const { namesController } = require('../controller');

route.post('/', namesController.getAll);

module.exports = route;