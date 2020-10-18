const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    eventname: {
        type: String,
        length: 100,
        required: true

    },
    eventdate: {
        type: Date,

        required: true

    },
    eventvenue: {
        type: String,
        length: 100,
        required: true

    },

    description: {
        type: String,
        length: 250,
        required: true

    },
    sponsor:{
        type:String,
        required:true,
        default:"Team ISA"
    }

    // eventimage:{
    //     data:Buffer,
    //     contentType:String
    // }



});

module.exports = Event = mongoose.model("events", EventSchema);
