import { rootRender } from "./templateServices.js";
import { getDateInfo } from "./util.js";
import { showNotification } from "./notifications.js";
import { getAllMovies, getMovieById } from "./movieServices.js";

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
            let moviesData = await getAllMovies();
            if (moviesData == {}) return;

            return rootRender('allMovies', { ...dateInfo, moviesData });

        }
    },

    {
        regexPath: /^\/all-movies\/-.*\/[\d]{2}:[\d]{2}$/,
        execute: async () => {

            let isLogged = localStorage.getItem('isLogged');
            if (!isLogged) return rootRender('login');

            let [pathName, movieId, streamHour] = location.pathname.split('/').filter(i => i != "");

            try {

                let data = await getMovieById(movieId);
                if (data == {}) return;
                let seats = data.streams[streamHour];

                let reservedSpaces = Object.values(seats).reduce((acc, x) => x == "reserved" ? acc += 1 : acc, 0);

                rootRender('cinemaHall', { seats, reservedSpaces });
                window.scrollTo(0, 0);
                return;

            } catch (e) {
                return showNotification.error("Something went wrong... Please try again");
            }

        }
    },

    {
        regexPath: /^\/logout$/,
        execute: () => {

            if (localStorage.getItem('isLogged')) {

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

            let moviesData = await getAllMovies();
            if (moviesData == {}) return;
            let topThreeMovies = {};

            // Sort by reserved seats, slice the first 3 and push information for them in moviesData

            Object.keys(moviesData).sort((a, b) => {

                let aReservedSeats = 0;
                let bReservedSeats = 0;

                Object
                    .values(moviesData[a].streams)
                    .forEach(streamSeats => { aReservedSeats += streamSeats.reduce((acc, x) => x == "reserved" ? acc += 1 : acc, 0) })

                Object
                    .values(moviesData[b].streams)
                    .forEach(streamSeats => { bReservedSeats += streamSeats.reduce((acc, x) => x == "reserved" ? acc += 1 : acc, 0) })

                return bReservedSeats - aReservedSeats;

            }).slice(0, 3)
                .forEach(movieId => { topThreeMovies[movieId] = moviesData[movieId] })

            return rootRender('topMovies', { topThreeMovies });
        }
    }
]

async function router(path) {

    let currRoute = route.find(({ regexPath }) => path.match(regexPath));

    try {
        await currRoute.execute();
    } catch (e) {
        showNotification.error("Something went wrong... Please try again");
    }
}

window.addEventListener("popstate", () => router(location.pathname));

const isExistingPath = (path) => route.find(({ regexPath }) => path.match(regexPath)) ? true : false;

export function navigate(path) {

    if (!isExistingPath(path)) path = '/';
    if (location.pathname !== path) history.pushState({}, '', path);

    let customPopstate = new CustomEvent("popstate");
    window.dispatchEvent(customPopstate);
}
