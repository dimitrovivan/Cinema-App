const router = require('express').Router();
const { validateRegisterCredentials, register } = require('../services/authServices');
router.post('/register', async (req, res, next) => {
    let { email, password, repPassword } = req.body;

    try {
       validateRegisterCredentials(email, password, repPassword);
       //register user
       await register(email, password);
       res.status(201).end();
    } catch(error) {
        next(error);
    }
});

module.exports = router;