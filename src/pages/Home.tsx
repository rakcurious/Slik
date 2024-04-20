import { useEffect } from "react";
import BannerSlider from "../components/BannerSlider";
import ProductCards from "../components/ProductCards";
import { Navbar } from "../index";
import CollectionCards from "../components/CollectionCards";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <BannerSlider page="home" />
        <CollectionCards page="home" />
        <ProductCards category="home" collection="home" />
      </main>
      <Footer />
    </div>
  );
}

export default Home;