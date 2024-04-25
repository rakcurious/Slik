import React from "react";
import { CardBody, CardContainer, CardItem, useAppSelector, selectCollections } from "../index";
import { useNavigate } from "react-router-dom";

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
      <h1 className="text-center uppercase font-medium text-2xl lg:text-4xl mt-6 lg:mt-10">
        {category === "brands" ? "Brands" : "Collections"}
      </h1>
      <div className="mt-5 lg:mt-10 grid grid-cols-2 gap-x-2 gap-y-5 px-2 md:grid-cols-3 md:px-5 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 xl:gap-x-0 xl:gap-y-8 text-black pb-5 xl:mb-5">
        {collections.map((collection) => (
          <CardContainer key={collection.$id} className="inter-var">
            <CardBody className="w-44 sm:w-60 md:w-52 lg:w-64 aspect-1 relative group/card rounded-xl">
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
