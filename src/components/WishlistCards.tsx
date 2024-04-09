import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { CardBody, CardContainer, CardItem, cn } from "../index";
import heart from '../assets/heart.svg'
import heartfill from '../assets/heartfill.svg'

 const WishlistCards: React.FC<{
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

  const [loved, setLoved] = useState(true)

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
        "pt-32 min-h-screen items-start w-full overflow-y-auto overflow-x-hidden absolute inset-0"
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-start  mx-auto gap:1 md:gap-2 lg:gap-10 mb-10 lg:py-4 px-0 md:px-10"
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
                  <CardBody className=" flex flex-col items-center justify-start h-52 w-44 md:h-full md:w-full lg:h-72 lg:w-72 relative group/card  rounded-xl mb-10 md:mb-6 xl:mb-12 px-1 md:px-5 p-0">
                    <CardItem
                      translateZ="100"
                      className="w-full flex justify-center mb-2"
                    >
                      <img
                        src={product.imageSrc}
                        className="h-auto w-auto md:h-72 md:w-60  object-cover  rounded-lg group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>

                    <div className="flex justify-between w-48 md:w-60 lg:w-52">
                      <CardItem
                        translateZ="50"
                        className="text-xs md:text-sm font-semibold"
                      >
                        <div className="truncate max-w-40 md:max-w-52">{product.name}</div>
                        <div className="text-xs md:text-sm font-semibold  truncate max-w-52">
                          {product.brand}
                        </div>
                        <div className="text-xs md:text-sm font-semibold  truncate max-w-52">
                        {product.price}
                        </div>
                      </CardItem>

                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-sm  md:text-lg font-normal"
                      >
                        <img onClick={()=>setLoved((prev)=>!prev)} src={loved? heartfill: heart } className="h-6 w-6 cursor-pointer"/>
                        <div className="text-center h-6 w-6 text-lg md:text-lg font-semibold">
                        {`0`}
                        </div>
                        
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

export default WishlistCards;