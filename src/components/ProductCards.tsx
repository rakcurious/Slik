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
      <div className="mt-4 xl:gap-x-0 font-urbanist grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-start mx-auto gap:2 md:gap-2 lg:gap-10 mb-10 px-0 md:px-10">
        {products.map((product) => (
          <CardContainer key={product.id} className="inter-var ">
            <CardBody className=" flex flex-col items-center justify-start h-60 w-60 md:h-full md:w-full lg:h-72 lg:w-72 relative group/card  rounded-xl mb-8 px-5 md:p-10">
              
                <CardItem
                  translateZ="100"
                  className="w-full flex justify-center mb-2"
                >
                  <img
                    src={product.imageSrc}
                    className="h-60 w-52 md:h-72 md:w-60  object-cover  rounded-lg group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                
                  <div className="flex justify-between w-48 md:w-60 lg:w-52">
                    <CardItem
                    translateZ="50"
                    className="text-sm font-semibold"
                  >
                    <div className="truncate max-w-40 pl-1 md:max-w-52">
                        {product.name}
                    </div>
                    <div className=" text-xs pl-1 md:text-sm font-semibold  truncate max-w-52">
                        {product.brand}
                    </div>
                    
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm pr-1 md:text-lg font-normal"
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