import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingsTitle">
          {/*span.updateTitle -----shortcut*/}
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete your Account</span>

        </div>
        <form action="" className="settingsForm">

          <label>Profile Picture</label>
          <div className="settingsPP">

            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
             
             <br></br>

            <lable htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-user"></i>
            </lable>
            <input type="file"  id="fileInput" style={{display:"none"}}/>
            
          </div>


          
          <lable>User name</lable>
          <input type="text" placeholder="Sachini" />
          <lable>Email</lable>
          <input type="text" placeholder="sachini@gmail.com" />
          <lable>Password</lable>
          <input type="password" placeholder="password" />
          <button className="settingsButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
