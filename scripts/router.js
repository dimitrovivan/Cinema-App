
const route = [
    {
        regexPath: /^\/$/,
        execute: () => 'home'
    },

    {
        regexPath: /^\/about$/,
        execute: () => 'about'
    },

    {
        regexPath: /^\/login$/,
        execute: () => 'login'
    },

    {
        regexPath: /^\/register$/,
        execute: () => 'register'
    },

    {
        regexPath: /^\/tickets$/,
        execute: () => 'tickets'
    },

    {
        regexPath: /^\/logout$/,
        execute: () => 'logout'
    },

    {
        regexPath: /^\/top-movies$/,
        execute: () => 'bestMovies'
    }
]

function router(path) {

    let currRoute = route.find( ({ regexPath }) => path.match(regexPath) );
    
    let rootElement = document.querySelector('.root');

    rootElement.innerHTML = currRoute.execute();
}

window.addEventListener("popstate", () => router(location.pathname));

const isExistingPath = (path) => route.find( ({ regexPath }) => path.match(regexPath)) ? true : false;

export function navigate(path) {

    if(!isExistingPath(path)) path = '/';

    history.pushState({}, '', path);

    let customPopstate = new CustomEvent("popstate");

    window.dispatchEvent(customPopstate);

}