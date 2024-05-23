import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../appwrite/auth";
import { useAppDispatch } from "../redux_toolkit/hooks";
import { setUserData } from "../redux_toolkit/userSlice";

const FloatingMenu: React.FC<{
  userdata: any;
  isOpen: boolean;
  onClose: () => void;
}> = ({ userdata, isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    dispatch(setUserData(null));
    navigate("/");
  };

  return (
    <div className={`${isOpen ? 'no-scroll' : ''}`}>
      <div
        className={`fixed inset-0 z-40 bg-black/10 backdrop-blur-sm ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={onClose}
      />
      <div
        className={`font-bold fixed top-0 left-0 z-50 h-screen rounded-xl w-64 bg-gradient-to-b from-purple-200/40 to-indigo-200/40 backdrop-blur-lg transition-all duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end pt-4 px-4">
          <div className="w-52 flex flex-col pr-4">
            <p className="font-semibold text-base truncate">{userdata?.name}</p>
            <p className="font-normal text-xs md:text-sm truncate">
              {userdata?.email}
            </p>
          </div>
          <button
            name="close"
            aria-label="Close"
            onClick={onClose}
            className="text-black  -translate-y-1"
          >
            <svg
              className="h-8 w-8"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {userdata && (
          <button
            onClick={handleLogout}
            className=" mx-4 mt-2 mb-4 px-3 py-1 font-semibold text-xs rounded-md w-auto bg-black/70 text-white/80 block text-center"
          >
            Logout
          </button>
        )}
        <nav className="mt-5 text-lg">
          <NavLink
            to="/women"
            className={({ isActive }) =>
              `block px-4 py-2 text-black ${
                isActive ? "backdrop-blur-sm bg-indigo-200/10 " : ""
              }`
            }
            onClick={onClose}
          >
            WOMEN
          </NavLink>
          <NavLink
            to="/men"
            className={({ isActive }) =>
              `block px-4 py-2 text-black  ${
                isActive ? "backdrop-blur-sm bg-indigo-200/10" : ""
              }`
            }
            onClick={onClose}
          >
            MEN
          </NavLink>
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              `block px-4 py-2 text-black ${
                isActive ? "backdrop-blur-sm bg-indigo-200/10" : ""
              }`
            }
            onClick={onClose}
          >
            BRANDS
          </NavLink>
          {userdata && (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `block px-4 py-2 text-black  ${
                  isActive ? "backdrop-blur-sm bg-indigo-200/10" : ""
                }`
              }
              onClick={onClose}
            >
              WISHLIST
            </NavLink>
          )}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 text-black ${
                isActive ? "backdrop-blur-sm bg-indigo-200/10" : ""
              }`
            }
            onClick={onClose}
          >
            HOME
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default FloatingMenu;
