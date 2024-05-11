import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux_toolkit/hooks";
import { selectUserData, selectWishlist} from "../redux_toolkit/userSlice";
import Navbar from "../components/Navbar";
import WishlistCards from "../components/WishlistCards";
import Modal from "../components/AuthModal";
import { selectProducts } from "../redux_toolkit/productSlice";

function Profile() {
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  const userdata = useAppSelector(selectUserData);
  const wishlist = useAppSelector(selectWishlist)
  const [showModal, setShowModal] = useState(true);
  const products = useAppSelector(selectProducts)

  

  let wishProds = wishlist?.map((prod:any)=> products?.find((pro)=> pro.$id === prod.$id)
  )

  const isAuthenticated = !!userdata;
  const isVerified = userdata?.emailVerification || false;

  const loadingtime = () => {
    setTimeout(() => {
      setLoad(false);
    }, 10000);
  };
  loadingtime();
  return (
    <>
      <Navbar />
      {(userdata && products.length>0) ? (
        <>
          {wishProds && <WishlistCards products={wishProds} userdata={userdata} />}
       </>
      ) : load ? (
        <div className="px-10 mt-20 flex flex-col items-center justify-center w-screen h-auto bg-transparent">
          <img
            src="https://res.cloudinary.com/dnhz5reqf/image/upload/v1713705966/slik/slikbearog_wx3vqt.png"
            className="mt-24 lg:mt-0 mb-5 h-60 w-60 animate-bounce"
          />
        </div>
      ) : (
        <Modal
          isOpen={showModal}
          isAuthenticated={isAuthenticated}
          isVerified={isVerified}
          onClose={() => setShowModal(false)}
          onLogin={() => {
            navigate("/login");
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}

export default Profile;
