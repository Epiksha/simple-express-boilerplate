const mongoose = require('mongoose');

const logger = require('../utilities/logger.js');

module.exports = () => {
    const mongoURI = process.env.MONGODB_URI;

    const config = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    mongoose.connect(mongoURI, config).then(() => {
        logger.info('Successfully connected to database.');
    }, (error) => {
        logger.error(`Could not connect to database.\n${error}`);
    });

    mongoose.set('useCreateIndex', true);
};