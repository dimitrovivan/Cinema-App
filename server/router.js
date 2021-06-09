const router = require('express').Router();
const authController = require('./controllers/authController.js');
const movieController = require('./controllers/movieController.js');

router.use('/auth', authController);
router.use('/movies', movieController);

module.exports = router;