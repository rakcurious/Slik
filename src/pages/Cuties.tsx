import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BannerSlider, ProductCards, Navbar, CollectionCards, Error, Footer } from "../index";

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
