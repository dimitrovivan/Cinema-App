import { html } from 'https://unpkg.com/lit-html?module';

export default () => html`
<header class="header flex--row">
                <div><a href="/" class="logo navLink">RxoN</a></div>
                <nav class="header__navigation">
                    <ul class="header__list flex--row">
                        <li class="header__list-item"><a href="/" class="header__link navLink">Home</a></li>
                        <li class="header__list-item"><a href="/about" class="header__link navLink">About</a></li>
                        <li class="header__list-item"><a href="/tickets" class="header__link navLink">Tickets</a></li>
                        <li class="header__list-item"><a href="/login" class="header__btn btn btn--primary navLink">Sign in</a>
                        </li>
                        <li class="header__list-item"><a href="/logout" class="header__btn btn btn--primary navLink">Logout</a>
                        </li>
                    </ul>
                </nav>
            </header>
`