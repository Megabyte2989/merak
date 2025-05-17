const express = require('express');
const router = express.Router();
const Courses = require('../models/courses'); // Import Sequelize model
const Sector = require('../models/sectors');

router.get('/courses', async (req, res) => {
    try {
        const courses = await Courses.find({})
            // .populate('sector_id'); // Populate only the name field of the sector
        res.json(courses);
    } catch (error) {
        console.error('Error fetching courses from DB', error);
        res.status(500).send('Server Error');
    }
});
module.exports = router;
