import 'dotenv/config.js';
import './config/database.js';

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 7008;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static('views'));
app.use('/lila', router);

app.listen(PORT, () => {
    console.log('lila is running on port 7008');
});
