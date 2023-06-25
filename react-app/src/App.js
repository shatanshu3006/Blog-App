import { useContext } from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <>
    <Topbar/>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/settings" element={!user ?<Register/> :<Settings/>}/>
        <Route exact path="/register" element={user ? <Home/> : <Register/>}/>
        <Route exact path="/login" element={user ? <Home/> : <Login/>}/>
        <Route exact path="/write" element={!user ? <Register/> : <Write/>}/>
        <Route exact path="/post/:postId" element={<Single/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
