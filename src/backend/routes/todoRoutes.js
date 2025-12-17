import express from 'express';
import db from '../db.js';

const router = express.Router();

// Get all todos for loogged- in user 
router.get('/', (req, res) => {
    res.json({ message: 'Todo route is working' });
})

router.post('/', (req, res) => {

})  

// update todo
router.put('/:id', (req, res) => {

})  

// delete todo
router.delete('/:id', (req, res) => {   

})


export default router