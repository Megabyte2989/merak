const mongoose = require('mongoose');

const sectorSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Sector', sectorSchema);