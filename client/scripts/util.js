import { showNotification } from "./notifications.js";

export function addToLocalStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

export function clearInputs(...selectors) {

    if (!selectors) return;

    selectors.forEach(selector => {

        let currElement = document.querySelector(selector);
        if (currElement) return currElement.value = '';

        return 'wrong selector';
    })
}

export const request = {

    post: async (url, body) => {

        try {
            return await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(body),
            })
        }
        catch(e) {
            showNotification.error("Weak connectionaa, please try again");
        }
    },

    get: async (url) => await fetch(url),

    patch: async (url, body) => {

      try {
         return await fetch(url, {
              method: "PATCH",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
        })
    } catch(e) {
        showNotification.error("Weak connection, please try again");
    }
  }

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

export function toggleBodyOverflowY() {
    let bodyElement = document.querySelector('body');

    if(bodyElement.style.overflowY == "hidden") {
        bodyElement.style.overflowY = "scroll"
    } else {
        bodyElement.style.overflowY = "hidden"
    }
}