const { error } = require('console');
const mongoose= require('mongoose');


const connectionString = "mongodb+srv://task-manager:john@cluster0.7cr1ke7.mongodb.net/firstDatabase";

const connectDB=
 mongoose.connect(connectionString)
.then(console.log("Connected to the Database"))
.catch(console.log(error));
module.exports = connectDB;
