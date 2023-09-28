require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

// local imports
const connectDb = require('./db.js');
const employeeRoutes = require('./controllers/employee.controller.js');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/api/employees', employeeRoutes);



connectDb()
.then(() => {
    console.log('db connection succeeded');
    app.listen(process.env.PORT, ()=> console.log('Server started at ' + process.env.PORT));
})
.catch(err => console.log(err));