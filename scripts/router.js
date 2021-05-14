import { rootRender } from "./templateServices.js";
import { request, getDateInfo } from "./util.js";
import { showNotification } from "./notifications.js";

//TODO:: we can bind rootRender with isLogged argument because it is passed always

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
        regexPath: /^\/all-movies$/,
        execute: async () => {

            let dateInfo = getDateInfo();

            let response = await request.get('https://cinema-app-7733d-default-rtdb.firebaseio.com/movies.json');

            let moviesData = await response.json();

            moviesData = moviesData ? moviesData : {};

            return rootRender('allMovies', {...dateInfo, moviesData});
               
        }
    },

    {
        regexPath: /^\/all-movies\/-.*\/[\d]{2}:[\d]{2}$/,
        execute: async () => {

            let isLogged = localStorage.getItem('isLogged');

            if(!isLogged) return rootRender('login');

            let [pathName, movieId, streamHour] = location.pathname.split('/').filter(i => i != "");

            let movieURL = `https://cinema-app-7733d-default-rtdb.firebaseio.com/movies/${movieId}.json`;

            try {

            let response = await request.get(movieURL);

            let data = await response.json();

            let seats = data.streams[streamHour];

            let reservedSpaces = Object.values(seats).reduce( (acc, x) =>  x == "reserved" ? acc+=1 : acc, 0);

            rootRender('cinemaHall', {seats, reservedSpaces});

            window.scrollTo(0, 0);
            return;

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
        execute: async () => {

            let response = await request.get('https://cinema-app-7733d-default-rtdb.firebaseio.com/movies.json');
            let data = await response.json();
            
            let moviesData = {};

            // Sort by reserved seats, slice the first 3 and push information for them in moviesData

            Object.keys(data).sort( (a ,b) => {

                let aReservedSeats = 0;
                let bReservedSeats = 0;

                Object
                     .values(data[a].streams)
                     .forEach(streamSeats => {aReservedSeats += streamSeats.reduce( (acc, x) =>  x == "reserved" ? acc+=1 : acc, 0)})

                Object
                     .values(data[b].streams)
                     .forEach(streamSeats => {bReservedSeats += streamSeats.reduce( (acc, x) =>  x == "reserved" ? acc+=1 : acc, 0)})

                return bReservedSeats - aReservedSeats;
                
            }).slice(0, 3)
              .forEach( movieId => {moviesData[movieId] = data[movieId]})

            return rootRender('topMovies', {moviesData});
        }
    }
]

async function router(path) {

    let currRoute = route.find( ({ regexPath }) => path.match(regexPath) );

    try {
          await currRoute.execute();
    } catch(e) {
       showNotification.error("Something went wrong... Please try again");
    } finally {
        document.querySelector('body').style.overflowY = "scroll";
    }

}

window.addEventListener("popstate", () => router(location.pathname));


const isExistingPath = (path) => route.find( ({ regexPath }) => path.match(regexPath)) ? true : false;


export function navigate(path) {

    if(!isExistingPath(path)) path = '/';

    if(location.pathname !== path) history.pushState({}, '', path);

    let customPopstate = new CustomEvent("popstate");

    window.dispatchEvent(customPopstate);

}

