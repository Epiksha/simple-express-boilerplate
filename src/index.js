import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

// Connect To Mongo
mongoose.connect('mongodb://localhost/simple-express-boilerplate', { useNewUrlParser: true, useUnifiedTopology: true });

// General Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes Middleware
app.use('/user', require('./routes/user'));

// App Listen
const PORT = process.env.PORT || 8000;
app.listen(PORT || 8000, () =>  console.log(`Express app listening on port ${PORT}.`));