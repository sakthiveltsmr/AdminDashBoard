import "./App.css";
import Home from "./Component/pages/home";
import SideBar from "./Component/Sidebar";
import Top from "./Component/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userlist from "./Component/pages/userList";
import User from "./Component/pages/User";
import NewUser from "./Component/pages/newpage";
import Productlist from "./Component/pages/productlist";
import Product from "./Component/pages/product";
import NewProduct from "./Component/pages/newproduct";

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
          <Route path="/products" element={<Productlist />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
