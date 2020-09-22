const mongoose = require('mongoose');

//          connect to production(Heroku) or connect to local dev
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/FoodCount-app'

mongoose.connect(uri, 
{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    //we're connected!
    console.log("Mongoose online")
});