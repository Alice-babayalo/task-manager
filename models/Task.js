const mongoose = require('mongoose');
const taskSchema=new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength:[25, 'name cannot be more than 25 characters']
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
})

const TaskModel=mongoose.model("Taskmodel", taskSchema);
module.exports = TaskModel;
