const db = require('../models');

const Question = db.questions;
const Exam = db.exams;

// 1. Create question
const createQuestion = async (req, res) => {
    try {
        const { questionID, option1, option2, option3, option4, attach, examID,questionText } = req.body;
    
        // Kiểm tra xem examID có hợp lệ và tồn tại trong bảng Exam không
        const exam = await Exam.findByPk(examID);
        if (!exam) {
          return res.status(400).send('Invalid or non-existent examID.');
        }
    
        const info = {
          questionID,
          examID,
          questionText,
          option1,
          option2,
          option3,
          option4,
          attach
        };
    
        const question = await Question.create(info);
        res.status(200).send(question);
        console.log(question);
      } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while creating the question.');
      }
};


// 2. Get all questions
const getAllQuestions = async(req,res) => {
    let questions = await Question.findAll({});
    res.send(questions);
}

// 3. Delete question
const deleteQuestion = async (req, res) => {
    try {
      const id = req.params.id;
  
      const deletedCount = await Question.destroy({ where: { questionID: id } });
  
      if (deletedCount === 0) {
        console.log(`Question with ID ${id} does not exist.`);
        return res.status(404).send(`Question with ID ${id} does not exist.`);
      }
  
      res.status(200).send('Question is deleted');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while deleting the question.');
    }
  };

// 4. Update question

const updateQuestion = async (req,res) => {
    try {
        const id = req.params.id;
    
        const [updatedCount] = await Question.update(req.body, { where: { questionID: id } });
    
        if (updatedCount === 0) {
          console.log(`Question with ID ${id} does not exist.`);
          return res.status(404).send(`Question with ID ${id} does not exist.`);
        }
    
        res.status(200).send(`Question with ID ${id} is updated`);
      } catch (error) {
        console.log(error);
        res.status(500).send('An error occurred while updating the question.');
      }
  }
  
  
  module.exports = {
      createQuestion,
      getAllQuestions,
      deleteQuestion,
      updateQuestion
  }