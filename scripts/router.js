import { rootRender } from "./templateServices.js";

const route = [
    {
        regexPath: /^\/$/,
        execute: () => rootRender('home')
    },

    {
        regexPath: /^\/about$/,
        execute: () => rootRender('about')
    },

    {
        regexPath: /^\/login$/,
        execute: () => rootRender('login')
    },

    {
        regexPath: /^\/register$/,
        execute: () => rootRender('register')
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
        execute: () => rootRender('topMovies')
    }
]

function router(path) {

    let currRoute = route.find( ({ regexPath }) => path.match(regexPath) );

    currRoute.execute();
}

window.addEventListener("popstate", () => router(location.pathname));

const isExistingPath = (path) => route.find( ({ regexPath }) => path.match(regexPath)) ? true : false;


export function navigate(path) {

    if(!isExistingPath(path)) path = '/';

    history.pushState({}, '', path);

    let customPopstate = new CustomEvent("popstate");

    window.dispatchEvent(customPopstate);

}

