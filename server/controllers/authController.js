const router = require('express').Router();
const { validateRegisterCredentials } = require('../services/authServices');
router.post('/register', (req, res) => {
    let { email, password, repPassword } = req.body;
    try {
      validateRegisterCredentials(email, password, repPassword);
    } catch(errorMessage) {
    }
});

module.exports = router;