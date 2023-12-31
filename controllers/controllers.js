import GratitudeEntry from '../models/gratitude.js';
import MeditationEntry from '../models/meditation.js';


///////////////////////////////////////////////////////////////////////////
///////////// gratitude controllers ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


export const createGratitudeEntry = async (req, res) => {
  try {
      console.log('req.body:', req.body);

      // Handle both JSON and FormData
      const { date, entry } = req.body || req.body.formData;

      const newGratitudeEntry = new GratitudeEntry({ date, entry });
      await newGratitudeEntry.save();
      res.status(201).json(newGratitudeEntry);
  } catch (error) {
      console.error('Error in createGratitudeEntry:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};



export const updateGratitudeEntry = async (req, res) => {
  try {
    const { date } = req.params;
    const { newDate, entry, photo } = req.body;
    console.log(req.body)

    // Find the existing entry by date
    const existingEntry = await GratitudeEntry.findOne({ date });

    if (!existingEntry) {
      return res.status(404).json({ message: 'Gratitude entry not found' });
    }

    // Update the entry
    existingEntry.date = newDate || existingEntry.date; // Update the date if newDate is provided
    existingEntry.entry = entry || existingEntry.entry;

    // Save the updated entry
    await existingEntry.save();

    res.json(existingEntry);
    console.log(existingEntry)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteGratitudeEntry = async (req, res) => {
  try {
    const date = req.params.date;

    // Find the entry by date and remove it
    const deletedGratitudeEntry = await GratitudeEntry.findOneAndDelete({ date });

    if (!deletedGratitudeEntry) {
      return res.status(404).json({ message: 'Gratitude entry not found' });
    }

    res.json({ message: 'Gratitude entry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const getGratitudeEntries = async (req, res) => {
  try {
    const gratitudeEntries = await GratitudeEntry.find();
    res.json(gratitudeEntries);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


//////////////////////////////////////////////////////////////////////////////
///////////// meditation controllers /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

export const getMeditationEntries = async (req, res) => {
  try {
      const meditationEntries = await MeditationEntry.find();
      res.json(meditationEntries);
  } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
  }
}



export const deleteMeditationEntry = async (req, res) => {
  try {
    const date = req.params.date;

    // Find the entry by date and remove it
    const deletedMeditationEntry = await MeditationEntry.findOneAndDelete({ date });

    if (!deletedMeditationEntry) {
      return res.status(404).json({ message: 'Meditation entry not found' });
    }

    res.json({ message: 'Meditation entry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createMeditationEntry = async (req, res) => {
  try {
      const { date, duration, notes } = req.body;
      const newMeditationEntry = new MeditationEntry({ date, duration, notes });
      await newMeditationEntry.save();
      res.status(201).json(newMeditationEntry);
  } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateMeditationEntry = async (req, res) => {
  try {
    const { date } = req.params;
    const { newDate, duration, notes } = req.body;

    // Find the existing entry by date
    const existingEntry = await MeditationEntry.findOne({ date });

    if (!existingEntry) {
      return res.status(404).json({ message: 'Meditation entry not found' });
    }

    // Update the entry fields
    existingEntry.date = newDate || existingEntry.date;
    existingEntry.duration = duration || existingEntry.duration;
    existingEntry.notes = notes || existingEntry.notes;

    // Save the updated entry
    await existingEntry.save();

    res.json(existingEntry);
    console.log(existingEntry)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};





