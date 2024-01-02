import mongoose from 'mongoose' 

const gratitudeEntrySchema = mongoose.Schema({
    // TODO: Define the schema for a gratitude
    date: {type: String},
    entry: {type: String},
    photo: {type: String}
}) 

const GratitudeEntry = mongoose.model('GratitudeEntry', gratitudeEntrySchema) 

export default GratitudeEntry


