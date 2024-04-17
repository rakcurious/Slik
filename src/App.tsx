import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { getCurrentSession } from "./appwrite/auth";
import { useEffect } from "react";
import {
  createWishlist,
  fetchAllDocuments,
  fetchCollections,
  fetchWishlist,
} from "./appwrite/config";
import { useAppDispatch, useAppSelector } from "./redux_toolkit/hooks";
import { selectUserData, setWishlist } from "./redux_toolkit/userSlice";
function App() {
  const dispatch = useAppDispatch();
  const userdata = useAppSelector(selectUserData);

  useEffect(() => {
    const lol = async () => {
      const userdata = await getCurrentSession();
      if (userdata) {
        const wishlist = await fetchWishlist(userdata.data?.$id);
        if (wishlist) {
          dispatch(setWishlist(wishlist));
        } else {
          createWishlist(userdata.data.$id);
        }
      }
    };
    lol();
    fetchAllDocuments();
    fetchCollections();

  }, []);

  return (
    <>
      <div className="h-full min-h-screen w-screen p-0 bg-gradient-to-b from-purple-100 to-indigo-100 ">
        
        <Outlet />
      </div>
    </>
  );
}

export default App;
