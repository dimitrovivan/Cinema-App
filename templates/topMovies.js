import { html } from 'https://unpkg.com/lit-html?module';
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
                ${Object.keys(topThreeMovies)?.map(key => 
            html`
            <div class="movie-card-wrapper">
                <div class="movie-card">
                    <div class="movie-card__header">
                        <img src="../images/${topThreeMovies[key].imgName}.jpg" alt="Movie Picture">
                    </div>
                    <div class="movie-card__body">
                        <h3 class="movie-card__heading">${topThreeMovies[key].name}</h3>
                        <p class="movie-card__genre">${topThreeMovies[key].genre}</p>
                    </div>
                    <div class="movie-card__footer">
                        <p>${topThreeMovies[key].description}
                        </p>

                    </div>
                </div>

                <div class="streamHours">
                   ${Object.keys(topThreeMovies[key].streams).map(streamHour => html`
                   <a href="/all-movies/${key}/${streamHour}" class="btn btn--primary navLink">${streamHour}</a>
                   `)}
                </div>

            </div>`
          )}
          ${Object.keys(topThreeMovies).length == 0 ? html`<h1>No movies...</h1>` : html``}

                </div>
            </div>
`