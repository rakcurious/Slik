import { useState } from "react";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { products } from "../index";

function Profile() {
  const [toggle, setToggle] = useState("products");



  return (
    <div className="h-auto w-screen flex flex-col justify-start items-center bg-violet-100">
      <div className="z-10 sticky bg-transparent top-20 h-12 w-auto flex justify-center items-center gap-1 md:gap-5 mt-0 -m-16 px-2 md:px-6 rounded-b-3xl rounded-t-sm ring-2 ring-violet-200">
        <p className="w-auto px-6 py-0 text-xl font-urbanist font-semibold rounded-full hover:ring-1  hover:ring-violet-300  ">
          Wishlist
        </p>
        <p className="w-auto px-6 py-1 bg-violet-100 text-xl font-urbanist font-semibold rounded-3xl ring-1 ring-violet-200">
          Wishboards
        </p>
        <p className="w-auto px-6 py-1 text-xl font-urbanist font-semibold rounded-3xl hover:ring-1 hover:ring-violet-200">
          Creations
        </p>
      </div>
        <ParallaxScroll products={products}/>
    </div>
  );
}

export default Profile;
