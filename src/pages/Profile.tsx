import { useState } from "react";
import { logout, Navbar, useAppDispatch, useAppSelector, WishlistCards, Modal, selectProducts, selectUserData, selectWishlist, setUserData, setWishlist } from "../index";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userdata = useAppSelector(selectUserData);
  let products = useAppSelector(selectProducts);
  let wishlist = useAppSelector(selectWishlist);

  const [showModal, setShowModal] = useState(true);
  
  const isAuthenticated = !!userdata;
  const isVerified = userdata?.emailVerification || false;

  wishlist = [...wishlist].reverse();

  const prods = wishlist.map((userid: string) =>
    products.find((product) => product.$id == userid)
  );

  const handleLogout = async () => {
    await logout();
    dispatch(setUserData(null))
    dispatch(setWishlist([]));
    navigate("/");
  };

  return (
    <>
      <Navbar />
      {userdata ? (
        <div className="h-auto w-screen flex flex-col justify-start items-center bg-violet-100">
          <div className="z-20 bg-purple-100 flex items-center justify-center w-screen px-2 md:px-10">
            <div className="flex flex-col justify-start w-1/3">
              <p className="font-semibold text-lg truncate">{userdata.name}</p>
              <p className="font-normal text-xs md:text-sm truncate">
                {userdata.email}
              </p>
            </div>
            <h1 className="font-medium text-2xl text-center w-1/3">WISHLIST</h1>
            <div className="w-1/3 flex justify-end">
              <button
                onClick={handleLogout}
                className="font-bold text-sm rounded-lg px-4 py-1 bg-black/70  hover:bg-black text-white text-center cursor-pointer transition duration-500 -translate-y-1 hover:-translate-y-2"
              >
                Logout
              </button>
            </div>
          </div>

          <WishlistCards products={prods} />
        </div>
      ): 
      <Modal
        isOpen={showModal}
        isAuthenticated={isAuthenticated}
        isVerified={isVerified}
        onClose={() => setShowModal(false)}
        onLogin={() => {
          navigate("/login");
          setShowModal(false);
        }}
      />}
    </>
  );
}

export default Profile;
