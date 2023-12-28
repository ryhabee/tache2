const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseControllers');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourse);
router.post('/', courseController.createCourse);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);
router.post('/:id/photo', upload.single('file'), courseController.uploadCoursePhoto);

module.exports = router;
