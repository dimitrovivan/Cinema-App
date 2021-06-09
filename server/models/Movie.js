const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    imgName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    streams: {
    }
});

module.exports = mongoose.model('Movie', movieSchema);