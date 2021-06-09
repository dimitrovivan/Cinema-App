const router = require('express').Router();
const { validateRegisterCredentials, register, validateLoginCredentials, login } = require('../services/authServices');
const { COOKIE_NAME } = require('../config/security')

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

router.post('/login', async (req, res, next) => {
  let { email, password } = req.body;

  try {
     let userId = await validateLoginCredentials(email, password);
     let token = await login(userId);
     res.status(200).json({token});
     
  } catch(error) {
    next(error);
  }
});

module.exports = router;