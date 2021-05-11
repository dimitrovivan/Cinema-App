import { html } from 'https://unpkg.com/lit-html?module';
import headerTemplate from './partials/header.js';

export default (
    {
        isLogged,
    }
) => html`
${headerTemplate(isLogged)}
<div class="tickets-page">
    <div class="tickets-page__header">
        <h1 class="tickets-page__heading text-centered">Choose a movie and stream hour</h1>
    </div>

    <div class="tickets-page__body">
        <div class="cards-wrapper">

            <div class="movie-card-wrapper">
                <div class="movie-card">
                    <div class="movie-card__header">
                        <img src="./images/avengers.jpg" alt="The Avengers picture">
                    </div>
                    <div class="movie-card__body">
                        <h3 class="movie-card__heading">The Avengers</h3>
                        <p class="movie-card__genre">Action, Adventure, Fantasy</p>
                    </div>
                    <div class="movie-card__footer">
                        <p>As Steve Rogers struggles to embrace his role in the modern world, he teams up with a
                            fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat.
                        </p>

                    </div>
                </div>

                <div class="streamHours">
                    <a href="/tickets/-M_RKZoWXZsJt8_OWsAu/09:15" class="btn btn--primary navLink">09:15</a>
                    <a href="/tickets/-M_RKZoWXZsJt8_OWsAu/18:30" class="btn btn--primary navLink">18:30</a>
                </div>

            </div>

            <div class="movie-card-wrapper">
                <div class="movie-card">
                    <div class="movie-card__header">
                        <img src="./images/captain-america.jpg" alt="Winter Soldier picture">
                    </div>
                    <div class="movie-card__body">
                        <h3 class="movie-card__heading">The Winter Soldier</h3>
                        <p class="movie-card__genre">Action, Adventure, Fantasy</p>
                    </div>
                    <div class="movie-card__footer">
                        <p>Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</p>

                    </div>
                </div>

                <div class="streamHours">
                    <a href="/tickets/-M_RLBtJ2OPYphtEDO1p/11:15" class="btn btn--primary navLink">11:15</a>
                    <a href="/tickets/-M_RLBtJ2OPYphtEDO1p/15:30" class="btn btn--primary navLink">15:30</a>
                </div>
            </div>

            <div class="movie-card-wrapper">
                <div class="movie-card">
                    <div class="movie-card__header">
                        <img src="./images/interstellar.jpg" alt="Interstellar picture">
                    </div>
                    <div class="movie-card__body">
                        <h3 class="movie-card__heading">Interstellar</h3>
                        <p class="movie-card__genre">Sci-Fi, Adventure, Drama</p>
                    </div>
                    <div class="movie-card__footer">
                        <p>A team of explorers travel through a wormhole in space in an attempt to ensure humanity's
                            survival. Will they succeed or no ?</p>
                    </div>
                </div>

                <div class="streamHours">
                    <a href="/tickets/-M_RLVnuPxFmAOiDolAd/13:15" class="btn btn--primary navLink">13:15</a>
                    <a href="/tickets/-M_RLVnuPxFmAOiDolAd/16:30" class="btn btn--primary navLink">16:30</a>
                </div>

            </div>

            <div class="movie-card-wrapper">
                <div class="movie-card">
                    <div class="movie-card__header">
                        <img src="./images/thor.jpg" alt="Thor picture">
                    </div>
                    <div class="movie-card__body">
                        <h3 class="movie-card__heading">Thor 2</h3>
                        <p class="movie-card__genre">Action, Adventure, Fantasy</p>
                    </div>
                    <div class="movie-card__footer">
                        <p>When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a
                            perilous
                            and personal journey that will reunite him with doctor Jane Foster.</p>
                    </div>
                </div>

                <div class="streamHours">
                    <a href="/tickets/-M_RLounE3cQt11eMlRH/13:00" class="btn btn--primary navLink">13:00</a>
                    <a href="/tickets/-M_RLounE3cQt11eMlRH/20:00" class="btn btn--primary navLink">20:00</a>
                </div>
            </div>

        </div>
    </div>
</div>

`