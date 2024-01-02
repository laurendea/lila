import express from 'express' 
const router = express.Router() 

// Import the meditation and gratitude controllers

import { getMeditations, createMeditation, updateMeditation, deleteMeditation } from '../controllers/lilaMeditationControllers.js' 


import { getGratitudes, createGratitude, updateGratitude, deleteGratitude } from '../controllers/lilaGratitudeControllers.js' 

// Meditation routes

router.get('/', getMeditations) 

router.post('/createMeditation', createMeditation) 

router.put('/updateMeditation/:id', updateMeditation) 

router.delete('/deleteMeditation/:id', deleteMeditation) 

// Gratitude routes

router.get('/', getGratitudes) 

router.post('/createGratitude', createGratitude) 

router.put('/updateGratitude/:id', updateGratitude) 

router.delete('/deleteGratitude/:id', deleteGratitude) 




export default router 
