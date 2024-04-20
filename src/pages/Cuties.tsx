import { useEffect } from "react";
import { BannerSlider, ProductCards, Navbar } from "../index";
import CollectionCards from "../components/CollectionCards";
import { useParams } from "react-router-dom";
import Error from "../components/WrongPage";
import Footer from "../components/Footer";

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
      <ProductCards category={cutie} collection={cutie} />
      <Footer />
      </>: 
      <Error /> }
    </>
  );
};

export default Cutie;
