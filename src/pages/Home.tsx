import { useEffect } from "react";
import { Navbar, BannerSlider, ProductCards, Footer, CollectionCards } from "../index";
function Home() {
  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-grow">
        <BannerSlider category="home" />
        <CollectionCards category="home" />
        <CollectionCards category="brands" />
        <ProductCards category="home" collection="home"/>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
