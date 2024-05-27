import { useState } from 'react';
import MyNavbar from '../../components/Navbar/Navbar';
import './Login.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
function Login(){
   const [username,setUsername]=useState('')
   const [password,setPassword]=useState('')
   const navigate=useNavigate()
   const loginHandler=()=>{
    if(username=='admin'&& password=='12345'){
        document.cookie = "username=admin ; expires=Thu, 18 Dec 3013 12:00:00 UTC; path=/";
     navigate('/panel')
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "username یا password را اشتباه وارد کردید",
          });
    }
   }
return(
    <>
    <MyNavbar/>
    <div class="login-page">
  <div class="form">
    <form class="login-form">
      <input onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="username"/>
      <input onChange={(e)=>{setPassword(e.target.value)}}  type="password" placeholder="password"/>
      <button type='button' onClick={loginHandler}>login</button>
    </form>
  </div>
</div>
    </>
)
}
export default Login