const express = require('express');
const router=express.Router();


const {getAllTasks, getTask, createTask, updateTask, deleteTask, } = require('../controllers/Tasks');

router.post('/create', createTask)
router.get('/all', getAllTasks)
router.get('/findTask', getTask)
router.put('/updateTask', updateTask)
router.delete('/deleteTask', deleteTask) 

module.exports = router;
