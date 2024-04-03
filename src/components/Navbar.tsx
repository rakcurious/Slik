import { NavLink } from "react-router-dom";
import sliklogo from "../assets/sliklogo.webp";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { getCurrentSession, login, logout } from "../appwrite/auth";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectUserData } from "../features/users/userSlice";
import signinwithgoogle from '../assets/signinwithgoogle.svg'
import { useEffect } from "react";


function Navbar() {

  const userdata = useAppSelector(selectUserData)
  const dispatch = useAppDispatch()

  const handleLogin = async () => {
    await login();
  };



  return (
    <nav className="sticky z-20 top-0 w-screen h-20 flex mt-0 py-2 items-center justify-center px-4 bg-purple-100">
      <div className="flex lol:justify-start lol:items-start justify-center font-bold text-lg font-urbanist gap-x-6 flex-wrap w-1/3 pt-1">
        <h1 className="lg:hidden rotate-90">lll</h1>
        <NavLink to='/women'>
        <h1 className="lol:hidden">WOMEN</h1>
        </NavLink>
        <NavLink to='/men'>
        <h1 className="lol:hidden">MEN</h1>
        </NavLink>
        <NavLink to='/'>
        <h1 className="lol:hidden">GIFTING</h1>
        </NavLink>
        <NavLink to='/'>
        <h1 className="lol:hidden">BRANDS</h1>
        </NavLink>
      </div>
      <div className="w-1/3 flex justify-center">
        <NavLink to='/'>
        <img src={sliklogo} className="h-14 w-auto m-0 " />
        </NavLink>
      </div>
      <div className="w-1/3 flex justify-end">
        {
          userdata? (
        <AnimatedTooltip />) : 
        <img className="cursor-pointer h-6 md:h-10" src={signinwithgoogle} onClick={handleLogin}/>
        }
        
      </div>
    </nav>
  );
}

export default Navbar;
