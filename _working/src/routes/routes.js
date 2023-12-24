import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import News from "../layout/News";
// import Home from "../pages/home/home/Home";
import Category from "../pages/home/category/Category";
import NewsPage from "../pages/news/newspage/NewsPage";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/login/login/Login";
import Register from "../pages/login/register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/shared/terms/Terms";

const router = createBrowserRouter([
   {
      path: '/',
      element: <LoginLayout></LoginLayout>,
      children: [
         {
            path: '/',
            element: <Navigate to='/category/0'></Navigate>,
         },
         {
            path: 'login',
            element: <Login></Login>,
         },
         {
            path: 'register',
            element: <Register></Register>
         },
         {
            path: 'terms',
            element: <Terms></Terms>
         }
      ]
   },
   {
      path: 'category',
      element: <Main></Main>,
      children: [
         {
            path: ':id',
            element: <Category></Category>,
            loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
         }
      ]
   },
   {
      path: 'news',
      element: <News></News>,
      children: [
         {
            path: ':id',
            element: <PrivateRoute><NewsPage></NewsPage></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)

         }
      ]
   }
])

export default router;