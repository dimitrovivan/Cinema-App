const express = require('express');
const cors = require('../middlewares/cors');

module.exports = function (app) {
    app.use(express.json());
    app.use(cors);
}