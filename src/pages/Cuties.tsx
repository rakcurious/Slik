import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BannerSlider, ProductCards, Navbar, CollectionCards, Error, Footer } from "../index";

const Cutie: React.FC = () => {
  const { cutie } = useParams();

  useEffect(() => {
    document.body.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      {(cutie === 'men' || cutie ==='women') ? <>
      <BannerSlider category={cutie} />
      <CollectionCards category={cutie} />
      <ProductCards category={cutie} collection={cutie}/>
      <Footer />
      </>: 
      (cutie === 'brands') ? 
      <>
      <CollectionCards category={cutie} />
      <Footer />
      </> 
      :
      <Error /> }
    </>
  );
};

export default Cutie;
