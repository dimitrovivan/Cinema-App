import { html } from 'https://unpkg.com/lit-html?module';
import headerTemplate from './partials/header.js';

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
    <button class="btn btn--primary">Pay</button>
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
        <ul class="cinema-hall__list">
            <li class="cinema-hall__list-item ${seats[1]}"></li>
            <li class="cinema-hall__list-item ${seats[2]}"></li>
            <li class="cinema-hall__list-item ${seats[3]}"></li>
            <li class="cinema-hall__list-item ${seats[4]}"></li>
            <li class="cinema-hall__list-item ${seats[5]}"></li>
            <li class="cinema-hall__list-item ${seats[6]}"></li>
            <li class="cinema-hall__list-item ${seats[7]}"></li>
            <li class="cinema-hall__list-item ${seats[8]}"></li>
            <li class="cinema-hall__list-item ${seats[9]}"></li>
            <li class="cinema-hall__list-item ${seats[10]}"></li>
            <li class="cinema-hall__list-item ${seats[11]}"></li>
            <li class="cinema-hall__list-item ${seats[12]}"></li>
            <li class="cinema-hall__list-item ${seats[13]}"></li>
            <li class="cinema-hall__list-item ${seats[14]}"></li>
            <li class="cinema-hall__list-item ${seats[15]}"></li>
            <li class="cinema-hall__list-item ${seats[16]}"></li>
            <li class="cinema-hall__list-item ${seats[17]}"></li>
            <li class="cinema-hall__list-item ${seats[18]}"></li>
            <li class="cinema-hall__list-item ${seats[19]}"></li>
            <li class="cinema-hall__list-item ${seats[20]}"></li>
            <li class="cinema-hall__list-item ${seats[21]}"></li>
            <li class="cinema-hall__list-item ${seats[22]}"></li>
            <li class="cinema-hall__list-item ${seats[23]}"></li>
            <li class="cinema-hall__list-item ${seats[24]}"></li>
            <li class="cinema-hall__list-item ${seats[25]}"></li>
        </ul>
    </div>

    <div class="cinema-hall__footer">
        <button class="btn btn--primary">Confirm</button>
    </div>
</div>

`