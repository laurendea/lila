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

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  },
})


const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
})


//app.use('/photo', express.static('upload/images'));
app.post("/lila/create-gratitude-entry", upload.single('photo'), (req, res) => {

  res.json({
      success: 1,
      photo_url: `http://localhost:7008/photo/${req.file.filename}`
  })
})

function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
      res.json({
          success: 0,
          message: err.message
      })
  }
}
app.use(errHandler);

// Enable CORS for all routes
app.use(cors({ origin: '*' }));

// Parse JSON bodies
app.use(express.json());

// Serve static files from 'views' directory
//app.use(express.static('views'));

// Define routes

const corsOptions = {
  origin: 'http://127.0.0.1:5501', // Adjust this to the actual origin of your frontend
};

app.use('/lila', cors(corsOptions), router);
app.use('/photo', cors(corsOptions), express.static('upload/images'));

//app.use('/lila', router);

// Handle 500 errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`lila is running on port ${PORT}`);
});


