/*
Templating service for importing lit-html, and my template views
*/

import { render } from '../../node_modules/lit-html/lit-html.js'

import header from '../templates/partials/header.js';
import footer from '../templates/partials/footer.js';
import about from '../templates/about.js';
import home from '../templates/home.js';
import login from '../templates/login.js';
import register from '../templates/register.js';
import topMovies from '../templates/topMovies.js';
import cinemaHall from '../templates/cinema-hall.js';
import allMovies from '../templates/allMovies.js';

const rootElement = document.querySelector('.root');

const templates = {header, footer, about, home, login, register, topMovies, allMovies, cinemaHall};
const getTemplate = (templateName, context) => templates[templateName](context);

export const rootRender = (templateName, context = {}) => {
    let isLogged = localStorage.getItem('isLogged');
    render(getTemplate(templateName, {...context, isLogged }), rootElement);
}