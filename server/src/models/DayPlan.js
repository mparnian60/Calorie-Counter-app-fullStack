const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref : 'User'
    },
    date: {
        type: Date,
        required: true
    },
    meal: {
        breakfast:[{foodId: Number}],
        lunch: [{foodId: Number}],
        dinner: [{foodId: Number}],
        snack: [{foodId: Number}]
    }
})

module.exports = mongoose.model('MealDetails', schema);