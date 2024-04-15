import { NavLink, useNavigate } from "react-router-dom";
import sliklogo from "../assets/sliklogo.webp";
import { useAppSelector } from "../index";
import { selectUserData } from "../redux_toolkit/userSlice";
import { useState } from "react";
import FloatingMenu from "./FloatingMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pfps, setPfps] = useState<String>(
    "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713109014/l1yqyacfz0ycvomn5yuw.jpg"
  );
  const navigate = useNavigate();
  const userdata = useAppSelector(selectUserData);
  const profilePics = [
    "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713109014/l1yqyacfz0ycvomn5yuw.jpg",
    "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713109558/rpsoght3oeatsvqxlqss.jpg",
    "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713109558/zvjd7dceroirkkbfta0k.jpg",
    "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713109558/g79soyfwfh3o7aihapwj.jpg",
    "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713109014/l1yqyacfz0ycvomn5yuw.jpg",
  ];

  const profileClick = () => {
    if (window.location.pathname === "/profile") {
      setPfps(profilePics[Math.floor(Math.random() * profilePics.length)]);
    } else {
      navigate("/profile");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="sticky z-20 top-0 w-screen h-20 flex mt-0 py-2 items-center justify-center px-4 bg-purple-100">
        <div className="flex justify-between font-bold text-lg font-urbanist gap-x-6 w-full">
          <div className="md:hidden my-auto w-1/3">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center w-1/3">
            <NavLink
              to="/women"
              className={({ isActive }) =>
                `rounded px-3 py-2 ${isActive ? "text-fuchsia-800" : ""}`
              }
            >
              WOMEN
            </NavLink>
            <NavLink
              to="/men"
              className={({ isActive }) =>
                `rounded px-3 py-2 ${isActive ? "text-fuchsia-800" : ""}`
              }
            >
              MEN
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded px-3 py-2 ${isActive ? "text-fuchsia-800" : ""}`
              }
            >
              HOME
            </NavLink>
          </div>
          <div className="flex justify-center w-1/3">
            <img
              onClick={() => navigate("/")}
              src={sliklogo}
              className="h-14 w-auto m-0"
              alt="Slik Logo"
            />
          </div>
          <div className="flex justify-end items-center w-1/3">
            {userdata ? (
              <img
                onClick={profileClick}
                src={pfps}
                alt="pfp"
                className="cursor-pointer object-cover mr-4 !p-0 object-top rounded-full h-12 w-12 border-2 border-purple-200 transition duration-500"
              />
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="font-semibold text-lg rounded-xl py-2 px-8 bg-black text-white text-center cursor-pointer transition duration-500 -translate-y-1 hover:-translate-y-2 mr-4"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
      <FloatingMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
}

export default Navbar;