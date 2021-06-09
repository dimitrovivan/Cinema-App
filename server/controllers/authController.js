const router = require('express').Router();
const { validateRegisterCredentials, register } = require('../services/authServices');
router.post('/register', async (req, res, next) => {
    let { email, password, repPassword } = req.body;

    try {
       validateRegisterCredentials(email, password, repPassword);
       await register(email, password);
       res.status(201).end();
    } catch(error) {
      if (error.code == 11000) {
        error.message = "Email has already been taken";
        error.status = 400;
      }
      next(error);
    }
});

module.exports = router;