// routes/courseRoutes.js
const express = require('express');
const multer = require('multer');
const Course = require('../models/Course');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// Create
router.post('/courses', upload.single('image'), async (req, res) => {
  const { title, price } = req.body;
  const image = req.file?.path;
  const course = new Course({ title, price, image });
  await course.save();
  res.status(201).json(course);
});

// Read
router.get('/courses', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Update
router.put('/courses/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { title, price } = req.body;
  const image = req.file?.path;
  const updatedCourse = await Course.findByIdAndUpdate(
    id,
    { title, price, image },
    { new: true }
  );
  res.json(updatedCourse);
});

// Delete
router.delete('/courses/:id', async (req, res) => {
  const { id } = req.params;
  await Course.findByIdAndDelete(id);
  res.status(204).send();
});

module.exports = router;
