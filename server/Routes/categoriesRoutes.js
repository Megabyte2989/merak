const express = require('express');
const router = express.Router();
const Category = require('../models/categories')
const Sector = require('../models/sectors')

router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.findAll({
            attributes: ['id', 'name', 'introduction', 'photo'], // Category fields
            include: [
                {
                    model: Sector, // Include the Sector model
                    as: 'sectors', // Alias defined in the association
                    attributes: ['id', 'name'], // Sector fields
                },
            ],
        });
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories with sectors from DB', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
