import { NavLink } from "react-router-dom";
import sliklogo from "../assets/sliklogo.webp";
import { AnimatedTooltip } from "./ui/animated-tooltip";

function Navbar() {
  return (
    <nav className="sticky z-20 top-0 w-screen h-18 flex mt-0 py-2 justify-center px-4 bg-purple-100">
      <div className="flex lol:justify-start lol:items-start justify-center font-bold text-lg font-urbanist gap-x-6 flex-wrap w-1/3 pt-1">
        <h1 className="lg:hidden rotate-90">lll</h1>
        <NavLink to='/women'>
        <h1 className="lol:hidden">WOMEN</h1>
        </NavLink>
        <h1 className="lol:hidden">MEN</h1>
        <h1 className="lol:hidden">GIFTING</h1>
        <h1 className="lol:hidden">BRANDS</h1>
      </div>
      <div className="w-1/3 flex justify-center">
        <img src={sliklogo} className="h-14 w-auto m-0 " />
      </div>
      <div className="w-1/3 flex justify-end pr-4">
        <AnimatedTooltip />
      </div>
    </nav>
  );
}

export default Navbar;
