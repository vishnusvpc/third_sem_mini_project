import express from 'express'
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour } from '../controllers/tourController.js'
const router = express.Router()

// Create new tour....

router.post('/', createTour)

// Update tour....

router.put('/:id', updateTour)

// Delete tour....

router.delete('/:id', deleteTour)

// Get single tour....

router.get('/:id', getSingleTour)

// Get all tour....

router.get('/', getAllTour)

export default router;