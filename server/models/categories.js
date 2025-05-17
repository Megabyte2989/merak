const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    introduction: {
        type: String,
    },
    photo: {
        type: String,
    },
    additional_details: {
        type: Object,
        default: {}, // Default to an empty object if no additional details are provided
    },
});

module.exports = mongoose.model('Category', categorySchema);