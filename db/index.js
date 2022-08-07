const mongoose = require('mongoose');

let MONGODB_PROD = "mongodb+srv://vincem46:gorillazapi@cluster0.hatstmh.mongodb.net/gorillazDatabase"
let MONGODB_URI = MONGODB_PROD || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gorillazDatabase'

mongoose.connect( MONGODB_URI, {
    useUnifiedTopology: true, useNewUrlParser: true
}).then(()=> {
    console.log('successfully connected to MongoDB');
}).catch(e => {
    console.error('connection error', e.message)
})
mongoose.set('debug', true)

const db = mongoose.connection;

module.exports = db