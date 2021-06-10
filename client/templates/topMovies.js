import { html } from '../../node_modules/lit-html/lit-html.js'
import headerTemplate from './partials/header.js';

export default (
    {
        isLogged,
        topThreeMovies
    }
) => html`
${headerTemplate(isLogged)}
<div class="top-movies">
    <div class="top-movies__header">
        <h6 class="top-movies__heading">Not your type ? Check out <a href="/all-movies" class="navLink">All Movies</a></h6>
    </div>
                <div class="cards-wrapper">
                ${topThreeMovies?.map(movie => 
            html`
            <div class="movie-card-wrapper">
                <div class="movie-card">
                    <div class="movie-card__header">
                        <img src="../images/${movie.imgName}.jpg" alt="Movie Picture">
                    </div>
                    <div class="movie-card__body">
                        <h3 class="movie-card__heading">${movie.name}</h3>
                        <p class="movie-card__genre">${movie.genre}</p>
                    </div>
                    <div class="movie-card__footer">
                        <p>${movie.description}
                        </p>

                    </div>
                </div>

                <div class="streamHours">
                   ${Object.keys(movie.streams).map(streamHour => html`
                   <a href="/all-movies/${movie._id}/${streamHour}" class="btn btn--primary navLink">${streamHour}</a>
                   `)}
                </div>

            </div>`
          )}
          ${Object.keys(topThreeMovies).length == 0 ? html`<h1>No movies...</h1>` : html``}

                </div>
            </div>
`