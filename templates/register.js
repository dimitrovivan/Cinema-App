import { html } from 'https://unpkg.com/lit-html?module';
import headerTemplate from './partials/header.js';
import footerTemplate from './partials/footer.js';

export default () => html`
${headerTemplate()}
<div class="register-page">
                <div class="register-page__header">
                    <h1>Sign up</h1>
                </div>
                <div class="register-page__body">
                   <div class="submit-form">
                       <label for="email">Email:</label>
                       <input type="email" id="email" class="register-email"/>

                       <label for="password">Password:</label>
                       <input type="password" id="password" class="register-password"/>

                       <label for="repPassword">Repeat Password:</label>
                       <input type="repPassword" id="repPassword" class="register-repPassword"/>
                       <a href="/login" class="btn btn--primary">Sign up</a>
                   </div>
                </div>
                <div class="register-page__footer">
                    <div><span>Already signed up ?</span><a href="/login" class="navLink">Sign in directly</a></div>
                </div>
            </div>
${footerTemplate()};
`