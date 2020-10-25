const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true

    },
    answer: {
        type: String,
        required: true

    }
});

module.exports = FAQ = mongoose.model("faq", FAQSchema);
