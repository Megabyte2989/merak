const express = require('express');
const router = express.Router();
const Category = require('../models/categories'); // Import Sequelize model

router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.findAll({
            attributes: ['id', 'name', 'introduction', 'photo'],
        });
        res.json(categories);
    } catch (error) {
        console.error("Error fetching categories from DB", error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
