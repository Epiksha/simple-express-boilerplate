const cors = require('cors');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const router = require('./router');
const config = require('./config/main');

const app = express();
const staticFileMiddleware = express.static(path.join(__dirname, 'public'));
dotenv.config();

// Middleware
app.use(cors(config.cors));
app.options('*', cors(config.cors));
app.use(history(config.history));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(staticFileMiddleware);

// Router
app.use('/', router);

// Boot
app.listen(process.env.PORT, console.log(`Express app listening on port ${process.env.PORT}.`));