// models/Course.js
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String, // Store image URL
});

module.exports = mongoose.model('Course', CourseSchema);
