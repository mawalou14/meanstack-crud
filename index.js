
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

// local imports
const connectDb = require('./db.js');
const employeeRoutes = require('./controllers/employee.controller.js');
const { errorHandler } = require('./midlewares')

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use('/api/employees', employeeRoutes);
app.use(errorHandler);


connectDb()
.then(() => {
    console.log('db connection succeeded');
    app.listen(3000, ()=> console.log('Server started at ' + 3000));
})
.catch(err => console.log(err));