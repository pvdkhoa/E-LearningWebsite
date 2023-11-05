const questionController = require('../controllers/questionController');
const router = require('express').Router()

router.post('/addQuestion/:examID',questionController.createQuestion);

router.patch('/updateQuestion/:questID',questionController.updateQuestion);

router.delete('/deleteQuestion/:questID',questionController.deleteQuestion);

router.get('/getQuestions/:examID',questionController.getQuestionsInExam);

router.get('/checkLimitQuest/:examID',questionController.getLimitQuest)
module.exports = router