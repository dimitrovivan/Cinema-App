import { html } from 'https://unpkg.com/lit-html?module';
import headerTemplate from './partials/header.js';
import {listenForSeatClickAndChangeState, showAndSubmitConfirmForm, payForTickets, hideConfirmFormOnClick} from '../scripts/movieServices.js';

export default (
    {
        isLogged,
        seats,
        reservedSpaces
    }
) => html`
${headerTemplate(isLogged)}
<div class="cinema-hall">
  <div class="confirm-tickets">
   <button class="btn btn--back" @click=${hideConfirmFormOnClick}>Back</button>
    <div class="confirm-tickets__header">
        <h1 class="confirm-tickets__heading text-centered">Please fill the data</h1>
    </div>

    <div class="confirm-tickets__form flex flex--column flex--centered">
        <label for="first-name">First Name:</label>
        <input type="text" id="first-name"/>

        <label for="last-name">Last Name:</label>
          <input type="text" id="last-name"/>

        <label for="card-id">Card Number:</label>
          <input type="password" id="card-id"/>
    </div>
    
    <div class="confirm-tickets__footer">
    <button class="btn btn--primary" @click=${payForTickets}>Pay</button>
    </div>
  </div>
    <div class="cinema-hall__header">
        <div class="cinema-hall__description">
            <h3>Reserved seats ${reservedSpaces}/25</h3>
        </div>
        <div class="cinema-hall__heading"><h1>Screen</h1></div>
        <div class="screen"></div>
    </div>

    <div class="cinema-hall__body">
        <ul class="cinema-hall__list" @click=${listenForSeatClickAndChangeState}>
            <li class="cinema-hall__list-item ${seats[1]}" data-seat="1"></li>
            <li class="cinema-hall__list-item ${seats[2]}" data-seat="2"></li>
            <li class="cinema-hall__list-item ${seats[3]}" data-seat="3"></li>
            <li class="cinema-hall__list-item ${seats[4]}" data-seat="4"></li>
            <li class="cinema-hall__list-item ${seats[5]}" data-seat="5"></li>
            <li class="cinema-hall__list-item ${seats[6]}" data-seat="6"></li>
            <li class="cinema-hall__list-item ${seats[7]}" data-seat="7"></li>
            <li class="cinema-hall__list-item ${seats[8]}" data-seat="8"></li>
            <li class="cinema-hall__list-item ${seats[9]}" data-seat="9"></li>
            <li class="cinema-hall__list-item ${seats[10]}" data-seat="10"></li>
            <li class="cinema-hall__list-item ${seats[11]}" data-seat="11"></li>
            <li class="cinema-hall__list-item ${seats[12]}" data-seat="12"></li>
            <li class="cinema-hall__list-item ${seats[13]}" data-seat="13"></li>
            <li class="cinema-hall__list-item ${seats[14]}" data-seat="14"></li>
            <li class="cinema-hall__list-item ${seats[15]}" data-seat="15"></li>
            <li class="cinema-hall__list-item ${seats[16]}" data-seat="16"></li>
            <li class="cinema-hall__list-item ${seats[17]}" data-seat="17"></li>
            <li class="cinema-hall__list-item ${seats[18]}" data-seat="18"></li>
            <li class="cinema-hall__list-item ${seats[19]}" data-seat="19"></li>
            <li class="cinema-hall__list-item ${seats[20]}" data-seat="20"></li>
            <li class="cinema-hall__list-item ${seats[21]}" data-seat="21"></li>
            <li class="cinema-hall__list-item ${seats[22]}" data-seat="22"></li>
            <li class="cinema-hall__list-item ${seats[23]}" data-seat="23"></li>
            <li class="cinema-hall__list-item ${seats[24]}" data-seat="24"></li>
            <li class="cinema-hall__list-item ${seats[25]}" data-seat="25"></li>
        </ul>
    </div>

    <div class="cinema-hall__footer">
        <button class="btn btn--primary" @click=${showAndSubmitConfirmForm}>Confirm</button>
    </div>
</div>

`