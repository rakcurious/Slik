import { useEffect } from "react";
import { BannerSlider, ProductCards, Navbar } from "../index";
import CollectionCards from "../components/CollectionCards";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../components/WrongPage";

const Cutie: React.FC = () => {
  const navigate = useNavigate();
  const { cutie } = useParams();

  useEffect(() => {
    document.body.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      {(cutie === 'men' || cutie ==='women' || cutie === 'brands') ? <>
      <BannerSlider page={cutie} />
      <CollectionCards page={cutie} />
      <ProductCards category={cutie} collection={cutie} />
      </>: 
      <Error /> }
    </>
  );
};

export default Cutie;
