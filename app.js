const express = require('express');
const app = express();

app.use(express.json());



const port=3001;
const connectDB=require('../task-manager/db/connect')
const router=require('../task-manager/routes/routes')

app.listen(port, console.log("Listening on port " + port));

app.use('/task', router)

//app.use('/task-manager/tasks', router)








//console.log(__filename)