const express = require('express');
const {db } = require('./util/database.util');

const app = express();

app.use(express.json());

module.exports = { app };