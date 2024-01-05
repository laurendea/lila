import 'dotenv/config.js';
import './config/database.js';

import cors from 'cors';
import express from 'express';
import router from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 7008;

const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());
app.use(cors());

app.use(express.static('views'));
app.use('/lila', cors(corsOptions),router);

app.listen(PORT, () => {
    console.log('lila is running on port 7008');
});
