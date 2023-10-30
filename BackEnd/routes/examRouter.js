const examController = require('../controllers/examController');
const router = require('express').Router()

router.post('/addExam',examController.createExam);

router.get('/getAllExams',examController.getAllExams);

router.patch('/updateExam/:id',examController.updateExam);

router.delete('/deleteExam/:id',examController.deleteExam);

router.get('/getExam/:id',examController.getOneExam);

module.exports = router