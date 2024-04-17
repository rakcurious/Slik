import { useEffect } from "react";
import { BannerSlider, ProductCards, Navbar } from "../index";
import CollectionCards from "../components/CollectionCards";
import { useParams } from "react-router-dom";

const Cutie: React.FC = () => {
  const { cutie } = useParams();

  useEffect(() => {
    document.body.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      <BannerSlider page={cutie} />
      <CollectionCards page={cutie} />
      <ProductCards category={cutie} collection={cutie} />
    </>
  );
};

export default Cutie;
