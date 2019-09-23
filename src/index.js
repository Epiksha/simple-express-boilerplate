import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import router from './routes/router';

const app = express();

app.use(cors());
app.use('/router', router);

const port = process.env.PORT || 8000;

app.listen(port, () =>
    console.log(`Express app listening on port ${port}!`),
);