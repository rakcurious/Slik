import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux_toolkit/hooks";
import { selectUserData } from "../redux_toolkit/userSlice";
import { selectProducts } from "../redux_toolkit/productSlice";
import Navbar from "../components/Navbar";
import WishlistCards from "../components/WishlistCards";
import Modal from "../components/AuthModal";

function Profile() {
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  const userdata = useAppSelector(selectUserData);
  let products = useAppSelector(selectProducts);

  const [showModal, setShowModal] = useState(true);

  const isAuthenticated = !!userdata;
  const isVerified = userdata?.emailVerification || false;

  const userID = userdata?.$id;
  let prods;
  if (products && userdata) {
    prods = products.filter((prod) =>
      prod.likes?.find((like) => like.userid === userID)
    );

    prods.sort((a: any, b: any) => {
      const aUserLike = a.likes?.find((like: any) => like.userid === userID);
      const bUserLike = b.likes?.find((like: any) => like.userid === userID);

      return (bUserLike?.time || 0) - (aUserLike?.time || 0);
    });
  }

  const loadingtime = () => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  };
  loadingtime();

  return (
    <>
      <Navbar />
      {userdata ? (
        <>
          {prods && <WishlistCards products={prods} userdata={userdata} />}
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
