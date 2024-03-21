const mongoose = require('mongoose');
const taskSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})

const TaskModel=mongoose.model("Taskmodel", taskSchema);
module.exports = TaskModel;
