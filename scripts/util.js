import { showNotification } from "./notifications.js";

export function addToLocalStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

export function handleError(errorMessage) {

    switch(errorMessage) {

        case "OPERATION_NOT_ALLOWED": return showNotification.error("Service may be unavaiable.. Please try again later");
        case "EMAIL_EXISTS": return showNotification.error("Email already exists");
    }
    
}