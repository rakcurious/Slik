import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { CardBody, CardContainer, CardItem, Prods, cn, useAppSelector } from "../index";
import { selectUserData } from "../redux_toolkit/userSlice";
import { useNavigate } from "react-router-dom";

 const WishlistCards: React.FC<{
    products: Prods[];
  }> = ({
  products
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const userdata = useAppSelector(selectUserData);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });


  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const fourth = Math.ceil(products.length / 4);
  const firstPart = products.slice(0, fourth);
  const secondPart = products.slice(fourth, 2 * fourth);
  const thirdPart = products.slice(2 * fourth, 3 * fourth);
  const fourthPart = products.slice(3 * fourth);



  let partsArr = [firstPart, secondPart, thirdPart, fourthPart];

  return (
    <div
      className={cn(
        "py-32 min-h-screen items-start w-full overflow-y-auto overflow-x-hidden absolute inset-0"
      )}
      ref={gridRef}
    >
      <div
        className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-start justify-center  mx-auto gap:1 md:gap-2 lg:gap-20 mb-10 lg:py-4 px-0 md:px-10"
        ref={gridRef}
      >
        {partsArr.map((part, id) => (
          <div key={id} className="grid gap-4 md:gap-6 lg:gap-20">
            {part.map((product, idx) => (
              <motion.div
                style={{ y: id % 2 == 0 ? translateFirst : translateSecond }}
                key={`grid-1${idx}`}
              >
                <CardContainer key={product.$id} className="inter-var ">
                <CardBody className=" flex flex-col items-center justify-start h-52 w-44 md:h-full md:w-full lg:h-auto lg:aspect-[2/3] lg:w-80 relative group/card  rounded-xl mb-10 md:mb-6 xl:mb-12 px-5 p-0">
              
              <CardItem
                translateZ="100"
                className="w-full flex justify-center mb-2"
              >
                <img
                  onClick={()=>navigate(`/product/${product.$id}`)}
                  src={product.images[0]}
                  className="w-full aspect-[3/4] object-cover rounded-lg group-hover/card:shadow-xl cursor-pointer"
                  alt={product.title}
                />
              </CardItem>
              
                    <CardItem
                      translateZ="50"
                      className="w-full px-2 flex flex-col items-start justify-center font-urbanist"
                    >
                      <div className="truncate font-semibold text-base w-full">{product.title}</div>
                      <div className="text-xs md:text-sm font-normal  truncate w-full uppercase">
                        {product.brand}
                      </div>
                      <div className="text-xs mb-1 md:text-sm font-semibold  truncate w-full pb-1">
                      {`₹${product.price}`}
                      </div>
                    </CardItem>
            
          </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistCards;