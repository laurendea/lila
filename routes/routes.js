import express from 'express';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

import { createMeditationEntry, getMeditationEntries, updateMeditationEntry, deleteMeditationEntry, getGratitudeEntries, createGratitudeEntry, updateGratitudeEntry, deleteGratitudeEntry } from '../controllers/controllers.js';

//////////////////////////////////////////////////////////////////////
///////////// gratitude routes ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Route for fetching all gratitude entries
router.get('/gratitude-entries', getGratitudeEntries);

// Route for creating a new meditation entry
router.post('/create-gratitude-entry', upload.single('photo'), createGratitudeEntry);

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
