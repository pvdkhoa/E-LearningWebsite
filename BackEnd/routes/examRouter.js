const examController = require('../controllers/examController');
const router = require('express').Router()

router.post('/addExam',examController.createExam);

router.get('/getAllExams',examController.getAllExams);

router.get('/getExam/:examID',examController.getExam);

router.patch('/updateExam/:id',examController.updateExam);

router.delete('/deleteExam/:examID',examController.deleteExam);

module.exports = router