import mongoose from 'mongoose' 

const meditationSchema = mongoose.Schema({
    // TODO: Define the schema for a meditation
    date: {type: String},
    time: {type: String},
    entry: {type: String}
}) 

const Meditation = mongoose.model('Meditation', meditationSchema) 

export default Meditation