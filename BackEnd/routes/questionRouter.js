const questionController = require('../controllers/questionController');
const router = require('express').Router()

router.post('/addQuestion',questionController.createQuestion);

router.get('/getAllQuestions',questionController.getAllQuestions);

router.patch('/updateQuestion/:id',questionController.updateQuestion);

router.delete('/deleteQuestion/:id',questionController.deleteQuestion);

module.exports = router