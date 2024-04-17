import { useEffect } from "react";
import BannerSlider from "../components/BannerSlider";
import CategoryCards from "../components/CollectionCards";
import ProductCards from "../components/ProductCards";
import { banners, categories } from "../utils/data";
import Admin from "./Admin";
import Men from "./Men";
import ProductInfo from "./ProductInfo";
import { Navbar } from "..";
import CollectionCards from "../components/CollectionCards";


function Home() {

  useEffect(() => {
    document.body.scrollTo(0, 0); 
});
  return (
    <>
     <Navbar />
        <BannerSlider page="home" />
        <CollectionCards page='home'/>
        <ProductCards category="home" collection='home' />
    </>
  );
}

export default Home;
