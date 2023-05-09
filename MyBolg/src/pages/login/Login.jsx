import './login.css'
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form  className="loginForm">
            <lable>Email</lable>
            <input type="text" placeholder='Enter your Email'/>
            <label>Password</label>
            <input type="password" placeholder='Enter your Password'/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton"><Link to ="/register"  style={{textDecoration:"none", color:"inherit" }}>REGISTER</Link></button>
    </div>
  )
}

