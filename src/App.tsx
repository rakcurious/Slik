import { useEffect } from "react";
import {
  createWishlist,
  fetchAllDocuments,
  fetchAllLikes,
  fetchWishlist,
} from "./appwrite/config";
import { getCurrentSession } from "./appwrite/auth";
import ReactGA from "react-ga4";
import { Outlet, ScrollRestoration } from "react-router-dom";
function App() {
  const gtrackingid = String(import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID);
  useEffect(() => {
    ReactGA.initialize(gtrackingid);
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });

    const sessionAndWishlist = async () => {
      const userdata = await getCurrentSession();
      if (userdata) {
        const wishlist = await fetchWishlist(userdata.$id);
        if (wishlist) {
        } else {
          await createWishlist(userdata.$id);
          fetchWishlist(userdata.$id);
        }
      }
    };
    sessionAndWishlist();
    fetchAllDocuments();
    fetchAllLikes();
  }, []);

  return (
    <>
      <div className="h-full font-main min-h-screen w-screen p-0 bg-gradient-to-b from-purple-100 to-indigo-100 ">
        <Outlet />
        <ScrollRestoration />
      </div>
    </>
  );
}

export default App;
