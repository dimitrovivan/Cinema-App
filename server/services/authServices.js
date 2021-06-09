function validateRegisterCredentials(email, password, repPassword) {
    
    if(!email || !password || !repPassword) throw "You must fill all inputs.";
    if(password !== repPassword) throw "Passwords missmatch.";
    
    let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(!email.match(emailRegex)) throw "Invalid email.";
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\!@#$]{6,}$/;
    if(!password.match(passwordRegex)) throw "Invalid password.";

    return true;
}

module.exports = {
    validateRegisterCredentials
}