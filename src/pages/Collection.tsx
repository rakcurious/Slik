import { useEffect, useState } from "react";
import { ProductCards, useAppSelector, Navbar } from "../index";
import { useParams } from "react-router-dom";
import productSlice, { selectCollections } from "../redux_toolkit/productSlice";
import Error from "../components/WrongPage";

const Collection: React.FC = () => {
  const collections = useAppSelector(selectCollections);

  const { category, slug } = useParams();

 

  const collection = collections.find(
    (collection) => collection.slug == slug
  );



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
      <ProductCards category={category} collection={collection?.name}/>
    </>: 
    <Error />}
    </>
  );
};

export default Collection;
