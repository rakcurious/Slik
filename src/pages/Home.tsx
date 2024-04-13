import { useEffect } from "react";
import BannerSlider from "../components/BannerSlider";
import CategoryCards from "../components/CategoryCards";
import ProductCards from "../components/ProductCards";
import { banners, categories } from "../utils/data";
import Admin from "./Admin";
import Men from "./Men";
import ProductInfo from "./ProductInfo";
import Login from "./Login";
import { Navbar } from "..";


function Home() {

  useEffect(() => {
    document.body.scrollTo(0, 0); 
});
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
}

export default Home;
