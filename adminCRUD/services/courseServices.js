const Course = require('../models/courseModel');
const fs = require('fs');
const path = require('path');

exports.getAllCourses = async () => {
  return await Course.find();
}

exports.getCourse = async (id) => {
  return await Course.findById(id);
}

exports.createCourse = async (course) => {
  return await Course.create(course);
}

exports.updateCourse = async (id, course) => {
  return await Course.findByIdAndUpdate(id, course, { new: true, runValidators: true });
}

exports.deleteCourse = async (id) => {
  return await Course.findByIdAndDelete(id);
}

exports.uploadCoursePhoto = async (id, file) => {
  try {
    const course = await Course.findById(id);
    if (!course) {
      throw new Error('Course not found');
    }

    const storagePath = 'uploads/'; 
    const filePath = path.join(storagePath, file.filename);

    // Move the file to the desired location (e.g., using fs module)
    fs.renameSync(file.path, filePath);

    course.imageUrl = filePath; // Update with URL if storing remotely
    await course.save();

    return course;
 } catch (err) {
    throw new Error(err.message);
 }
}
  
  