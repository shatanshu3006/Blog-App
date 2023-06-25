import { useContext } from "react";
import "./TopBar.css"
import { Context } from "../../context/Context";

export default function Topbar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const handleLogout = () => {
    dispatch({type:"LOGOUT"});
  }
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <a href="/" className="link">HOME</a>
            </li>
            {/* <li className="topListItem"><a href="/about" className="link">ABOUT</a></li>
            <li className="topListItem"><a href="/contect" className="link">CONTECT</a></li> */}
            <li className="topListItem"><a href="/write" className="link">WRITE</a></li>
            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
        </ul>
      </div>
      <div className="topRight">
        
        {
        user ?
        <a className="link" href="/settings"><img className="topImg" src={PF+user.profilePic} alt="" /> </a> :
         <ul className="topList">
          <li className="topListItem"><a href="/login" className="link">LOGIN</a></li>
          <li className="topListItem"><a href="/register" className="link">REGISTER</a></li>
         </ul>
        }
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
