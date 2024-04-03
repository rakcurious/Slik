import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { getCurrentSession } from "./appwrite/auth";
import { useEffect } from "react";


function App() {
  
  useEffect(()=> {
    getCurrentSession()
  }, [])
  
  return (
    <>
      <div className="h-full min-h-screen w-screen p-0 bg-gradient-to-br from-purple-100 to-indigo-100">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
