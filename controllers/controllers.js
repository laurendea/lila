// Import GratitudeEntry and MeditationEntry model

import GratitudeEntry from '../models/gratitude.js'; 
import MeditationEntry from '../models/meditation.js';

// View a button on the home screen to navigate to log options
const viewLogOptionsButton = (req, res) => {
  res.render('log-options/index');
};

// Choose between meditation or gratitude to view or create entries
const chooseLogOption = (req, res) => {
  res.render('log-options/index');
};

// Write gratitude in a text box to log for the day
const createGratitudeEntry = async (req, res) => {
  try {
    const { content } = req.body;
    const newGratitudeEntry = await GratitudeEntry.create({ content });
    res.redirect(`/gratitude-entries/${newGratitudeEntry.date}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// View gratitude entry for a specific day
const viewGratitudeEntry = (req, res) => {
  res.render('gratitude-entries/show');
};

// Edit gratitude entry for a specific day
const editGratitudeEntry = async (req, res) => {
    try {
      const id = req.params.date;
      const updateData = req.body;
      const updatedGratitudeEntry = await GratitudeEntry.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedGratitudeEntry) {
        // Entry not found
        return res.status(404).json({ error: 'Gratitude entry not found' });
      }
  
      res.redirect(`/gratitude-entries/${updatedGratitudeEntry.date}`);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Handle deletion logic
  const deleteGratitudeEntry = async (req, res) => {
    try {
      const id = req.params.date;
      const deletedGratitudeEntry = await GratitudeEntry.findByIdAndDelete(id);
  
      if (!deletedGratitudeEntry) {
        // Entry not found
        return res.status(404).json({ error: 'Gratitude entry not found' });
      }
  
      res.redirect('/gratitude-entries/show');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

// Write start, end, and notes of a meditation session to log for the day
const createMeditationEntry = async (req, res) => {
  // Handle form submission and create the meditation entry
  res.redirect('/meditation-entries/show');
};

// View meditation entry for a specific day
const viewMeditationEntry = (req, res) => {
  res.render('meditation-entries/show');
};

// Handle form submission and update the meditation entry
const editMeditationEntry = async (req, res) => {
    try {
      const id = req.params.date;
      const updateData = req.body;
      
      const updatedMeditationEntry = await MeditationEntry.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedMeditationEntry) {
        // If the entry with the provided date is not found
        return res.status(404).json({ error: 'Meditation entry not found' });
      }
  
      // Successfully updated, redirect or send a success response
      res.redirect(`/meditation-entries/${updatedMeditationEntry.date}`);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Handle deletion logic
  const deleteMeditationEntry = async (req, res) => {
    try {
      const id = req.params.date;

      const deletedMeditationEntry = await MeditationEntry.findByIdAndDelete(id);
  
      if (!deletedMeditationEntry) {
        // If the entry with the provided date is not found
        return res.status(404).json({ error: 'Meditation entry not found' });
      }
  
      // Successfully deleted, redirect or send a success response
      res.redirect('/meditation-entries/show');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export {
  viewLogOptionsButton,
  chooseLogOption,
  createGratitudeEntry,
  viewGratitudeEntry,
  editGratitudeEntry,
  deleteGratitudeEntry,
  createMeditationEntry,
  viewMeditationEntry,
  editMeditationEntry,
  deleteMeditationEntry
};