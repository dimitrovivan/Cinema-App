const Movie = require('../models/Movie');

function getAllMovies() {
   return Movie.find({}).lean();
}

function getMovieById(id) {
    return Movie.findById(id).lean();
}

module.exports = {
    getAllMovies,
    getMovieById
}