const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { SALT_ROUNDS, SECRET_KEY } = require('../config/security');

function validateRegisterCredentials(email, password, repPassword) {
    
    if(!email || !password || !repPassword) throw {status: 400 , message: "You must fill all inputs"};
    if(password !== repPassword) throw {status: 400 , message: "Passwords missmatch"};
    
    let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(!email.match(emailRegex)) throw {status: 400 , message: "Invalid email"};
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\!@#$]{6,}$/;
    if(!password.match(passwordRegex)) throw {status: 400 , message: "Invalid password"};

    return true;
}

async function validateLoginCredentials(email, password) {
    if(!email || !password) throw {status: 400 , message: "You must fill all inputs"};

    let user = await User.findOne({email});
    if(!user) throw {status: 400 , message: "Invalid username or password"};

    let match = await bcrypt.compare(password, user.password);
    if(!match) throw {status: 400 , message: "Invalid username or password"};
    
    return user._id;
}

async function register(email, password) {
     email = email.toLowerCase();
     let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

     let user = User({email, password: hashedPassword});
     return user.save();
}

function login(userId) {
    return jwt.sign({user: userId}, SECRET_KEY, {expiresIn: '1hr'});
    
}

module.exports = {
    validateRegisterCredentials,
    validateLoginCredentials,
    register,
    login
}