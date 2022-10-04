import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue';
import quizstart from '../views/QuizStart.vue';
import quizpage1 from '../views/QuizPage1.vue';
import quizpage2 from '../views/QuizPage2.vue';
import personalPage from '../views/PersonalPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/quizstart',
    name: 'quizstart',
    component: quizstart
  },
  {
    path: '/quizpage1',
    name: 'quizpage1',
    component: quizpage1
  },
  {
    path: '/quizpage2',
    name: 'quizpage2',
    component: quizpage2
  },
  {
    path: '/personalPage',
    name: 'personalPage',
    component: personalPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
