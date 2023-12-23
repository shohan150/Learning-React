import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import News from "../layout/News";
import Home from "../pages/home/home/Home";
import Category from "../pages/home/category/Category";
import NewsPage from "../pages/news/newspage/NewsPage";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/category/:id',
            element: <Category></Category>
         }
      ]
   },
   {
      path: 'news',
      element: <News></News>,
      children: [
         {
            path: ':id',
            element: <NewsPage></NewsPage>
         }
      ]
   }
])

export default router;