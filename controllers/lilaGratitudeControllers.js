import Gratitude from '../models/gratitude.js'


const getGratitudes = async (req, res) => {
    // TODO: Retrieve all gratitudes from the database and send them as a response
    Gratitude.find({}).then((findGratitudes) => {
        res.json(findGratitudes)
    })  
}

const createGratitude = async (req, res) => {
    // TODO: Create a new meditation and save it to the database
    const newMeditation = req.body
     Gratitude.create(req.body).then((newGratitude) => {
        res.json(newGratitude)
})
}


const updateGratitude = async (req, res) => {
    const id = req.params.id
    const updateData = req.body
    Gratitude.findByIdAndUpdate (id, updateData, {new: true})
    .then((updateGratitude) => {
        res.json(updateGratitude)
    })
}

const deleteGratitude = async (req, res) => {
    const id = req.params.id
    Gratitude.findByIdAndDelete (id)
    .then((deleteGratitude) => {
        res.json(deleteGratitude)
    })
}


export{getGratitudes, createGratitude, updateGratitude, deleteGratitude}