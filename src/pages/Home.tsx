import { useEffect } from "react";
import BannerSlider from "../components/BannerSlider";
import ProductCards from "../components/ProductCards";
import { Navbar } from "../index";
import CollectionCards from "../components/CollectionCards";

function Home() {
  useEffect(() => {
    document.body.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <BannerSlider page="home" />
      <CollectionCards page="home" />
      <ProductCards category="home" collection="home" />
    </>
  );
}

export default Home;
