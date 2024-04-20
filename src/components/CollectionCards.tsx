import React from "react";
import { CardBody, CardContainer, CardItem, useAppSelector } from "../index";
import { useNavigate } from "react-router-dom";
import { selectCollections } from "../redux_toolkit/productSlice";

const CollectionCards: React.FC<{
  category: string;
}> = ({ category }) => {
  let collections = useAppSelector(selectCollections);

  const navigate = useNavigate();

  if (category === "men" || category === "women" || category === "brands") {
    collections = collections.filter(
      (collection) => collection.category.toLowerCase() == category
    );
  }

  const navigateToCollection = (category:string, slug:string) => {
    navigate(`/${category}/${slug}`);
  };

  return (
    <>
    
      <h1 className="text-center uppercase font-urbanist font-medium text-4xl mt-6">
        COLLECTIONS
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-0 gap-y-8 font-urbanist text-black pb-10 mb-10">
        {collections.map((collection) => (
          <CardContainer key={collection.$id} className="inter-var">
            <CardBody className=" h-80 lg:h-72 aspect-1 relative group/card rounded-xl">
              <CardItem
                translateZ="100"
                className="w-full h-full flex justify-center"
              >
                <img
                  onClick={() =>
                    navigateToCollection(collection.category, collection.slug)
                  }
                  src={collection.cardImage}
                  className="h-full w-full object-cover rounded-lg group-hover/card:shadow-xl"
                  alt={collection.name}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
};

export default CollectionCards;
