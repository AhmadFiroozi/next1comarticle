import Setting from "./Setting";
import Home from "./page/Home/Home";
import About from "./page/about/About";
import Article from "./page/blog/Article";
import Course from "./page/course/Course";
import Login from "./page/login/Login";
import Panel from "./page/panel/Panel";
import PraivateRouts from './praivateRouts'

const router=[
    { path:'/', element:<Home/>},
    { path:'/about', element:<About/>},
    { path:'/Article/*', element:<Article/> ,
     children:[{path:'php', element:<h2>php article</h2>}, 
     {path:'js', element:<h2>java script article</h2>},
     {path:'react', element:<h2>react article</h2>}]},
    { path:'/course/:courseId', element:<Course/>},
    { path:'/panel', element:<PraivateRouts> <Panel/> </PraivateRouts>},
    { path:'/login', element:  <Login/>  },
    { path:'/Setting', element:<PraivateRouts> <Setting/> </PraivateRouts>}
]
export default router;