const { response } = require('express');
const Task=require('../models/Task');
const getAllTasks= async (req,res)=>{
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks})
    } catch (error) {
        
    }

}
const createTask= async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        console.log(error);
    }
}
const getTask= async (req,res)=>{
    try {
        const task=await Task.findOne(req.params.id)
        if(!task){
            return res.status(404).json({message:"There is no task with id:"+id});
        }
        else {
            res.json({task})
        }
    } catch (error) {
        response.status(500).json({message:"Server error"});
        console.log(error);
    }
}
const updateTask= async (req,res)=>{
    try {
       const task=await Task.findByIdAndUpdate()

    } catch (error) {
        res.statuse(500).json({message:"Internal server arreor"})
    }
}
const deleteTask= async (req,res)=>{
    try {
        const task=await Task.findByIdAndDelete(res.params.id)
        if(!task){
            return res.status(404).json({message:"There is no task with id:"+id});
        }
        else {
            res.json({task})
        }
    }
    catch (error) {
         res.statuse(500).json({message:"Internal server arreor"})
     }
}

module.exports={getAllTasks, createTask, getTask, updateTask, deleteTask};


/* MONGOOSE MODELS 
Model.deleteMany()
Model.deleteOne()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndReplace()
Model.findOneAndUpdate()
Model.replaceOne()
Model.updateMany()
Model.updateOne()
*/ 