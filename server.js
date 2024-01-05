import 'dotenv/config.js';
import './config/database.js';

import cors from 'cors';
import express from 'express';
import multer from 'multer';
import path from 'path';
import router from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 7008;

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());
app.use(cors());

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Set the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension); // Set the filename for uploaded files
  },
});

const upload = multer({ storage });

// Use the Multer middleware for handling file uploads
app.use(upload.single('photo'));

app.use(express.static('views'));
app.use('/lila', cors(corsOptions), router);

app.listen(PORT, () => {
  console.log('lila is running on port 7008');
});

