import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";




const CategoryCards : React.FC<{
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
    <h1 className="text-center font-urbanist font-bold text-4xl mt-6">CATEGORIES</h1>
      <div className="mt-4 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-0 font-urbanist text-black">
        {categories.map((product) => (
          <CardContainer key={product.id} className="inter-var">
            <CardBody className="h-full w-full lg:h-96 lg:w-96 relative group/card rounded-xl p-10 py-0 -my-px">
              
                <CardItem
                  translateZ="100"
                  className="w-full flex justify-center mb-2"
                >
                  <img
                    src={product.imageSrc}
                    className="h-full w-full lg:h-96 lg:w-80  object-cover  rounded-lg group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                  
                </CardItem>
                  {/* <CardItem
                    as="p"
                    translateZ="200"
                    className="text-3xl font-urbanist font-bold text-center w-full text-wrap h-auto relative -top-52  z-100 "
                  >
                    {product.name}
                  </CardItem> */}
                  
                
              
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}

export default CategoryCards