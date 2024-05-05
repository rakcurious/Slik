import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../redux_toolkit/hooks";
import { selectUserData } from "../redux_toolkit/userSlice";
import FloatingMenu from "./FloatingMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const userdata = useAppSelector(selectUserData);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbartop sticky z-20 top-0 w-screen h-20 flex mt-0 items-center justify-center bg-purple-100/40 backdrop-blur-md ">
        <div className="flex justify-between font-bold text-lg gap-x-6 w-full px-4 py-2">
          <div className="md:hidden my-auto w-1/4">
            <button
              aria-label="Menu"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900"
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
          <div className="flex justify-center w-1/2">
            <img
              onClick={() => navigate("/")}
              src="https://res.cloudinary.com/dnhz5reqf/image/upload/v1713705965/slik/sliklogo_iiawiz.webp"
              className="h-14 w-auto m-0 cursor-pointer"
              alt="Slik Logo"
            />
          </div>
          <div className="flex justify-end items-center w-1/4 md:w-1/3">
            {userdata ? (
              <img
                onClick={() => navigate("/profile")}
                src="https://res.cloudinary.com/dnhz5reqf/image/upload/v1713109014/l1yqyacfz0ycvomn5yuw.jpg"
                alt="pfp"
                className="cursor-pointer object-cover xl:mr-4 !p-0 object-top rounded-full h-12 w-12 border-2 border-purple-200 transition duration-500"
              />
            ) : (
              <button
                onClick={() => navigate("/login")}
                className=" font-medium md:font-semibold text-md md:text-lg rounded-xl py-1 md:py-2 px-4 md:px-8 bg-black text-white text-center cursor-pointer transition duration-500 -translate-y-1 hover:-translate-y-2 md:mr-4"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
      <FloatingMenu
        userdata={userdata}
        isOpen={isMenuOpen}
        onClose={toggleMenu}
      />
    </>
  );
}

export default Navbar;
