const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    startWeight:{
        type: Number,
    },
    currentWeight:{
        type: Number,
    }
})

module.exports = mongoose.model('User', schema);