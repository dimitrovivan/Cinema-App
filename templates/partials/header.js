import { html } from 'https://unpkg.com/lit-html?module';
import { showBurgerMenu } from '../../scripts/util.js'

export default (isLogged) => html`
<header class="header flex--row">
                <div><a href="/" class="logo navLink">RxoN</a></div>
                <nav class="header__navigation">
                  <div class="burger-menu" @click=${showBurgerMenu}>
                      <div class="burger-menu__icon"></div>
                  </div>
                    <ul class="header__list flex--row">
                        <li class="header__list-item"><a href="/" class="header__link navLink">Home</a></li>
                        <li class="header__list-item"><a href="/about" class="header__link navLink">About</a></li>
                        <li class="header__list-item"><a href="/all-movies" class="header__link navLink">All Movies</a></li>
                        ${
                        isLogged ? 
                        html`
                        <li class="header__list-item"><a href="/logout" class="header__btn btn btn--primary navLink">Logout</a>
                        </li>
                        `
                        : html`
                        <li class="header__list-item"><a href="/login" class="header__btn btn btn--primary navLink">Sign in</a>
                        </li>
                        `
                        }
                    </ul>
                </nav>
            </header>
`