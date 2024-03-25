const mongoose = require('mongoose')

const connectDB = mongoose.connect("mongodb+srv://task-manager:john@cluster0.7cr1ke7.mongodb.net/").then(console.log("Connected to the database"))
module.exports = connectDB
