import { Link, Outlet, Route, Routes } from 'react-router-dom';
import MyNavbar from '../../components/Navbar/Navbar';
import './Article.css'
import { Button } from 'react-bootstrap';
function Article(){
return(
    <div className='Articlecontainer'>
    <MyNavbar/>
    <h1> صفحه مقالات</h1>
    <hr/>
    <Button variant="outline-info" className='mx-2'><Link to={'php'} className={'nav-link'}>php article</Link></Button>
    <Button variant="outline-warning" className='mx-2'><Link to={'js'} className={'nav-link'}>js article</Link></Button>
    <Button variant="outline-primary" className='mx-2'><Link to={'react'} className={'nav-link'}>react article</Link></Button>
    <hr/>
    <Outlet/>
    </div>
   
)
}
export default Article