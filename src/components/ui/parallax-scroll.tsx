import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export const ParallaxScroll: React.FC<{
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
  }> = ({
  products
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

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
  const fourthPart = products.slice(3 * fourth, products.length - 1);

  let partsArr = [firstPart, secondPart, thirdPart, fourthPart];

  return (
    <div
      className={cn(
        " min-h-screen items-start py-40 w-full overflow-y-auto absolute inset-0"
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-start  mx-auto gap:1 md:gap-2 lg:gap-10 py-0 px-0 md:px-10"
        ref={gridRef}
      >
        {partsArr.map((part, id) => (
          <div className="grid gap-4 md:gap-6 lg:gap-10">
            {part.map((product, idx) => (
              <motion.div
                style={{ y: id % 2 == 0 ? translateFirst : translateSecond }}
                key={`grid-1${idx}`}
              >
                <CardContainer key={product.id} className="inter-var ">
                  <CardBody className=" flex flex-col items-center justify-center h-60 w-52 md:h-full md:w-full lg:h-72 lg:w-72 relative group/card  rounded-xl p-5 md:p-10">
                    <CardItem
                      translateZ="100"
                      className="w-full flex justify-center mb-2"
                    >
                      <img
                        src={product.imageSrc}
                        className="h-full w-full lg:h-72 lg:w-60  object-cover  rounded-lg group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>

                    <div className="flex justify-between w-full">
                      <CardItem
                        translateZ="50"
                        className="text-xs md:text-sm font-semibold"
                      >
                        <div className="truncate max-w-60">{product.name}</div>
                        <div className="text-xs md:text-sm font-semibold  truncate max-w-60">
                          {product.brand}
                        </div>
                      </CardItem>

                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-sm  md:text-xl mt-1 font-normal"
                      >
                        {product.price}
                      </CardItem>
                    </div>
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
