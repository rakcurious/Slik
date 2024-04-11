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
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-0 gap-y-8 font-urbanist text-black pb-10 mb-10">
        {categories.map((product) => (
          <CardContainer key={product.id} className="inter-var">
            <CardBody className=" h-[27rem] lg:h-96 aspect-[4/5] relative group/card rounded-xl">
              <CardItem
                translateZ="100"
                className="w-full h-full flex justify-center"
              >
                <img
                  src={product.imageSrc}
                  className="h-full w-full object-cover rounded-lg group-hover/card:shadow-xl"
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
