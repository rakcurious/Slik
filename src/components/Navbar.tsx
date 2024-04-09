import { NavLink, useNavigate } from "react-router-dom";
import sliklogo from "../assets/sliklogo.webp";
import {login, useAppDispatch, useAppSelector } from "../index";
import { selectUserData } from "../redux_toolkit/userSlice";
import signinwithgoogle from '../assets/signinwithgoogle.svg'
import pfp from '../assets/rakp.webp'


function Navbar() {

  const navigate = useNavigate();

  const userdata = useAppSelector(selectUserData)
  const dispatch = useAppDispatch()

  const handleLogin = async () => {
    await login();
  };



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
        BRANDS
        </NavLink>
      </div>
      <div className="w-1/3 flex justify-center">
        <img onClick={()=> navigate('/')} src={sliklogo} className="h-14 w-auto m-0 " />
      </div>
      <div className="w-1/3 flex justify-end">
        {
          userdata? (
            <img 
            onClick={()=> navigate('/profile')}
            src={pfp}
            alt="pfp"
            className=" cursor-pointer object-cover !m-0 !p-0 object-top rounded-full h-10 w-10 border-2  border-purple-200 transition duration-500"
          />) : 
        <img className="cursor-pointer h-6 md:h-10" src={signinwithgoogle} onClick={handleLogin}/>
        }
        
      </div>
    </nav>
  );
}

export default Navbar;
