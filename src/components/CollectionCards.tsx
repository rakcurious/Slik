import React from "react";
import { CardBody, CardContainer, CardItem, useAppSelector } from "../index";
import { useNavigate } from "react-router-dom";
import { selectCollections } from "../redux_toolkit/productSlice";

const CollectionCards: React.FC<{
  page: string;
}> = ({ page }) => {
  let collections = useAppSelector(selectCollections);

  const navigate = useNavigate();

  if (page === "men" || page === "women") {
    collections = collections.filter(
      (collection) => collection.gender.toLowerCase() == page
    );
  }

  const navigateToCollection = (gender, id) => {
    navigate(`/${gender}/${id}`);
  };

  return (
    <>
      <h1 className="text-center uppercase font-urbanist font-bold text-4xl mt-6">
        COLLECTIONS
      </h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-0 gap-y-8 font-urbanist text-black pb-10 mb-10">
        {collections.map((collection) => (
          <CardContainer key={collection.$id} className="inter-var">
            <CardBody className=" h-80 lg:h-72 aspect-1 relative group/card rounded-xl">
              <CardItem
                translateZ="100"
                className="w-full h-full flex justify-center"
              >
                <img
                  onClick={() =>
                    navigateToCollection(collection.gender, collection.$id)
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
