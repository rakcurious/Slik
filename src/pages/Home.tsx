import BannerSlider from "../components/BannerSlider";
import CategoryCards from "../components/CategoryCards";
import ProductCards from "../components/ProductCards";
import { banners, categories } from "../utils/data";
import Admin from "./Admin";
import Men from "./Men";
import ProductInfo from "./ProductInfo";


function Home() {
  return (
    <>
      <BannerSlider images={banners} />
      <CategoryCards categories={categories} />
      <ProductCards category="all"/>
    </>
  );
}

export default Home;
