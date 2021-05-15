import { showNotification } from './notifications.js';
import { request, redirect } from './util.js';

export function listenForSeatClickAndChangeState(e) {

    let { target } = e;

    if(!target.classList.contains('cinema-hall__list-item') || target.classList.contains('reserved')) return;

    target.classList.contains('selected') ? target.classList.remove('selected') : target.classList.add('selected');

}

export function showAndSubmitConfirmForm() {

    let selectedSeats = getSelectedSeats();

    if(selectedSeats.length < 1) return showNotification.error("Please select a seat");
    
    let confirmSection = document.querySelector('.confirm-tickets');

    document.querySelector('body').style.overflowY = "hidden";
    document.querySelector('.total-amount-container').textContent = `Total amount: ${(selectedSeats.length*6.99).toFixed(2)}$`
    confirmSection.style.display = "block";

}

export async function payForTickets() {

    let selectedSeats = getSelectedSeats();

    if(!validatePayCredentials()) return;
    
    let [pathName, movieId, streamHour] = location.pathname.split('/').filter(i => i != "");

    let movieURL = `https://cinema-app-7733d-default-rtdb.firebaseio.com/movies/${movieId}.json`;

    let getResponse = await  request.get(movieURL);

    let data = await getResponse.json();

    let allStreams = data.streams;

    let chosenStream = allStreams[streamHour];

    Array.from(selectedSeats).map(seat => chosenStream[seat.dataset.seat] = "reserved");

    let changedStreams = {};

    Object.keys(allStreams).forEach( key => {

       if (key == streamHour) changedStreams[key] = chosenStream;
       else  changedStreams[key] = allStreams[key];
       
    });

    let patchBody = {  streams: changedStreams }

    let patchResponse = await request.patch(movieURL, patchBody);

    if(!patchResponse.ok) return showNotification.error("Something went wrong... Please try again");

    redirect('/');
    
    return showNotification.success(`Successfully bought ${selectedSeats.length} ${selectedSeats.length > 1 ? "tickets" : "ticket"}!`)

}

const getSelectedSeats = () => Array.from(document.querySelectorAll('.cinema-hall__list-item'))
                                    .reduce( (acc, seat) => seat.classList.contains('selected') ? [...acc, seat] : [...acc], [])


export const hideConfirmFormOnClick = () => {
    document.querySelector('body').style.overflowY = "scroll";
    document.querySelector('.confirm-tickets').style.display = "none";
}

function validatePayCredentials() {

    let firstNameElement = document.querySelector('#first-name');
    let lastNameElement = document.querySelector('#last-name');
    let cardIdElement = document.querySelector('#card-id');

    if(!firstNameElement.value || !lastNameElement.value || !cardIdElement.value) {
        showNotification.error("You must fill all inputs");
        return false;
    }

    return true;

}
