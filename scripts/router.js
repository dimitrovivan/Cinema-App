import { rootRender } from "./templateServices.js";

const route = [
    {
        regexPath: /^\/$/,
        execute: () => {
            
            let context = {};

            let isLogged = localStorage.getItem('isLogged');

            context.isLogged = isLogged;
            
            rootRender('home', context);
        }
    },

    {
        regexPath: /^\/about$/,
        execute: () => {

            let context = {};

            let isLogged = localStorage.getItem('isLogged');

            context.isLogged = isLogged;

            rootRender('about', context);
        }
    },

    {
        regexPath: /^\/login$/,
        execute: () => {

            let context = {};

            let isLogged = localStorage.getItem('isLogged');

            context.isLogged = isLogged;
            
            rootRender('login',  context);
        }
    },

    {
        regexPath: /^\/register$/,
        execute: () => {

            let context = {};

            let isLogged = localStorage.getItem('isLogged');

            context.isLogged = isLogged;

            rootRender('register', context);
        }
    },

    {
        regexPath: /^\/tickets$/,
        execute: () => {
            let context = {};

            let isLogged = localStorage.getItem('isLogged');

            context.isLogged = isLogged;
            
            //rootRender('tickets', context);
        }
    },

    {
        regexPath: /^\/logout$/,
        execute: () => {
            
            if(localStorage.getItem('isLogged')) localStorage.removeItem('isLogged');

            rootRender('home');
        }
    },

    {
        regexPath: /^\/top-movies$/,
        execute: () => {

            let context = {};

            let isLogged = localStorage.getItem('isLogged');

            context.isLogged = isLogged;

            rootRender('topMovies', context);
        }
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

