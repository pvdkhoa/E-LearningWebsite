import { defineStore, acceptHMRUpdate } from 'pinia'
import questionService from '../services/questionService';



export const useQuestionStore = defineStore('questionStore', {
  state: () => ({
    questions: [],
    choosedQuestion:[],
    validateQuestion:[],
  }),
  getters: {
    totalQuestions() {
      return this.questions.length;
    },

  },
  actions: {
    async addQuestion(examID,question){
      this.questions.push(question)
      try {
        
        const response = await questionService.creatQuestion(examID,question);
        console.log(question)
        console.log("Question created: ", response.data);
      } catch (err) {
        console.log("Error to create: ", err);
      }
    },
    async getQuestionInExam(examID){
      try{
        const response =await questionService.getQuestionInExam(examID);
        this.questions = response.data;
        console.log("Hello haslili",this.questions)
        console.log("GET data successful: ", response.data);
      }catch(error){
        console.log("GET data failed: ", error);
      }
    },
    async getLimitQuest(examID){
      try{
        const response = await questionService.getLimitQuest(examID);
        this.validateQuestion = response.data;
        console.log("GET data successful: ", response.data);
      }catch(error){
        console.log("GET data failed: ", error);
      }
    },
    filteredQuestion(examID) {
      const numExamID = Number(examID)
      console.log(numExamID)
      return this.questions.filter(question => question.examID === numExamID);
    },
    randomQuestionID() {
      const now = new Date();
      const seconds = now.getSeconds();
      const miliseconds = now.getMilliseconds();
      const formattedTime = `${String(seconds).padStart(2, "0")}${String(
        miliseconds
      ).padStart(4, "0")}`;
      const randomID = Number(formattedTime);
      return randomID;
    },
    randomAnswerID() {
      const now = new Date();
      const seconds = now.getSeconds();
      const miliseconds = now.getMilliseconds();
      const formattedTime = `${String(seconds).padStart(2, "0")}${String(
        miliseconds
      ).padStart(4, "0")}`;
      const randomID = Number(formattedTime) - Math.floor(Math.random() * (1773));
      return randomID;
    },
  }
})


