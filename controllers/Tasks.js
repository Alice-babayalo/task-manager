const Task=require('../models/Task');
const getAllTasks=(req,res)=>{

}
const createTask= async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        console.log(error);
    }
}
const getTask= (req,res)=>{}
const updateTask= (req,res)=>{}
const deleteTask= (req,res)=>{}
module.exports={getAllTasks, createTask, getTask, updateTask, deleteTask}