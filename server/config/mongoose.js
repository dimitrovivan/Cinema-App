function mongooseConfig() {
    const mongoose = require('mongoose');
    const mongooseDbOrigin = 'mongodb://localhost:27017/';
    const mongooseDbName = 'cinema-app';
    mongoose.connect(`${mongooseDbOrigin}${mongooseDbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', console.log.bind(console, `Connected to db - ${mongooseDbName}`));
}

module.exports = mongooseConfig;