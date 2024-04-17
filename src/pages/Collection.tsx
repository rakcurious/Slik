import { useEffect } from "react";
import {
  ProductCards,
  useAppSelector,
  Navbar,
} from "../index";
import { useParams } from "react-router-dom";
import { selectCollections } from "../redux_toolkit/productSlice";

const Collection: React.FC = () =>{
    const collections = useAppSelector(selectCollections)

    const {category, collectionid} = useParams()

    const collection = collections.find((collection)=>collection.$id == collectionid)

    console.log(category, collectionid)

  useEffect(() => {
    document.body.scrollTo(0, 0); 
});

    
  return (
    <>
      <Navbar />
    <img src={collection?.headerImage} className="mt-0 h-auto w-screen aspect-4" />
    <h1 className=" my-10 text-center font-urbanist capitalize font-bold text-4xl mt-10">{collection?.name}</h1>
    <ProductCards category={category} collection={collection?.name}/>
    </>
  );
}

export default Collection;
