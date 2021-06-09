const router = require('express').Router();
const authController = require('./controllers/authController.js');

router.use('/auth', authController);

module.exports = router;