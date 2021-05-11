import { html } from 'https://unpkg.com/lit-html?module';
import headerTemplate from './partials/header.js';

export default (
    {
        isLogged
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
            <h3>Reserved seats 10/25</h3>
        </div>
        <div class="cinema-hall__heading"><h1>Screen</h1></div>
        <div class="screen"></div>
    </div>

    <div class="cinema-hall__body">
        <ul class="cinema-hall__list">
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
            <li class="cinema-hall__list-item"></li>
        </ul>
    </div>

    <div class="cinema-hall__footer">
        <button class="btn btn--primary">Confirm</button>
    </div>
</div>

`