import { rootRender } from "./templateServices.js";
import { request } from "./util.js";
import { showNotification } from "./notifications.js";


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

            rootRender('tickets', context);
               
        }
    },

    {
        regexPath: /^\/tickets\/-.*\/[\d]{2}:[\d]{2}$/,
        execute: async () => {

            let [pathName, movieId, streamHour] = location.pathname.split('/').filter(i => i != "");

            let movieURL = `https://cinema-app-7733d-default-rtdb.firebaseio.com/movies/${movieId}.json`;

            let context = {};

            try {

            let response = await request.get(movieURL);

            let data = await response.json();

            let seats = data.streams[streamHour];

            let reservedSpaces = Object.values(seats).reduce( (acc, x) =>  x == "reserved" ? acc+=1 : acc, 0);

            let isLogged = localStorage.getItem('isLogged');

            context.isLogged = isLogged;
            context.seats = seats;
            context.reservedSpaces = reservedSpaces;

            rootRender('cinemaHall', context);
            
            } catch(e) {
                showNotification.error("Something went wrong... Please try again");
            }
               
        }
    },

    {
        regexPath: /^\/logout$/,
        execute: () => {
            
            if(localStorage.getItem('isLogged')) {
                
                localStorage.removeItem('isLogged');
                
                return rootRender('home');
            }

            return rootRender('login');
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

async function router(path) {

    let currRoute = route.find( ({ regexPath }) => path.match(regexPath) );

    await currRoute.execute();
}

window.addEventListener("popstate", () => router(location.pathname));

const isExistingPath = (path) => route.find( ({ regexPath }) => path.match(regexPath)) ? true : false;


export function navigate(path) {

    if(!isExistingPath(path)) path = '/';

    history.pushState({}, '', path);

    let customPopstate = new CustomEvent("popstate");

    window.dispatchEvent(customPopstate);

}

