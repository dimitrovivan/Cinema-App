import { html } from '../../node_modules/lit-html/lit-html.js'
import headerTemplate from './partials/header.js';

export default (
    {
        isLogged,
        month,
        day,
        moviesData
    }
) => html`
${headerTemplate(isLogged)}
<div class="all-movies">
    <div class="all-movies__header">
        <h1 class="all-movies__heading text-centered">Choose a movie and stream hour</h1>
        <h3 class="all-movies__date text-centered">Daily Catalog for: <span> ${day} ${month} </span></h3>
    </div>

    <div class="all-movies__body">
        <div class="cards-wrapper">
         ${Object.keys(moviesData)?.map(key => 
            html`
            <div class="movie-card-wrapper">
                <div class="movie-card">
                    <div class="movie-card__header">
                        <img src="../images/${moviesData[key].imgName}.jpg" alt="Movie Picture">
                    </div>
                    <div class="movie-card__body">
                        <h3 class="movie-card__heading">${moviesData[key].name}</h3>
                        <p class="movie-card__genre">${moviesData[key].genre}</p>
                    </div>
                    <div class="movie-card__footer">
                        <p>${moviesData[key].description}
                        </p>

                    </div>
                </div>

                <div class="streamHours">
                   ${Object.keys(moviesData[key].streams).map(streamHour => html`
                   <a href="/all-movies/${key}/${streamHour}" class="btn btn--primary navLink">${streamHour}</a>
                   `)}
                </div>

            </div>`
          )}
          ${Object.keys(moviesData).length == 0 ? html`<h1>No movies...</h1>` : html``}

        </div>
    </div>
</div>
`