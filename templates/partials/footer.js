import { html } from 'https://unpkg.com/lit-html?module';

export default () => html`
<footer class="footer flex--row">
                <div class="footer__description">
                    <h4 class="footer__heading">Questions?</h4>
                    <p>Fell free to contact us on: </p>
                </div>
                <ul class="footer__list flex--row">
                    <li class="footer__list-item"><a href="" class="phone-contact">089 547 8941</a></li>
                    <li class="footer__list-item"><a href="https://www.facebook.com/" class="instagram">Instagram</a>
                    </li>
                    <li class="footer__list-item"><a href="https://www.instagram.com/" class="facebook">Facebook</a>
                    </li>
                    <li class="footer__list-item"><a href="https://mail.bg/" class="mail">Mail</a></li>
                </ul>
            </footer>
`