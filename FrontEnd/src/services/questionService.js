import  questionApi  from './apiQuestion'

export default {
    creatQuestion(question){
        return questionApi().post('/addQuestion',question)
        // return Api().
    }

}