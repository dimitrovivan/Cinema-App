import { html } from 'https://unpkg.com/lit-html?module';
import headerTemplate from './partials/header.js';
import footerTemplate from './partials/footer.js';

export default (
    {
        isLogged
    }
) => html`
${headerTemplate(isLogged)}
<div class="home-page flex--column flex--centered">
    <div class="home-page__header">
        <h1 class="text-centered">New movies and TV shows every month.</h1>
    </div>
    <div class="home-page__body">
        <h2 class="text-centered">Don't know what to watch, or where to spend your leisure ?</h2>
        <section class="check-out-section flex--column">
            <h3 class="text-centered">Check out <a href="/top-movies" class="btn btn--primary navLink">Top 3 </a>
 rated movies for the week!</h3>
        </section>
    </div>
</div>
${footerTemplate()}

`