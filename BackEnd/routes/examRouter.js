const examController = require('../controllers/examController');
const router = require('express').Router()

router.post('/addExam',examController.createExam);

router.get('/getAllExams',examController.getAllExams);

router.patch('/updateExam/:id',examController.updateExam);

router.delete('/deleteExam/:examID',examController.deleteExam);

module.exports = router