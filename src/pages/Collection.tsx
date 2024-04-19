import { useEffect } from "react";
import { ProductCards, useAppSelector, Navbar } from "../index";
import { useNavigate, useParams } from "react-router-dom";
import { selectCollections } from "../redux_toolkit/productSlice";
import Error from "../components/WrongPage";

const Collection: React.FC = () => {
  const navigate = useNavigate();
  const collections = useAppSelector(selectCollections);

  const { category, collectionid } = useParams();

 

  const collection = collections.find(
    (collection) => collection.$id == collectionid
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
      {(category === 'men' || category == 'women') && collection ? <>
      <img
        src={collection?.headerImage}
        className="mt-0 h-auto w-screen aspect-4"
      />
      <h1 className=" my-10 text-center font-urbanist capitalize font-bold text-4xl mt-10">
        {collection?.name}
      </h1>
      <ProductCards category={category} collection={collection?.name} />
    </>: 
    <Error />}
    </>
  );
};

export default Collection;
