// import React from 'react'
import "./topBar.css";
import {
   BrowserRouter ,
   Routes,
   Route,
   Link
} from "react-router-dom";

export default function TopBar() {


const user = false;

  return (
    
    <div className='top'>
          <div className='topLeft'>
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
          </div>

          <div className='topCenter'>
             <ul className="topList">
                <li className="topListItem"><Link to ="/"  style={{textDecoration:"none", color:"inherit" }}>HOME</Link></li>
                <li className="topListItem"><Link to ="/"  style={{textDecoration:"none", color:"inherit" }}>ABOUT</Link> </li>
                <li className="topListItem"><Link to ="/"  style={{textDecoration:"none", color:"inherit" }} >CONTACT</Link> </li>
                <li className="topListItem"><Link to ="/"  style={{textDecoration:"none", color:"inherit" }}>WRITE</Link></li>
                <li className="topListItem">{user && "LOGOUT"}</li>
             </ul>
          </div>
          <div className='topRight'>

             {
             user? (<img className="topImg" src="https://funkylife.in/wp-content/uploads/2022/09/girl-dp-image-217.jpg" alt=""/>):(
                                                                                                                                    <>
                                                                                                                                    <ul className="topList">
                                                                                                                                    <li className="topListItem"><Link to ="/login"  style={{textDecoration:"none", color:"inherit" }}>Login</Link></li>
                                                                                                                                    <li className="topListItem"> <Link to ="/register"  style={{textDecoration:"none", color:"inherit" }}>Register</Link></li>
                                                                                                                                    </ul>
                                                                                                                                    </>
                                                                                                                                    )}

             
                 <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
             
          </div>
      </div>
      
      
  )
}

