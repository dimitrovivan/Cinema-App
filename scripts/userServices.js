import { navigate } from "./router.js";

const endpoints = {
    register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmv0aYzWuLU-FGBowxuSLFxUDycT053Rc`,
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmv0aYzWuLU-FGBowxuSLFxUDycT053Rc`
}

const request = {
    
    post: async (url, body) => await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            returnSecureToken: true
        })
}


const validateCredentials = {

    register: (email, password, repPassword) => {

        if(!checkForTruthyInputs(email, password, repPassword)) return false;

        if(!checkForSpecificLength(password, 6)) return false;

        if(password !== repPassword) return false;

        return true;
    },

    login: (email, password) => {
               
        if(!checkForTruthyInputs(email, password)) return false;
        
        if(!checkForSpecificLength(password, 6)) return false;

        return true;
    }
}

function getInputDataFromForm(formElement) {

    let email = formElement.querySelector('#email').value;
    let password = formElement.querySelector('#password').value;
    let repPassword = formElement.querySelector('#password') ? formElement.querySelector('#password').value : null;

    return {
        email,
        password,
        repPassword
    }
}

function checkForSpecificLength(item, wantedLength) {

    if(typeof item == "object" || typeof item == "array") return false;

    if(item.length >= wantedLength) return true;

    return false;

}

function checkForTruthyInputs(...items) {

    let result = true;

    items.forEach(item => {
        
        if(!item) result = false;
    })

    return result;
}

export async function register() {

    let registerForm = document.querySelector('.registerForm');

    let { email, password, repPassword } = getInputDataFromForm(registerForm);

    // TODO: Show notif

    if(!validateCredentials.register(email, password, repPassword)) return;

    let response = await request.post(endpoints.register, {email, password});

    if(!response.ok) return;

    navigate('/login');
}

export async function login() {

    let loginForm = document.querySelector('.loginForm');

    let { email, password } = getInputDataFromForm(loginForm);

    // TODO: Show notif

    if(!validateCredentials.login(email, password)) return;

    let response = await request.post(endpoints.login, {email, password});

    if(!response.ok) return;

    navigate('/');

}