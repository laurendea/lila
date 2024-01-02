import express from 'express' 
const router = express.Router() 

// Import the business controller
import { getMeditations, createMeditation, updateMeditation, deleteMeditation} from '../controllers/lilaMeditationControllers.js' 
import { getGratitudes, createGratitude, updateGratitude, deleteGratitude} from '../controllers/lilaGratitudeControllers.js' 


// meditation routes 


router.get('/viewMeditations', getMeditations) 



router.post('/createMeditation', createMeditation) 

// passed updateMeditation as a function, identify the id of the movie to be updated
// we will get the id by req.params when we make a request in the url that includes a mongo document id
// the request is an object , therefore the id becomes a variable which stores the data , the slug is /:, 
// example: localhost4000/updatemovie/:id
router.put('/updateMeditation/:id', updateMeditation) 

router.delete('/deleteMeditation/:id', deleteMeditation) 



// gratitude routes


router.get('/viewGratitudes', getGratitudes) 


router.post('/createGratitude', createGratitude) 


router.put('/updateGratitude/:id', updateGratitude) 


router.delete('/deleteGratitude/:id', deleteGratitude) 

// end //

export default router 
