import { logout, products, useAppSelector, WishlistCards } from "../index";
import { selectUserData } from "../redux_toolkit/userSlice";
import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate()

  const userdata = useAppSelector(selectUserData);

  const handleLogout = async () => {
    await logout();
    navigate('/')
  };

  return (
    <>
    {userdata && <div className="h-auto w-screen flex flex-col justify-start items-center bg-violet-100">
      <div className="z-20 font-urbanist bg-purple-100 flex items-center justify-center w-screen px-2 md:px-10"> 
      <div className="flex flex-col justify-start w-1/3">
      <p className="font-semibold text-lg truncate">{userdata.name.split(' ')[0]}</p>
      <p className="font-normal text-xs md:text-sm truncate">{userdata.email}</p>
      </div>
      <h1 className="font-bold text-xl text-center w-1/3">WISHLIST</h1>
      <div className="w-1/3 flex justify-end">
<button onClick={handleLogout} className="font-bold text-lg rounded-xl px-4 py-1 bg-black text-white text-center cursor-pointer transition duration-500 -translate-y-1 hover:-translate-y-2">Logout</button>
      </div>
      
      </div>
      
      <WishlistCards products={products} />
    </div>}
    
    </>
  );
}

export default Profile;
