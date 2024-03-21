const express = require('express');
const app = express();

app.use(express.json());



const port=3001;

app.listen(port, console.log("Listening on port " + port));


const connectDB=require('../task-manager/db/connect')

//app.use('/task-manager/tasks', router)




console.log(__filename)

