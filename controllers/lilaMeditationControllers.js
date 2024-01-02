import Meditation from '../models/meditation.js'

const getMeditations = async (req, res) => {
    // TODO: Retrieve all meditation from the database and send them as a response
    Meditation.find({}).then((findMeditations) => {
        res.json(findMeditations)
    })  
}

const createMeditation = async (req, res) => {
    // TODO: Create a new meditation and save it to the database
    const newMeditation = req.body
     Meditation.create(req.body).then((newMeditation) => {
        res.json(newMeditation)
})
}


const updateMeditation = async (req, res) => {
    // accesed the req.params.id from the endpoint routes
    // const id and const updateData are telling us where the info is coming from
    // const updateData is getting the value from the request body
    // the req.body is going to be input by a user according to the movie schema
    // updateData function is going to build a new object that will replace the old mongo document 
    // we will use postman to build that new object and make the PUT request 
    const id = req.params.id
    const updateData = req.body
    Meditation.findByIdAndUpdate (id, updateData, {new: true})
    .then((updateMeditation) => {
        res.json(updateMeditation)
    })
}

const deleteMeditation = async (req, res) => {
    const id = req.params.id
    Meditation.findByIdAndDelete (id)
    .then((deleteMeditation) => {
        res.json(deleteMeditation)
    })
}



export{getMeditations, createMeditation, updateMeditation, deleteMeditation}

