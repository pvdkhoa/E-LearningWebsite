const answerController = require('../controllers/answerController');
const router = require('express').Router()

router.post('/addAnswer',answerController.createAnswer);

router.patch('/updateAnswer/:id',answerController.updateAnswer);

module.exports = router