import Home from "../pages/Home";
import LoginPage from "../pages/Login/Login";
import DetailUser from "../pages/Account/Detail";
import NotFound from "../pages/NotFound/notfound";
import CreateQuestion from "../pages/Question/CreateQuestion";
import EditCourse from "../pages/Course/Edit";
import DataTable from "../components/Table/dataTable";
import CreateCourse from "../pages/Course/Create";
import CreateUser from "../pages/User/CreateUser";
import CreateChapter from "../pages/Chapter/CreateChapter";
import CreateSection from "../pages/Section/CreateSection";
import CreateExam from "../pages/Exam/CreateExam";
import Exam from "../pages/Exam/Exam";

const publicRoute =[
    {path: '/', component: Home},
    {path: '/login', component: LoginPage, layout: null},
    // Exam route
    {path: '/exams', component: DataTable},
    {path: '/create-exam', component: CreateExam},
    {path: '/exam/:id', component: Exam},
    // Course route
    {path: '/courses', component: DataTable},
    {path: '/create-course', component: CreateCourse},
    // Chapter route
    {path: '/course/:id/chapters', component: DataTable},
    {path: '/create-chapter', component: CreateChapter},
    // Section route
    {path: '/course/chapter/:id/sections', component: DataTable},
    {path: '/create-section', component: CreateSection},
    // Question route
    {path: '/questions', component: DataTable},
    {path: '/create-question', component: CreateQuestion},
    {path: '/account', component: DetailUser},
    // User route
    {path: '/users', component: DataTable},
    {path: '/create-user', component: CreateUser},

    {path: '*', component: NotFound},
]

const privateRoute = [
];

export {publicRoute, privateRoute}