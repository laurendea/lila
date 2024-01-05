import 'dotenv/config.js';
import './config/database.js';

// Import necessary modules
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import router from './routes/routes.js';

// Create Express app
const app = express();
const PORT = process.env.PORT || 7008;

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname); // Unique filename
  },
});

const upload = multer({ storage: storage });

// CORS configuration
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors());


app.use(express.static('views'));
app.use('/lila', cors(corsOptions), router);

// Handle 500 errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log('lila is running on port 7008');
});

