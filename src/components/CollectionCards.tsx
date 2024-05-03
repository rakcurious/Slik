import React from "react";
import { useNavigate } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "./3dCard";
import { useAppSelector } from "../redux_toolkit/hooks";
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
  } else if (category === "home") {
    collections = collections.filter(
      (collection) =>
        collection.category.toLowerCase() == "men" ||
        collection.category.toLowerCase() == "women"
    );
  }

  const navigateToCollection = (category: string, slug: string) => {
    navigate(`/${category}/${slug}`);
  };

  return (
    <>
      <h1 className="text-center uppercase font-medium text-2xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl mt-6 lg:mt-10 xl:mt-16">
        {category === "brands" ? "Brands" : "Collections"}
      </h1>
      <div className="mt-5 lg:mt-10 xl:mt-16 grid grid-cols-2 gap-5 px-4 sm:gap-10 md:grid-cols-3 md:px-5 lg:grid-cols-3 lg:gap-20 xl:grid-cols-4 xl:gap-16 text-black pb-5 xl:mr-5">
        {collections.map((collection) => (
          <CardContainer key={collection.$id} className="inter-var">
            <CardBody className="w-full aspect-1 relative group/card rounded-xl">
              <CardItem
                translateZ="100"
                className="w-full h-full flex justify-center"
              >
                <img
                  onClick={() =>
                    navigateToCollection(collection.category, collection.slug)
                  }
                  src={collection.cardImage}
                  className="cursor-pointer h-full w-full object-cover rounded-lg group-hover/card:shadow-xl"
                  alt={`${collection.name} ${collection.name}`}
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
