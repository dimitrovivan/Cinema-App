import { rootRender } from "./templateServices.js";
import { request } from "./util.js";
import { showNotification } from "./notifications.js";


const route = [
    {
        regexPath: /^\/$/,
        execute: () => {
            let isLogged = localStorage.getItem('isLogged');

            return rootRender('home', {isLogged});
        }
    },

    {
        regexPath: /^\/about$/,
        execute: () => {
            let isLogged = localStorage.getItem('isLogged');

            return rootRender('about', {isLogged});
        }
    },

    {
        regexPath: /^\/login$/,
        execute: () => {
            let isLogged = localStorage.getItem('isLogged');
            
            return rootRender('login',  {isLogged});
        }
    },

    {
        regexPath: /^\/register$/,
        execute: () => {
            let isLogged = localStorage.getItem('isLogged');

            return rootRender('register', {isLogged});
        }
    },

    {
        regexPath: /^\/all-movies$/,
        execute: () => {
            let isLogged = localStorage.getItem('isLogged');

            if(!isLogged) return rootRender('login', {isLogged});

            return rootRender('allMovies', {isLogged});
               
        }
    },

    {
        regexPath: /^\/all-movies\/-.*\/[\d]{2}:[\d]{2}$/,
        execute: async () => {

            let [pathName, movieId, streamHour] = location.pathname.split('/').filter(i => i != "");

            let movieURL = `https://cinema-app-7733d-default-rtdb.firebaseio.com/movies/${movieId}.json`;

            try {

            let response = await request.get(movieURL);

            let data = await response.json();

            let seats = data.streams[streamHour];

            let reservedSpaces = Object.values(seats).reduce( (acc, x) =>  x == "reserved" ? acc+=1 : acc, 0);

            let isLogged = localStorage.getItem('isLogged');

            return rootRender('cinemaHall', {isLogged, seats, reservedSpaces});
            
            } catch(e) {
                return showNotification.error("Something went wrong... Please try again");
            }
               
        }
    },

    {
        regexPath: /^\/logout$/,
        execute: () => {
            
            if(localStorage.getItem('isLogged')) {
                
                localStorage.removeItem('isLogged');

                rootRender('home');

                return showNotification.success("Logged out");
            }

            return rootRender('login');
        }
    },

    {
        regexPath: /^\/top-movies$/,
        execute: () => {
            let isLogged = localStorage.getItem('isLogged');

            return rootRender('topMovies', {isLogged});
        }
    }
]

async function router(path) {

    let currRoute = route.find( ({ regexPath }) => path.match(regexPath) );

    await currRoute.execute();

    window.scrollTo(0,0);

}

window.addEventListener("popstate", () => router(location.pathname));

const isExistingPath = (path) => route.find( ({ regexPath }) => path.match(regexPath)) ? true : false;


export function navigate(path) {

    if(!isExistingPath(path)) path = '/';

    history.pushState({}, '', path);

    let customPopstate = new CustomEvent("popstate");

    window.dispatchEvent(customPopstate);

}

