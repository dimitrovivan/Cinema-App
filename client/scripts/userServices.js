import { showNotification } from "./notifications.js";
import { addToLocalStorage, clearInputs, request, redirect } from "./util.js";

const origin = 'http://localhost:5000';
const authResource = '/auth';
const endpoints = {
    register: `${origin}${authResource}/register`,
    login: `${origin}${authResource}/login`
}

const validateCredentials = {

    register: (email, password, repPassword) => {

        if (!checkForTruthyInputs(email, password, repPassword)) {
            showNotification.error("You must fill all fields");
            return false;
        }

        if (!checkForSpecificLength(password, 6)) {
            showNotification.error("Your password must be at least 6 symbols");
            return false;
        }

        if (password !== repPassword) {
            showNotification.error("Password missmatch");
            return false;
        }

        return true;
    },

    login: (email, password) => {

        if (!checkForTruthyInputs(email, password)) {
            showNotification.error("You must fill all fields");
            return false;
        }

        if (!checkForSpecificLength(password, 6)) {
            showNotification.error("Your password must be at least 6 symbols");
            return false;
        }

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

    if (typeof item == "object" || typeof item == "array") return false;
    if (item.length >= wantedLength) return true;

    return false;
}

function checkForTruthyInputs(...items) {

    let result = true;

    items.forEach(item => {

        if (!item) result = false;
    })
    return result;
}

export async function register() {

    let registerForm = document.querySelector('.registerForm');
    let { email, password, repPassword } = getInputDataFromForm(registerForm);

    if (!validateCredentials.register(email, password, repPassword)) return;
    try {
        
        let response = await request.post(endpoints.register, { email, password, repPassword });
        
        if (!response.ok) {
            let data = await response.json();
            return showNotification.error(data.message);
        }

        redirect('/login');
        return showNotification.success("Successfully registrated");

    } catch (error) {}
}

export async function login() {

    let loginForm = document.querySelector('.loginForm');
    let { email, password } = getInputDataFromForm(loginForm);
    if (!validateCredentials.login(email, password)) return;

    try {

        let response = await request.post(endpoints.login, { email, password });
        let data = await response.json();

        if (!response.ok) {
            clearInputs(".login-email", ".login-password");
            showNotification.error(data.message);
            return;
        }

        let navigatePath = '/';
        addToLocalStorage('isLogged', true);
        addToLocalStorage('userToken', data.token);
        
        let previousLoc = location.pathname;
        let firstPartOfPath = previousLoc.split('/').filter(res => res != "")[0];

        if (firstPartOfPath == 'all-movies') {
            history.replaceState({}, '', previousLoc);
            navigatePath = previousLoc;
        }

        redirect(navigatePath);
        return showNotification.success("Logged in");

    } catch (error) {}
}