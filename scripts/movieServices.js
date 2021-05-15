import { showNotification } from './notifications.js';
import { request, redirect, toggleBodyOverflowY } from './util.js';

export function listenForSeatClickAndChangeState(e) {

    let { target } = e;
    if (!target.classList.contains('cinema-hall__list-item') || target.classList.contains('reserved')) return;

    target.classList.contains('selected') ? target.classList.remove('selected') : target.classList.add('selected');
}

export function showAndSubmitConfirmForm() {

    let selectedSeats = getSelectedSeats();
    if (selectedSeats.length < 1) return showNotification.error("Please select a seat");

    let confirmSection = document.querySelector('.confirm-tickets');

    toggleBodyOverflowY();
    document.querySelector('.total-amount-container').textContent = `Total amount: ${(selectedSeats.length * 6.99).toFixed(2)}$`
    confirmSection.style.display = "block";

}

export async function payForTickets() {

    if (!validatePayCredentials()) return;

    let [pathName, movieId, streamHour] = location.pathname.split('/').filter(i => i != "");
    
    let data = await getMovieById(movieId);
    if (data == {}) return;
    let allStreams = data.streams;
    let chosenStream = allStreams[streamHour];

    let selectedSeats = getSelectedSeats();
    Array.from(selectedSeats).map(seat => chosenStream[seat.dataset.seat] = "reserved");

    let changedStreams = {};

    Object.keys(allStreams).forEach(key => {
        if (key == streamHour) changedStreams[key] = chosenStream;
        else changedStreams[key] = allStreams[key];
    });

    let patchBody = { streams: changedStreams };
    let movieURL = `https://cinema-app-7733d-default-rtdb.firebaseio.com/movies/${movieId}.json`;
    let patchResponse = await request.patch(movieURL, patchBody);

    if (!patchResponse.ok) return showNotification.error("Something went wrong... Please try again");

    redirect('/');
    return showNotification.success(`Successfully bought ${selectedSeats.length} ${selectedSeats.length > 1 ? "tickets" : "ticket"}!`)
}

const getSelectedSeats = () => Array.from(document.querySelectorAll('.cinema-hall__list-item'))
    .reduce((acc, seat) => seat.classList.contains('selected') ? [...acc, seat] : [...acc], [])


export const hideConfirmFormOnClick = () => {
    toggleBodyOverflowY();
    document.querySelector('.confirm-tickets').style.display = "none";
}

function validatePayCredentials() {

    let firstNameElement = document.querySelector('#first-name');
    let lastNameElement = document.querySelector('#last-name');
    let cardIdElement = document.querySelector('#card-id');

    if (!firstNameElement.value || !lastNameElement.value || !cardIdElement.value) {
        showNotification.error("You must fill all inputs");
        return false;
    }
    return true;
}

// return either object with movie data or empty object
export async function getAllMovies() {

    try {
        let response = await request.get('https://cinema-app-7733d-default-rtdb.firebaseio.com/movies.json');
        let moviesData = await response.json();
        return moviesData;

    } catch (e) {
        showNotification.error('Something went wrong... Please try again');
        return {};
    }

}

// return either object with movie data or empty object
export async function getMovieById(movieId) {

    let movieURL = `https://cinema-app-7733d-default-rtdb.firebaseio.com/movies/${movieId}.json`;

    try {
        let getResponse = await request.get(movieURL);
        let data = await getResponse.json();
        return data;

    } catch (e) {
        showNotification.error('Something went wrong... Please try again');
        return {};
    }

}
