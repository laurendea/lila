import express from 'express';
const router = express.Router();
import { createMeditationEntry, getMeditationEntries, updateMeditationEntry } from '../controllers/Controllers.js';
//import * as controllers from '../controllers/controllers.js';

// View a button on the home screen to navigate to log options
//router.get('/home/log-options', controllers.viewLogOptionsButton);

// Choose between meditation or gratitude to view or create entries
//router.get('/log-options', controllers.chooseLogOption);

// Write gratitude in a text box to log for the day
//router.post('/gratitude-entries', controllers.createGratitudeEntry);

// View gratitude entry for a specific day
//router.get('/gratitude-entries/:date', controllers.viewGratitudeEntry);

// Edit gratitude entry for a specific day
//router.put('/gratitude-entries/:date', controllers.editGratitudeEntry);

// Delete gratitude entry for a specific day
//router.delete('/gratitude-entries/:date', controllers.deleteGratitudeEntry);

// Write start, end, and notes of a meditation session to log for the day
//router.post('/meditation-entries', controllers.createMeditationEntry);

// View all meditation entries
//router.get('/meditation-entries', controllers.viewAllMeditationEntries);

// View meditation entry for a specific day
//router.get('/meditation-entries/:date', controllers.viewMeditationEntry);

// Edit meditation entry for a specific day
//router.put('/meditation-entries/:date', controllers.editMeditationEntry);

// Delete meditation entry for a specific day
//router.delete('/meditation-entries/:date', controllers.deleteMeditationEntry);

// View a button for the home screen on every page
//router.get('/home', controllers.viewLogOptionsButton);


// Route for creating a new meditation entry
router.post('/create-meditation-entry', createMeditationEntry);

// Route for fetching all meditation entries
router.get('/meditation-entries', getMeditationEntries);

// Route for updating a meditation entry
router.put('/update-meditation-entry/:id', updateMeditationEntry);

export default router;