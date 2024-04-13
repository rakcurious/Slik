import { NavLink, useNavigate } from "react-router-dom";
import sliklogo from "../assets/sliklogo.webp";
import {login, useAppDispatch, useAppSelector } from "../index";
import { selectUserData } from "../redux_toolkit/userSlice";
import signinwithgoogle from '../assets/signinwithgoogle.svg'
import pfp from '../assets/rakp.webp'
import { useState } from "react";


function Navbar() {
  const [pfps, setPfps] = useState<String>("https://res.cloudinary.com/dnhz5reqf/image/upload/v1712941990/am20dzlufhgbbqt2jrhh.jpg");

  const navigate = useNavigate();

  const userdata = useAppSelector(selectUserData);

  const profilePics = ["https://res.cloudinary.com/dnhz5reqf/image/upload/v1712941990/dmq0c8g2wpgnhqiwhcfi.jpg","https://res.cloudinary.com/dnhz5reqf/image/upload/v1712941990/am20dzlufhgbbqt2jrhh.jpg","https://res.cloudinary.com/dnhz5reqf/image/upload/v1712941991/xy5d1ngb9dpgxrxbkoy3.jpg","https://res.cloudinary.com/dnhz5reqf/image/upload/v1712941991/g5spqcfl773xvu65vi19.jpg","https://res.cloudinary.com/dnhz5reqf/image/upload/v1712941991/xmwizjobhhzsqhjhqcso.jpg","https://res.cloudinary.com/dnhz5reqf/image/upload/v1712941991/djczrxyju8j85kg0npee.jpg"]

  const profileClick = () => {
    navigate('/profile')
    if(window.location.pathname == '/profile'){
      setPfps(profilePics[Math.floor((Math.random() * profilePics.length))])
    }
  }



  return (
    <nav className="sticky z-20 top-0 w-screen h-20 flex mt-0 py-2 items-center justify-center px-4 bg-purple-100">
      <div className="flex lol:justify-start lol:items-start justify-center font-bold text-lg font-urbanist gap-x-6 flex-wrap w-1/3 pt-1">
        <h1 className="lg:hidden rotate-90">lll</h1>
        <NavLink to='/women' className={({isActive}) =>
                                        `lol:hidden rounded ${isActive ? "text-fuchsia-800" : ""}`
                                    } >
        WOMEN
        </NavLink>
        <NavLink to='/men' className={({isActive}) =>
                                        `lol:hidden rounded ${isActive ? "text-fuchsia-800" : ""}`
                                    } >
        MEN
        </NavLink>
        <NavLink to='/' className={({isActive}) =>
                                        `lol:hidden rounded ${isActive ? "text-fuchsia-800" : ""}`
                                    } >
        HOME
        </NavLink>
      </div>
      <div className="w-1/3 flex justify-center">
        <img onClick={()=> navigate('/')} src={sliklogo} className="h-14 w-auto m-0 " />
      </div>
      <div className="w-1/3 flex justify-end">
        {
          userdata? (
            <img 
            onClick={profileClick}
            src={pfps}
            alt="pfp"
            className=" cursor-pointer object-cover !m-0 !p-0 object-top rounded-full h-10 w-10 border-2  border-purple-200 transition duration-500"
          />) : 
          <button
          onClick={()=>navigate('/login')}
          className="font-bold text-lg rounded-xl px-4 py-1 bg-black text-white text-center cursor-pointer transition duration-500 -translate-y-1 hover:-translate-y-2"
        >
          Login
        </button>
        }
        
      </div>
    </nav>
  );
}

export default Navbar;
