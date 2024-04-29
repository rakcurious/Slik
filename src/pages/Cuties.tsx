import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import CollectionCards from "../components/CollectionCards";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";
import Error from "../components/WrongPage";

const Cutie: React.FC = () => {
  const { cutie } = useParams();

  useEffect(() => {
    document.body.scrollTo(0, 0);
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {(cutie === 'men' || cutie ==='women') ? <>
      <main className="flex flex-col flex-grow">
      <BannerSlider category={cutie} />
      <CollectionCards category={cutie} />
      <ProductCards category={cutie} collection={cutie}/>
      </main>
      <Footer />
      </>: 
      (cutie === 'brands') ? 
      <>
      <main className="flex flex-col flex-grow">
      <CollectionCards category={cutie} />
      </main>
      <Footer />
      </> 
      :
      <Error /> }
      
    </div>
  );
};

export default Cutie;
