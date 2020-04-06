const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tips = new Schema({
    tip: [{
        type: String,
        trim: true
    }]
});

const WorkoutTips = new Schema({
    userId: {}
})

const Tips = mongoose.model('tips', tips);

module.exports = Tips;
