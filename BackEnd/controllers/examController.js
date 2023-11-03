const db = require('../models');

const Exam = db.exams;

// 1. Create product
const createExam = async (req, res) => {
  try {
    let info = {
      examID: req.body.examID,
      title: req.body.title,
      duration: req.body.duration,
      numberQuestion: req.body.numberQuestion,
      examStatus: req.body.examStatus
    };

    const exam = await Exam.create(info);
    res.status(200).send(exam);
    console.log(exam);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while creating the exam.');
  }
};

// 2. Get all exam
const getAllExams = async (req, res) => {
  let exams = await Exam.findAll({});
  res.send(exams);
}

const updateExam = async (req, res) => {
  
  try {
    const id = req.params.id;
    const [updatedCount] = await Exam.update(req.body, { where: { examID: id } });

    if (updatedCount === 0) {
      console.log(`Exam with ID ${id} does not exist.`);
      return res.status(404).send(`Exam with ID ${id} does not exist.`);
    }

    res.status(200).send(`Exam with ID ${id} is updated`);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred while updating the exam.');
  }
}

//5. Delete product
const deleteExam = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedCount = await Exam.destroy({ where: { examID: id } });

    if (deletedCount === 0) {
      console.log(`Exam with ID ${id} does not exist.`);
      return res.status(404).send(`Exam with ID ${id} does not exist.`);
    }

    res.status(200).send('Exam is deleted');
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred while deleting the exam.');
  }

}

const getOneExam = async (req, res) => {
  let id = req.params.id
  let exam = await Exam.findOne({ where: { examID: id } });
  res.status(200).send(exam);
}


module.exports = {
  createExam,
  getAllExams,
  updateExam,
  deleteExam,
  getOneExam
}