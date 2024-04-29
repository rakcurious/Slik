import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import {
  fetchAllDocuments,
  fetchCollections,
  getCurrentSession,
} from "./index";
function App() {
  useEffect(() => {
    fetchCollections();
    getCurrentSession();
    fetchAllDocuments();
  }, []);

  return (
    <>
      <div className="h-full font-main min-h-screen w-screen p-0 bg-gradient-to-b from-purple-100 to-indigo-100 ">
        <Outlet />
      </div>
    </>
  );
}

export default App;
