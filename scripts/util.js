export function addToLocalStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}