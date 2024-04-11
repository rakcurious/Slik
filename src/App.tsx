import Navbar from "./components/Navbar";
import { Outlet} from "react-router-dom";
import { getCurrentSession } from "./appwrite/auth";
import { useEffect } from "react";
import { fetchAllDocuments } from "./appwrite/config";;


function App() {

  
  useEffect(()=> {
    getCurrentSession();
    fetchAllDocuments();
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
