import "./sidebar.css"

export default function Sidebar() {
  const PF = "http://localhost:5000/images/"
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">
            About Me
        </span>
        <img src={PF+"deepak.png"} alt="myimage" />
        <p>
            Hey, Welcome to my Blog Application. I'm Deepak Yadav, currently pursuing B.Tech from NIT Raipur in CSE branch. I am a front-end developer and have good knowledge about MERN stack. 
            Also, I have learned C++ language and Data Structure and Algorithm.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">
            Follow Us
        </span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}
