const express = require('express');
const router = express.Router();
const Category = require('../models/categories')

router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find({}, '_id name introduction photo') // Select fields

        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories with sectors from DB', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;    
