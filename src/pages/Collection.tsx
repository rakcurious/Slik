import { useEffect } from "react";
import { ProductCards, useAppSelector, Navbar } from "../index";
import { useNavigate, useParams } from "react-router-dom";
import { selectCollections } from "../redux_toolkit/productSlice";
import Error from "../components/WrongPage";
import { cat } from "@cloudinary/url-gen/qualifiers/focusOn";

const Collection: React.FC = () => {
  const navigate = useNavigate();
  const collections = useAppSelector(selectCollections);

  const { category, slug } = useParams();

 

  const collection = collections.find(
    (collection) => collection.slug == slug
  );

  // if(category === 'men' || category == 'women'){
  //   if(!collection){
  //     navigate('/wanderer')
  //   }
  // }
  // else{
  //   navigate('/wanderer')
  // }

  useEffect(() => {
    document.body.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      {(category === 'men' || category == 'women' || category === 'brands') && collection ? <>
      <img
        src={collection?.headerImage}
        className="mt-0 h-auto w-screen aspect-4"
      />
      <ProductCards category={category} collection={collection?.name} />
    </>: 
    <Error />}
    </>
  );
};

export default Collection;
