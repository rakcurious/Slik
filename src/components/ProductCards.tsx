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
      <div className="mt-4 xl:gap-x-0 font-urbanist grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-start mx-auto gap:2 md:gap-2 lg:gap-10 pb-10 px-0 md:px-10">
        {products.map((product) => (
          <CardContainer key={product.id} className="inter-var ">
            <CardBody className=" flex flex-col items-center justify-start h-52 w-44 md:h-full md:w-full lg:h-72 lg:w-72 relative group/card  rounded-xl mb-0 md:mb-8 xl:mb-12 px-5 p-0">
              
                <CardItem
                  translateZ="100"
                  className="w-full flex justify-center mb-2"
                >
                  <img
                    src={product.imageSrc}
                    className="h-auto w-auto md:h-auto xl:h-auto xl:w-auto md:w-auto object-cover  rounded-lg group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                
                  <div className="flex justify-between w-32 md:w-60 lg:w-52">
                    <CardItem
                    translateZ="50"
                    className=" font-semibold"
                  >
                    <div className=" text-xs truncate max-w-40 md:max-w-52">
                        {product.name}
                    </div>
                    <div className=" text-xs md:text-sm font-semibold  truncate max-w-52">
                        {product.brand}
                    </div>
                    
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-xs md:text-lg font-normal"
                  >
                    {`${product.price}`}
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