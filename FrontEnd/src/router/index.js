import {createRouter, createWebHistory} from 'vue-router'
import ExamPage from '../views/Admin/ExamPage.vue'
import MainPage from '../views/User/MainPage.vue'
import QuestionPage from '../views/Admin/QuestionPage.vue'


const routes = [
    {
        path: '',
        redirect: '/exam', // Redirect the empty path to '/Home'
    },
    {
        path: '/Home',
        name: 'HomePage',
        component: MainPage,
    },
    {
        path: '/exam',
        name: 'ExamPage',
        component: ExamPage,
    },
    {
        path: '/exam/:id',
        name: 'QuestionPage',
        component: QuestionPage

    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
