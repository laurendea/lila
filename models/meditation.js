import mongoose from 'mongoose' 

const meditationEntrySchema = mongoose.Schema({
    // TODO: Define the schema for a meditation
    date: {type: String},
    time: {type: String},
    entry: {type: String}
}) 

const MeditationEntry = mongoose.model('MeditationEntry', meditationEntrySchema) 

export default MeditationEntry