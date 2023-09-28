require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

// local imports
const connectDb = require('./db.js');

const app = express();
app.use(bodyParser.json());


connectDb()
.then(() => {
    console.log('db connection succeeded');
    app.listen(process.env.PORT, ()=> console.log('Server started at ' + process.env.PORT));
})
.catch(err => console.log(err));