require('dotenv').config;
const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUrl,
        { useNewUrlParser: true, useUnifiedTopology: true } );
}