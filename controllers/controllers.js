import GratitudeEntry from '../models/gratitude.js';
import MeditationEntry from '../models/meditation.js';

const viewLogOptionsButton = (req, res) => {
  res.render('log-options');
};

const chooseLogOption = (req, res) => {
  res.render('log-options');
};

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

const viewGratitudeEntry = (req, res) => {
  res.render('gratitude-entry'); 
};

const editGratitudeEntry = async (req, res) => {
  try {
    const id = req.params.date;
    const updateData = req.body;
    const updatedGratitudeEntry = await GratitudeEntry.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedGratitudeEntry) {
      return res.status(404).json({ error: 'Gratitude entry not found' });
    }

    res.redirect(`/gratitude-entries/${updatedGratitudeEntry.date}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteGratitudeEntry = async (req, res) => {
  try {
    const id = req.params.date;
    const deletedGratitudeEntry = await GratitudeEntry.findByIdAndDelete(id);

    if (!deletedGratitudeEntry) {
      return res.status(404).json({ error: 'Gratitude entry not found' });
    }

    res.redirect('/gratitude-entries');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//const createMeditationEntry = async (req, res) => {
 // try {
   // const { start, end, notes } = req.body;
   // const newMeditationEntry = await MeditationEntry.create({ start, end, notes });
   // res.redirect(`/meditation-entries/${newMeditationEntry.date}`);
 // } catch (error) {
  //  console.error(error);
  //  res.status(500).json({ error: 'Internal Server Error' });
 // }
//};

const viewAllMeditationEntries = async (req, res) => {
  try {
    const allMeditationEntries = await MeditationEntry.find();
    res.render('meditation-entries-all', { entries: allMeditationEntries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const viewMeditationEntry = async (req, res) => {
  try {
    const date = req.params.date;
    const meditationEntry = await MeditationEntry.findOne({ date });

    if (!meditationEntry) {
      return res.status(404).json({ error: 'Meditation entry not found' });
    }

    res.render('meditation-entry', { entry: meditationEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editMeditationEntry = async (req, res) => {
  try {
    const id = req.params.date;
    const updateData = req.body;
    const updatedMeditationEntry = await MeditationEntry.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedMeditationEntry) {
      return res.status(404).json({ error: 'Meditation entry not found' });
    }

    res.redirect(`/meditation-entries/${updatedMeditationEntry.date}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteMeditationEntry = async (req, res) => {
  try {
    const id = req.params.date;
    const deletedMeditationEntry = await MeditationEntry.findByIdAndDelete(id);

    if (!deletedMeditationEntry) {
      return res.status(404).json({ error: 'Meditation entry not found' });
    }

    res.redirect('/meditation-entries');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

 const createMeditationEntry = async (req, res) => {
  try {
      const { date, duration, notes } = req.body;
      const newMeditationEntry = new MeditationEntry({ date, duration, notes });
      await newMeditationEntry.save();
      res.status(201).json(newMeditationEntry);
  } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getMeditationEntries = async (req, res) => {
  try {
      const meditationEntries = await MeditationEntry.find();
      res.json(meditationEntries);
  } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateMeditationEntry = async (req, res) => {
  try {
      const { id } = req.params;
      const { date, duration, notes } = req.body;

      // Find the existing entry by ID
      const existingEntry = await Meditation.findById(id);

      if (!existingEntry) {
          return res.status(404).json({ message: 'Meditation entry not found' });
      }

      // Update the entry
      existingEntry.date = date;
      existingEntry.duration = duration;
      existingEntry.notes = notes;

      // Save the updated entry
      await existingEntry.save();

      res.json(existingEntry);
  } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
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
  viewAllMeditationEntries,
  viewMeditationEntry,
  editMeditationEntry,
  deleteMeditationEntry
};