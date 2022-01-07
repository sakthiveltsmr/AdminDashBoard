import "./App.css";
import Home from "./Component/pages/home";
import SideBar from "./Component/Sidebar";
import Top from "./Component/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userlist from "./Component/pages/userList";
import User from "./Component/pages/User";
import NewUser from "./Component/pages/newpage";

function App() {
  return (
    <Router>
      <Top />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<Userlist />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newuser" element={<NewUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
