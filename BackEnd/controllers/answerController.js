const db = require('../models');

const Answer = db.answers;
const Question = db.questions;


// 1. Create Answer
const createAnswer = async (req, res) => {
    try {
        const { answerID,questionID,correctAnswer} = req.body;
    
        // Kiểm tra xem QuestionID có hợp lệ và tồn tại trong bảng Question không
        const question = await Question.findByPk(questionID);
        if (!question) {
          return res.status(400).send('Invalid or non-existent questionID.');
        }
    
        const info = {
          answerID,
          questionID,
          correctAnswer
        };
    
        const ans = await Answer.create(info);
        res.status(200).send(ans);
        console.log(ans);
      } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while creating the ans.');
      }
};

// 2.Update Answer
const updateAnswer = async (req, res) => {
  
    try {
      const id = req.params.id;
      const [updatedCount] = await Answer.update(req.body, { where: { AnswerID: id } });
  
      if (updatedCount === 0) {
        console.log(`Answer with ID ${id} does not exist.`);
        return res.status(404).send(`Answer with ID ${id} does not exist.`);
      }
  
      res.status(200).send(`Answer with ID ${id} is updated`);
    } catch (error) {
      console.log(error);
      res.status(500).send('An error occurred while updating the answer.');
    }
}


module.exports = {
    createAnswer,
    updateAnswer,
    
}