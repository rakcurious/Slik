import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Men from "./components/Men";
import Women from "./components/Women";
import Profile from "./components/Profile";
import { Outlet } from "react-router-dom";


function App() {
  
  return (
    <>
      <div className="h-full w-screen p-0 bg-gradient-to-br from-purple-100 to-indigo-100">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
