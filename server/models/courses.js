const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    introduction: {
        type: String,
    },
    duration: {
        type: Number,
        default: 0, // Default duration is 0 if not provided
    },
    price: {
        type: Number,
        default: 0, // Default price is 0 if not provided
    },
    sector_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sector', // Reference to the Sector model
        required: true,
    },
    delivery_method: {
        type: String,
        default: '', // Default to an empty string if not provided
    },
    overview: {
        type: String,
    },
    objective: {
        type: String,
    },
    why_attend: {
        type: String,
    },
    prerequisites: {
        type: String,
    },
    certification: {
        type: Boolean,
        default: false, // Default to false if not provided
    },
    agenda: {
        type: String,
    },
});

module.exports = mongoose.model('Course', courseSchema);