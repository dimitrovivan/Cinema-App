import { html } from 'https://unpkg.com/lit-html?module';
import headerTemplate from './partials/header.js';
import footerTemplate from './partials/footer.js';

export default () => html`
${headerTemplate()}
 <div class="about-page">
                <div class="about-page__header">
                    <h1>Who are we?</h1>
                </div>

                <div class="about-page__description">
                    <h2>RxoN is cinema booking system, which simplify choosing movie and picking tickets online.</h2>
                    <h3>There is no need to wait on queques to grab your seat, just go , choose and pay for your seat!
                        It's that simple.</h3>
                    <h5>We are partners with <span class="all-emphasize">all</span> cinemas in Bulgaria, so don't be afraid to pick your ticket anytime,
                        anywhere!</h5>
                </div>
            </div>
${footerTemplate()}
`