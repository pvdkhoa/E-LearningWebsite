const questionController = require('../controllers/questionController');
const router = require('express').Router()

router.post('/addQuestion',questionController.createQuestion);

router.patch('/updateQuestion/:questID',questionController.updateQuestion);

router.delete('/deleteQuestion/:questID',questionController.deleteQuestion);

router.get('/getQuestions/:examID',questionController.getQuestionsInExam);

module.exports = router