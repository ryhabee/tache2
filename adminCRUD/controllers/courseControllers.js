const courseService = require("../services/courseServices");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await courseService.getAllCourses();
    res.status(200).json(courses);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.getCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await courseService.getCourse(courseId);
    res.status(200).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.createCourse = async (req, res) => {
  try {
    const courseData = req.body;
    const createdCourse = await courseService.createCourse(courseData);
    res.status(201).json(createdCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const courseData = req.body;
    const updatedCourse = await courseService.updateCourse(courseId, courseData);
    res.status(200).json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const deletedCourse = await courseService.deleteCourse(courseId);
    res.status(200).json(deletedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.uploadCoursePhoto = async (req, res) => {
  try {
    const courseId = req.params.id;
    const uploadedFile = req.file;
    const updatedCourse = await courseService.uploadCoursePhoto(courseId, uploadedFile);
    res.status(200).json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
