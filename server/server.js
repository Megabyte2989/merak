const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()
const dotenv = require('dotenv')

app.use(cors())
dotenv.config()

const PORT = process.env.PORT;


const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})

db.connect((err) => {
    if (err) {
        console.log(`Error connecting to the database ${err}`)
        return
    }
    console.log('Connected to the database')
})


app.get('/api/test', (req, res) => {
    // Query for categories table
    db.query('SELECT * FROM categories', (err, categoriesResults) => {
        if (err) {
            return res.status(500).send({ message: "Error Querying categories table", err });
        }

        // Query for sectors table
        db.query('SELECT * FROM sectors', (err, sectorsResults) => {
            if (err) {
                return res.status(500).send({ message: "Error Querying sectors table", err });
            }

            // Query for additional_category_details table
            db.query('SELECT * FROM additional_category_details', (err, additionalCategoryDetailsResults) => {
                if (err) {
                    return res.status(500).send({ message: "Error Querying additional_category_details table", err });
                }

                // Query for courses table
                db.query('SELECT * FROM courses', (err, coursesResults) => {
                    if (err) {
                        return res.status(500).send({ message: "Error Querying courses table", err });
                    }

                    // Send all results in a single response
                    res.json({
                        categories: categoriesResults,
                        sectors: sectorsResults,
                        additional_category_details: additionalCategoryDetailsResults,
                        courses: coursesResults
                    });
                });
            });
        });
    });
});




app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})