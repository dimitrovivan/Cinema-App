const User = require('../models/User');

function validateRegisterCredentials(email, password, repPassword) {
    
    if(!email || !password || !repPassword) throw {status: 400 , message: "You must fill all inputs"};
    if(password !== repPassword) throw {status: 400 , message: "Passwords missmatch"};
    
    let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(!email.match(emailRegex)) throw {status: 400 , message: "Invalid email"};
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\!@#$]{6,}$/;
    if(!password.match(passwordRegex)) throw {status: 400 , message: "Invalid password"};

    return true;
}

function register(email, password) {
     let user = User({email: email.toLowerCase(), password});
     return user.save();
}

module.exports = {
    validateRegisterCredentials,
    register
}