import { html } from 'https://unpkg.com/lit-html?module';
import headerTemplate from './partials/header.js';
import footerTemplate from './partials/footer.js';

export default () => html`
${headerTemplate()}
<div class="login-page">
                <div class="login-page__header">
                    <h1>Sign in</h1>
                </div>
                <div class="login-page__body">
                   <div class="submit-form">
                       <label for="email">Email:</label>
                       <input type="email" id="email" class="login-email"/>

                       <label for="password">Password:</label>
                       <input type="password" id="password" class="login-password"/>
                       <a href="/" class="btn btn--primary">Sign in</a>
                   </div>
                </div>
                <div class="login-page__footer">
                    <div><span>New to Rxon?</span><a href="/register" class="navLink">Sign up now</a></div>
                </div>
            </div>
${footerTemplate()}
`