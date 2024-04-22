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
      <ProductCards category={cutie} collection={cutie}/>
      <CollectionCards category={cutie} />
      <CollectionCards category={'brands'} />
      <Footer />
      </>: 
      (cutie === 'brands') ? 
      <CollectionCards category={cutie} /> :
      <Error /> }
    </>
  );
};

export default Cutie;
