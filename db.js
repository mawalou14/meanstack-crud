
const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://admin:1234@cluster0.udmhdwn.mongodb.net/employee_db?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUrl,
        { useNewUrlParser: true, useUnifiedTopology: true } );
}