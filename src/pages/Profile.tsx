import { useState } from "react";
import {
  logout,
  Navbar,
  useAppDispatch,
  useAppSelector,
  WishlistCards,
  Modal,
  selectProducts,
  selectUserData,
  setUserData,
  setWishlist,
} from "../index";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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

  const handleLogout = async () => {
    await logout();
    dispatch(setUserData(null));
    dispatch(setWishlist([]));
    navigate("/");
  };

  console.log(prods);

  return (
    <>
      <Navbar />
      {userdata ? (
        <div className="h-auto w-screen flex flex-col justify-start items-center bg-violet-100">
          <div className="z-20 bg-purple-100 flex items-center justify-center w-screen px-8 md:px-10">
            <div className="hidden md:flex flex-col justify-start w-1/4">
              <p className="font-semibold text-lg truncate">{userdata.name}</p>
              <p className="font-normal text-xs md:text-sm truncate">
                {userdata.email}
              </p>
            </div>
            <h1 className="font-medium text-2xl lg:text-3xl 2xl:text-4xl text-center w-1/2">
              WISHLIST
            </h1>
            <div className="hidden md:flex w-1/4 justify-end">
              <button
                onClick={handleLogout}
                className="font-bold text-sm rounded-lg px-4 py-1 bg-black/70  hover:bg-black text-white text-center cursor-pointer transition duration-500 hover:-translate-y-1"
              >
                Logout
              </button>
            </div>
          </div>

          {prods && <WishlistCards products={prods} />}
        </div>
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
