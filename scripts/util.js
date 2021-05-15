import { showNotification } from "./notifications.js";

export function addToLocalStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

export function handleError(errorMessage) {

    switch (errorMessage) {

        case "OPERATION_NOT_ALLOWED":
        case "PASSWORD_LOGIN_DISABLED": return showNotification.error("Service may be unavaiable.. Please try again later");
        case "EMAIL_EXISTS": return showNotification.error("Email already exists");
        case "INVALID_PASSWORD": return showNotification.error("Invalid username or password");
        case "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.": return showNotification.error("Too much login failed attempts. Please try again later.");
        case "EMAIL_NOT_FOUND": return showNotification.error("User with this email doesn't exist");
    }

}

export function clearInputs(...selectors) {

    if (!selectors) return;

    selectors.forEach(selector => {

        let currElement = document.querySelector(selector);

        if (currElement) return currElement.value = '';

        return console.log('wrong selector');

    })
}

export const request = {

    post: async (url, body) => {

        try {

            return await fetch(url, {
                method: "POST",
                body: JSON.stringify(body),
                returnSecureToken: true
            })

        }
        catch (e) {
            showNotification.error("Weak connection, please try again");
        }
    },

    get: async (url) => await fetch(url),

    patch: async (url, body) => await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(body)
    })

}

export function getDateInfo() {

    const date = new Date();
    const month = date.toLocaleString('en-us', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();

    return {
        month,
        day,
        year
    }
}

export function redirect(path) {
    history.pushState({}, '', path);

    let customPopstate = new CustomEvent("popstate");

    window.dispatchEvent(customPopstate);
}