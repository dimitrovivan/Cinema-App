const bcrypt = require('bcrypt');
const User = require('../models/User');
const { SALT_ROUNDS } = require('../config/security');

function validateRegisterCredentials(email, password, repPassword) {
    
    if(!email || !password || !repPassword) throw {status: 400 , message: "You must fill all inputs"};
    if(password !== repPassword) throw {status: 400 , message: "Passwords missmatch"};
    
    let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(!email.match(emailRegex)) throw {status: 400 , message: "Invalid email"};
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\!@#$]{6,}$/;
    if(!password.match(passwordRegex)) throw {status: 400 , message: "Invalid password"};

    return true;
}

async function register(email, password) {
     email = email.toLowerCase();
     let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

     let user = User({email, password: hashedPassword});
     return user.save();
}

module.exports = {
    validateRegisterCredentials,
    register
}