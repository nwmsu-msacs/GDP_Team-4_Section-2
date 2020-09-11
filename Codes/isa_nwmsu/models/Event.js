const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    eventname: {
        type: String,
        length: 100,
        required: true

    },
    eventdate: {
        type: String,

        required: true

    },
    eventvenue: {
        type: String,
        length: 100,
        required: true

    },

    timings: {
        type: String,
        required: true
    },

    description: {
        type: String,
        length: 250,
        required: true

    }



});

module.exports = Event = mongoose.model("events", EventSchema);