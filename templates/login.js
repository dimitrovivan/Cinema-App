import { html } from 'https://unpkg.com/lit-html?module';
import headerTemplate from './partials/header.js';
import footerTemplate from './partials/footer.js';
import { login } from '../scripts/userServices.js';

export default (
    {
        isLogged
    }
) => html`
${headerTemplate(isLogged)}
<div class="login-page">
                <div class="login-page__header">
                    <h1>Sign in</h1>
                </div>
                <div class="login-page__body">
                   <div class="submit-form loginForm">
                       <label for="email">Email:</label>
                       <input type="email" id="email" class="login-email"/>

                       <label for="password">Password:</label>
                       <input type="password" id="password" class="login-password"/>
                       <a href="/" class="btn btn--primary" @click=${login}>Sign in</a>
                   </div>
                </div>
                <div class="login-page__footer">
                    <div><span>New to Rxon?</span><a href="/register" class="navLink">Sign up</a></div>
                </div>
            </div>
${footerTemplate()}
`