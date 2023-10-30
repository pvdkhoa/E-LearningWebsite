import Api from './api'

export default {
    getAllExams () {
      return Api().get('getAllExams')
    },
    createExam (exam) {
        return Api().post('addExam',exam)
    },
    getExam(examID) {
      return Api().get(`getExam/${examID}`);
    },
    deleteExam(examID){
      return Api().delete(`deleteExam/${examID}`)
    },
    // updateExam(examID){
    //   return Api().put(`updateExam/${examID}`)
    // }
    updateExam(examID, updatedExamData) {
      return Api().patch(`updateExam/${examID}`, updatedExamData);
    }

}