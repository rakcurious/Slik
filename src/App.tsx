import Navbar from "./components/Navbar";
import { Outlet} from "react-router-dom";
import { getCurrentSession } from "./appwrite/auth";
import { useEffect } from "react";
import { createWishlist, fetchAllDocuments, fetchWishlist } from "./appwrite/config";import { useAppDispatch, useAppSelector } from "./redux_toolkit/hooks";
import { selectUserData, setWishlist } from "./redux_toolkit/userSlice";
;


function App() {
  const dispatch = useAppDispatch()
  const userdata = useAppSelector(selectUserData)

  
  useEffect(()=> {
   const lol = async () => {
    const userdata = await getCurrentSession();
    if(userdata){
      const wishlist = await fetchWishlist(userdata.$id);
      if(wishlist){
    dispatch(setWishlist(wishlist.wishlist))
    console.log(wishlist.wishlist)
      }
      else {
        createWishlist(userdata.$id)
      }
    }
    
    
   } 
   lol();
    fetchAllDocuments();
    

    if(userdata){
      fetchWishlist(userdata.$id)
    }
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
