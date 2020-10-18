const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const logger = require('./utilities/logger.js');

const mongoSetup = require('./services/mongo.js');
const normalizePort = require('./utilities/normalizePort.js');
const router = require('./router.js');

/* Allows use of environmental variables from .env file */
dotenv.config()

/* MongoDB Setup */
mongoSetup();

/* Server Setup */
const app = express();
const port = normalizePort(process.env.PORT || '8080');

app.use(cors({ origin: process.env.CLIENT_URL || 'localhost:3000' })); // CORS configuration
app.use(cookieParser()); // Allows cookies to be sent from client
app.use(express.urlencoded({ extended: false })); // Allows form data to be sent from client
app.use(express.json()); // body-parser middleware, allows request bodies to be sent
app.use(router); // Enables route handling from router file

// Boot
app.listen(port, logger.info(`Express app listening on port ${port}.`));