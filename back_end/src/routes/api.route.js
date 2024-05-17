const express = require("express");
const UserController = require("../controllers/userController");
const CourseController = require("../controllers/courseController");
const adminRoutes = require("./admin.route");
const authRoutes = require("./auth.route");
const ExamController = require("../controllers/examController");
const QuestionController = require("../controllers/questionController");
const AdminController = require("../controllers/adminController");
const ChapterController = require("../controllers/chapterController");
const SectionController = require("../controllers/sectionController");
const LevelController = require("../controllers/levelController");

let router = express.Router();

// Get data
router.get('/users', UserController.getDataToTable);

router.get('/courses', CourseController.getDataToTable);

router.get('/list-chapters/:course_id', ChapterController.getChapterListByCourse);

router.get('/list-sections/:chapter_id', SectionController.getSectionListByChapter);

router.get('/exams', ExamController.getDataToTable);

router.get('/questions', QuestionController.getDataToTable);

router.get('/levels', LevelController.getDataToTable);

// Post data
router.post('/create-user', UserController.addDataToTable);

router.post('/create-course', CourseController.addDataToTable);

router.post('/create-chapter', ChapterController.addDataToTable);

router.post('/create-section', SectionController.addDataToTable);

router.post('/create-question', QuestionController.addDataToTable);

router.post('/create-answer', QuestionController.addAnswerToTable);

router.post('/create-exam', ExamController.createExam);

router.post('/questions-exam', ExamController.getQuestionsToCreateExam);

router.post('/mix-exam', ExamController.mixExam);

router.post('/user-token', UserController.getDataByName);

// Get data to edit with all table
router.get('/exam/:id', ExamController.getDataById);

router.get('/exam-questions/:id', ExamController.getQuestionsByExamId);

router.get('/:table/:id', AdminController.getDataToEdit);

router.get('/question/:id/answers', QuestionController.getAnswerFromQuestion);

// Put data to update with all table
router.put('/:table/:id/update', AdminController.updateData);

router.use('/admin', adminRoutes);

router.use('/auth', authRoutes);

module.exports = router;
