const express = require('express');
const router = express.Router();
const Sector = require('../models/sectors')
const Category = require('../models/categories')

router.get('/sectors', async (req, res) => {
    try {
        const sectors = await Sector.findAll(
            {attributes:['id','name','category_id'],
        include:[
            {
                model:Category,
                attributes:['name']
            }
        ]}
        )
        res.json(sectors);
    } catch (error) {
        console.error("Error fetching categories from DB", error);
        res.status(500).send('Server Error',error.message);
    }
});

module.exports = router;
