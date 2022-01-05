import "./App.css";
import Home from "./Component/pages/home";
import SideBar from "./Component/Sidebar";
import Top from "./Component/Topbar";

function App() {
  return (
    <div className="App">
      <Top />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
