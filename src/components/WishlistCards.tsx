import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  CardBody,
  CardContainer,
  CardItem,
  Prods,
  cn
} from "../index";
import { useNavigate } from "react-router-dom";

const WishlistCards: React.FC<{ products: Prods[] }> = ({ products }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const isTwoColumns = window.innerWidth < 1024;
  const numColumns = isTwoColumns ? 2 : 4;

  const columnArrays = Array.from({ length: numColumns }, (_, i) =>
    products.filter((_, index) => index % numColumns === i)
  );

  return (
    <div
      className={cn(
        "pt-28 min-h-screen items-start w-full overflow-y-auto overflow-x-hidden absolute inset-0"
      )}
      ref={gridRef}
    >
      <div
        className={`mt-4 lg:mt-10 pb-4 items-start grid grid-cols-2 gap-x-5 sm:gap-x-8 md:gap-x-10 lg:grid-cols-4 px-5 lg:gap-x-16`}
        ref={gridRef}
      >
        {columnArrays?.map((columnProducts, columnIndex) => (
          <div key={columnIndex} className="col-span-1 grid grid-cols-1 gap-5  md:gap-7 lg:gap-10"> 
            {columnProducts?.map((product, idx) => (
              <motion.div
                style={{
                  y: columnIndex % 2 === 0 ? translateFirst : translateSecond,
                }}
                key={`grid-${columnIndex}-${idx}`}
              >
                <CardContainer key={product?.$id} className="inter-var col-span-1 w-full">
                  <CardBody className="flex flex-col items-center justify-start relative group/card rounded-xl w-full">
                    <CardItem
                      translateZ="100"
                      className="w-full flex justify-center mb-1"
                    >
                      <img
                        onClick={() => navigate(`/product/${product?.slug}`)}
                        src={product?.images[0]}
                        className="w-full h-auto aspect-[3/4] object-cover rounded-lg group-hover/card:shadow-xl cursor-pointer"
                        alt={product?.title}
                      />
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="w-full px-2 flex flex-col items-center justify-center text-xs sm:text-sm md:text-base 2xl:text-xl text-center xl:mt-1"
                    >
                      <div className="truncate font-semibold w-full">
                        {product?.title}
                      </div>
                      <div className="font-medium truncate w-full uppercase">
                        {product?.brand}
                      </div>
                      <div className="mb-1 font-semibold truncate w-full">
                        {product? `₹${product?.price}`: ''}
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
