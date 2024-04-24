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
        "pt-32 min-h-screen items-start w-full overflow-y-auto overflow-x-hidden absolute inset-0"
      )}
      ref={gridRef}
    >
      <div
        className={`mt-4 pb-4 font-urbanis items-start mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-10 px-2 md:gap-y-10 md:px-5 lg:gap-x-10 lg:gap-y-10`}
        ref={gridRef}
      >
        {columnArrays.map((columnProducts, columnIndex) => (
          <div key={columnIndex} className="grid gap-4 md:gap-6 lg:gap-10">
            {columnProducts.map((product, idx) => (
              <motion.div
                style={{
                  y: columnIndex % 2 === 0 ? translateFirst : translateSecond,
                }}
                key={`grid-${columnIndex}-${idx}`}
              >
                <CardContainer key={product.$id} className="inter-var">
                  <CardBody className=" flex flex-col items-center justify-start relative group/card rounded-xl w-44 sm:w-60 md:w-72 lg:w-56 xl:w-64">
                    <CardItem
                      translateZ="100"
                      className="w-auto flex justify-center mb-2"
                    >
                      <img
                        onClick={() => navigate(`/product/${product.slug}`)}
                        src={product.images[0]}
                        className="w-full aspect-[3/4] object-cover rounded-lg group-hover/card:shadow-xl cursor-pointer"
                        alt={product.title}
                      />
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="w-full px-2 flex flex-col items-start justify-center"
                    >
                      <div className="truncate font-semibold text-base w-full">
                        {product.title}
                      </div>
                      <div className="text-xs md:text-sm font-normal truncate w-full uppercase">
                        {product.brand}
                      </div>
                      <div className="text-xs mb-1 md:text-sm font-semibold truncate w-full pb-1">
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
