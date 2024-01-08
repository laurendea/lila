import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();
const upload = multer({ dest: 'upload/images' });
const fs = require('fs').promises;

import { createMeditationEntry, getMeditationEntries, updateMeditationEntry, deleteMeditationEntry, getGratitudeEntries, createGratitudeEntry, updateGratitudeEntry, deleteGratitudeEntry } from '../controllers/controllers.js';

//////////////////////////////////////////////////////////////////////
///////////// gratitude routes ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Route for fetching all gratitude entries
router.get('/gratitude-entries', getGratitudeEntries);

// Route for creating a new meditation entry
router.post("/create-gratitude-entry", upload.single('photo'), createGratitudeEntry, async (req, res) => {
    try {
      // Extract form data
      const { date, entry } = req.body;
  
      // Process the uploaded file
      if (req.file) {
        const photoFile = req.file;
  
        // Move the file to the desired destination
        const filePath = path.join(__dirname, 'upload/images', photoFile.filename);
        await fs.promises.rename(photoFile.path, filePath);
  
        // Your file processing logic here
        console.log('File details:', {
          originalname: photoFile.originalname,
          filename: photoFile.filename,
          mimetype: photoFile.mimetype,
          size: photoFile.size,
          destination: filePath,
        });
  
        // Save the gratitude entry to the database
        const newGratitudeEntry = new newGratitudeEntry({
          date: new Date(date),
          entry,
          photoUrl: `http://localhost:7008/photo/${photoFile.filename}`
        });
  
        await newGratitudeEntry.save();
      }
  
      res.status(201).json({ message: 'Gratitude entry created successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

// Route for updating a meditation entry by date
router.put('/update-gratitude-entry/:date', updateGratitudeEntry);

// Route for deleting a meditation entry by date
router.delete('/delete-gratitude-entry/:date', deleteGratitudeEntry);


//////////////////////////////////////////////////////////////////////
///////////// meditation routes //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Route for creating a new meditation entry
router.post('/create-meditation-entry', createMeditationEntry);

// Route for fetching all meditation entries
router.get('/meditation-entries', getMeditationEntries);

// Route for updating a meditation entry by date
router.put('/update-meditation-entry/:date', updateMeditationEntry);

// Route for deleting a meditation entry by date
router.delete('/delete-meditation-entry/:date', deleteMeditationEntry);



export default router;
