import { html } from 'https://unpkg.com/lit-html?module';
import headerTemplate from './partials/header.js';

export default () => html`
${headerTemplate()}
<div class="top-movies-page">
                <div class="cards-wrapper">
                    <div class="movie-card">
                        <div class="movie-card__header">
                            <img src="./images/captain-america.jpg" alt="Wonder Woman picture">
                        </div>
                        <div class="movie-card__body">
                            <h3 class="movie-card__heading">The Winter Soldier</h3>
                            <p>Action, Adventure, Fantasy</p>
                        </div>
                        <div class="movie-card__footer">
                            <p>As Steve Rogers struggles to embrace his role in the modern world, he teams up with a
                                fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat.</p>
                        </div>
                    </div>

                    <div class="movie-card">
                        <div class="movie-card__header">
                            <img src="./images/interstellar.jpg" alt="Wonder Woman picture">
                        </div>
                        <div class="movie-card__body">
                            <h3 class="movie-card__heading">Interstellar</h3>
                            <p>Sci-Fi, Adventure, Drama</p>
                        </div>
                        <div class="movie-card__footer">
                            <p>A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. Will they succeed or no ?</p>
                        </div>
                      </div>

                      <div class="movie-card">
                        <div class="movie-card__header">
                            <img src="./images/thor.jpg" alt="Wonder Woman picture">
                        </div>
                        <div class="movie-card__body">
                            <h3 class="movie-card__heading">Thor 2</h3>
                            <p>Action,  Adventure,  Fantasy</p>
                        </div>
                        <div class="movie-card__footer">
                            <p>When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.</p>
                        </div>
                      </div>

                </div>
            </div>
`