import mongoose from 'mongoose' 

const gratitudeSchema = mongoose.Schema({
    // TODO: Define the schema for a gratitude
    date: {type: String},
    entry: {type: String},
    photo: {type: Number}
}) 

const Gratitude = mongoose.model('Gratitude', gratitudeSchema) 

export default Gratitude


