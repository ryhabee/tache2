const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const cors=require("cors") ; 
const courseRoutes = require('./routes/courseRouters'); // Your routes file

const app = express();

// Middleware for handling JSON data

app.use(express.json());
app.use(cors());



// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/coursesDB') 
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));



// Multer setup for handling image uploads (configure as needed)
const upload = multer({ dest: 'uploads/' });

// Routes for courses
app.use('/api/courses', courseRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
