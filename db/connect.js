const mongoose = require('mongoose')

const connectDB = mongoose.connect(process.env.MONGO_URI).then(console.log("Connected to the database"))


module.exports = connectDB;
