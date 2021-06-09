const config = {
    production: {
        PORT: 80
    },
    
    development: {
        PORT: 5000
    }
}

module.exports = config[process.env.NODE_ENV.trim()];