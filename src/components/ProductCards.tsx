import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";




const ProductCards : React.FC<{
  products: {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    price: string;
    brand: string;
    category: string;
  }[];
}> = ({ products }) => {
  return (
    <>
    <h1 className="text-center font-urbanist font-bold text-4xl mt-10">PRODUCTS</h1>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-0 font-urbanist text-black">
        {products.map((product) => (
          <CardContainer key={product.id} className="inter-var ">
            <CardBody className=" flex flex-col items-center justify-center  h-full w-full lg:h-96 lg:w-96 relative group/card  rounded-xl p-10">
              
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
                
                  <div className="flex justify-between w-full">
                    <CardItem
                    translateZ="50"
                    className="text-sm font-semibold"
                  >
                    <div className="truncate max-w-60">
                        {product.name}
                    </div>
                    <div className=" text-sm font-semibold  truncate max-w-60">
                        {product.brand}
                    </div>
                    
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-xl mt-1 font-normal "
                  >
                    {product.price}
                  </CardItem>
                  
                </div>
              
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}

export default ProductCards