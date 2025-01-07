const express = require('express');
const router = express.Router();
const Courses = require('../models/courses'); // Import Sequelize model
const Sector = require('../models/sectors');

router.get('/courses', async (req, res) => {
    try {
        const courses = await Courses.findAll({
            include :[{
                model : Sector,
            }]
        });
        res.json(courses);
    } catch (error) {
        console.error("Error fetching courses from DB", error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
