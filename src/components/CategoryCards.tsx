import React from "react";
import { CardBody, CardContainer, CardItem } from "../index";

const CategoryCards: React.FC<{
  categories: {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    category: string;
  }[];
}> = ({ categories }) => {
  return (
    <>
      <h1 className="text-center font-urbanist font-bold text-4xl mt-6">
        CATEGORIES
      </h1>
      <div className="mt-4 grid grid-cols-1 gap-x-6 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-0 font-urbanist text-black pb-10 mb-10">
        {categories.map((product) => (
          <CardContainer key={product.id} className="inter-var">
            <CardBody className="h-80 w-80 md:h-full md:w-full lg:h-96 lg:w-96 relative group/card rounded-xl md:p-10 xl:p-10 lg:px-0 py-0 -my-px">
              <CardItem
                translateZ="100"
                className="w-full flex justify-center mb-2"
              >
                <img
                  src={product.imageSrc}
                  className="h-80 w-80 md:h-full md:w-full lg:h-96 lg:w-96  object-cover  rounded-lg group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
};

export default CategoryCards;
