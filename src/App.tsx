import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { createWishlist, fetchAllDocuments, fetchWishlist } from "./appwrite/config";
import { getCurrentSession } from "./appwrite/auth";
import { initializeGoogleAnalytics } from "./utils/analytics";
function App() {
  useEffect(() => {
    initializeGoogleAnalytics();
    
    const sessionAndWishlist = async () => {
      const userdata = await getCurrentSession()
      if(userdata){
       const wishlist = await fetchWishlist(userdata.$id)
       if(wishlist){
       }
       else{
        await createWishlist(userdata.$id)
       fetchWishlist(userdata.$id);
       }
      }
    }
    sessionAndWishlist();
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
