import { defineStore, acceptHMRUpdate } from 'pinia'
import questionService from '../services/questionService';


export const useQuestionStore = defineStore('questionStore', {
  state: () => ({
    questions: [],
    choosedQuestion:[],
  }),
  getters: {
    totalQuestions() {
      return this.questions.length;
    },

  },
  actions: {
    async addQuestion(question){
      this.questions.push(question)
      try {
        const response = await questionService.creatQuestion(question);
        console.log(question)
        console.log("Question created: ", response.data);
      } catch (err) {
        console.log("Error to create: ", err);
      }
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


