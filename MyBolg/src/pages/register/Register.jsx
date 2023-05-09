import './register.css'
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Login() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form  className="registerForm">
            <label>User Name</label>
            <input type="text" placeholder='Enter your Username'/>
            <label>Email</label>
            <input type="text" placeholder='Enter your Email'/>
            <label>Password</label>
            <input type="password" placeholder='Enter your Password'/>
            <button className="registerButton">register</button>
        </form>
        <button className="registerLoginButton"><Link to ="/login"  style={{textDecoration:"none", color:"inherit" }}>Login</Link></button>
    </div>
  )
}

