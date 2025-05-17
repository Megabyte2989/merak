const express = require('express');
const router = express.Router();
const Sector = require('../models/sectors')
const Category = require('../models/categories')

router.get('/sectors', async (req, res) => {
    try {
        const sectors = await Sector.find({}, 'id name category_id')
        res.json(sectors);
    } catch (error) {
        console.error("Error fetching sectors from DB", error);
        res.status(500).send({ message: 'Server Error', error: error.message });
    }
});

module.exports = router;
