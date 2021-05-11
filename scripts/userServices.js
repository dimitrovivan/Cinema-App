import { showNotification } from "./notifications.js";
import { navigate } from "./router.js";
import { addToLocalStorage, handleError} from "./util.js";

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

        if(!checkForTruthyInputs(email, password, repPassword)) {
            showNotification.error("You must fill all fields");
            return false;
        }

        if(!checkForSpecificLength(password, 6)) {
            showNotification.error("Your password must be at least 6 symbols");
            return false;
        }

        if(password !== repPassword) {
            showNotification.error("Password missmatch");
            return false;
        }

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
    let repPassword = formElement.querySelector('#repPassword') ? formElement.querySelector('#repPassword').value : null;

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

    if(!validateCredentials.register(email, password, repPassword)) return;

    try {

    let response = await request.post(endpoints.register, {email, password});


    if(!response.ok) {
        let data = await response.json();

        return handleError(data.error.message);

    }
    navigate('/login');

    return showNotification.success("Successfully registrated");

    } catch(error) {
        console.log(error);
    }

}

export async function login() {

    let loginForm = document.querySelector('.loginForm');

    let { email, password } = getInputDataFromForm(loginForm);

    // TODO: Show notif

    if(!validateCredentials.login(email, password)) return;

    let response = await request.post(endpoints.login, {email, password});

    if(!response.ok) return;

    addToLocalStorage('isLogged', true);

    navigate('/');

}