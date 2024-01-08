import mongoose from 'mongoose' 

const meditationEntrySchema = mongoose.Schema({
   
    date: {type: String},
    duration: {type: String},
    notes: {type: String}
}) 

const MeditationEntry = mongoose.model('MeditationEntry', meditationEntrySchema) 

export default MeditationEntry
