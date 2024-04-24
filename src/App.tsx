import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import {
  createWishlist,
  fetchAllDocuments,
  fetchCollections,
  fetchWishlist,
  useAppDispatch,
  setWishlist,
  getCurrentSession
} from "./index";
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const everythingEverywhereAllAtOnce = async () => {
      const userdata = await getCurrentSession();
      if (userdata) {
        const wishlist = await fetchWishlist(userdata?.$id);
        if (wishlist) {
          dispatch(setWishlist(wishlist));
        } else {
          createWishlist(userdata?.$id);
        }
      }
    };
    everythingEverywhereAllAtOnce();
    fetchAllDocuments();
    fetchCollections();
    

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
