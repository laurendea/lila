import mongoose from 'mongoose';

const gratitudeEntrySchema = mongoose.Schema({
    date: { type: String },
    entry: { type: String },
});

const GratitudeEntry = mongoose.model('GratitudeEntry', gratitudeEntrySchema);

export default GratitudeEntry;


