const db = require('../models');
const { QueryTypes } = require('sequelize');

const Question = db.questions;
const Exam = db.exams;
const Answer = db.answers;

// 1. Create question
const createQuestion = async (req, res) => {
    try {
        const { questionID, option1, option2, option3, option4, attach, examID,questionText,answerID,correctAnswer } = req.body;
    
        // Kiểm tra xem examID có hợp lệ và tồn tại trong bảng Exam không
        const exam = await Exam.findByPk(examID);
        if (!exam) {
          return res.status(400).send('Invalid or non-existent examID.');
        }
    
        const dataQuest = {
          questionID,
          examID,
          questionText,
          option1,
          option2,
          option3,
          option4,
          attach
        };
        const dataAns = {
          answerID,
          questionID,
          examID,
          correctAnswer
        }
        
        // Chặn việc question tạo mà answer trống ko đc tạo.
        if(dataQuest.questionID === null ||  dataQuest.examID === null || dataAns.answerID === null || dataAns.questionID === null || dataAns.examID === null || dataAns.correctAnswer === null){
          console.log(`Fetching Data error.`);
          return res.status(404).send(`Cannot created with ID ${questionID}.`);
        }

        const question = await Question.create(dataQuest);
        const answer = await Answer.create(dataAns);

        res.status(200).json({ question, answer });
        console.log(question);
        console.log(answer);
      } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while creating the question.');
      }
};


// 4. Get Questions in Exam
const getQuestionsInExam = async(req,res) => {
  try {
    const examID = req.params.examID;
    const query = `
      SELECT questions.questionID, answers.answerID, examID, option1, option2, option3, option4, correctAnswer
      FROM questions
      LEFT JOIN answers ON questions.questionID = answers.questionID
      WHERE examID = :examID
      ORDER BY questions.questionID
    `;
    const questions = await db.sequelize.query(query, {
      replacements: { examID: examID },
      type: QueryTypes.SELECT
    });
    res.status(200).json(questions);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}


// 3. Delete question - vì question và answer ràng buộc nên phải đồng thời xóa.
const deleteQuestion = async (req, res) => {
    try {
      const questionID = req.params.questID;
      const deletedAnswer = await Answer.destroy({where: {questionID:questionID}});
      const deletedQuestion = await Question.destroy({ where: { questionID:questionID } });
      
      if (deletedAnswer === 0 || deletedQuestion === 0) {
        console.log(`Question with ID ${questionID} does not exist.`);
        return res.status(404).send(`Question with ID ${questionID} does not exist.`);
      }
  
      res.status(200).send('Question is deleted');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while deleting the question.');
    }
};

// 4. Update question + answer

const updateQuestion = async (req,res) => {
    try {
        const id = req.params.questID;
        const [updatedQuestion] = await Question.update(req.body, { where: { questionID: id } });
        const [updatedAnswer] = await Answer.update(req.body,{where:{questionID: id}});
        if (updatedQuestion === 0 && updatedAnswer === 0) {
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
      deleteQuestion,
      updateQuestion,
      getQuestionsInExam
  }