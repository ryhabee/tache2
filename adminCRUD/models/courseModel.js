const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  price: Number,
  imageUrl: String,
});

 

module.exports =mongoose.model('course', courseSchema);
