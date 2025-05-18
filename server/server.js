const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const categoriesRoutes = require('./Routes/categoriesRoutes')
const sectorRoutes= require('./Routes/sectorsRoutes')
const coursesRoutes = require('./Routes/coursesRoutes')
const connectDB = require('./Database/db')

app.use(cors())
app.use(express.json()); 
dotenv.config()

const allowedOrigins = ['https://merak.mayaryouness.tech'];

app.use(cors({
  origin: allowedOrigins,
}));

const PORT = process.env.PORT;

connectDB();


app.use('/api',categoriesRoutes)
app.use('/api',sectorRoutes)
app.use('/api',coursesRoutes)

app.get('/',(req,res)=>{
    res.send('hello world')
})

// app.get('/api/test', (req, res) => {
//     // Query for categories table
//     db.query('SELECT * FROM categories', (err, categoriesResults) => {
//         if (err) {
//             return res.status(500).send({ message: "Error Querying categories table", err });
//         }

//         // Query for sectors table
//         db.query('SELECT * FROM sectors', (err, sectorsResults) => {
//             if (err) {
//                 return res.status(500).send({ message: "Error Querying sectors table", err });
//             }

//             // Query for additional_category_details table
//             db.query('SELECT * FROM additional_category_details', (err, additionalCategoryDetailsResults) => {
//                 if (err) {
//                     return res.status(500).send({ message: "Error Querying additional_category_details table", err });
//                 }

//                 // Query for courses table
//                 db.query('SELECT * FROM courses', (err, coursesResults) => {
//                     if (err) {
//                         return res.status(500).send({ message: "Error Querying courses table", err });
//                     }

//                     // Send all results in a single response
//                     res.json({
//                         categories: categoriesResults,
//                         sectors: sectorsResults,
//                         additional_category_details: additionalCategoryDetailsResults,
//                         courses: coursesResults
//                     });
//                 });
//             });
//         });
//     });
// });




app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})