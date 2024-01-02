import express from 'express';
const router = express.Router();
import * as Controllers from '../controllers/controllers';

// View a button on the home screen to navigate to log options
router.get('/home/log-options', Controllers.viewLogOptionsButton);

// Choose between meditation or gratitude to view or create entries
router.get('/log-options', Controllers.chooseLogOption);

// Write gratitude in a text box to log for the day
router.post('/gratitude-entries', Controllers.createGratitudeEntry);

// View gratitude entry for a specific day
router.get('/gratitude-entries/:date', Controllers.viewGratitudeEntry);

// Edit gratitude entry for a specific day
router.put('/gratitude-entries/:date', Controllers.editGratitudeEntry);

// Delete gratitude entry for a specific day
router.delete('/gratitude-entries/:date', Controllers.deleteGratitudeEntry);

// Write start, end, and notes of a meditation session to log for the day
router.post('/meditation-entries', Controllers.createMeditationEntry);

// View meditation entry for a specific day
router.get('/meditation-entries/:date', Controllers.viewMeditationEntry);

// Edit meditation entry for a specific day
router.put('/meditation-entries/:date', Controllers.editMeditationEntry);

// Delete meditation entry for a specific day
router.delete('/meditation-entries/:date', Controllers.deleteMeditationEntry);

// View a button for the home screen on every page
router.get('/home', Controllers.viewLogOptionsButton);

export default router;