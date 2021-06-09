const Movie = require('../models/Movie');

function getAllMovies() {
   return Movie.find({}).lean();
}

function getMovieById(id) {
    return Movie.findById(id).lean();
}

function updateMovieById(id, changedStreams) {
    return Movie.findByIdAndUpdate(id, {streams: changedStreams});
}

module.exports = {
    getAllMovies,
    getMovieById,
    updateMovieById
}