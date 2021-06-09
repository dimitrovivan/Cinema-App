const Movie = require('../models/Movie');

function getAllMovies() {
   return Movie.find({}).lean();
}

module.exports = {
    getAllMovies,
}