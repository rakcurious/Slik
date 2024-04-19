import React, { lazy, Suspense } from "react";
import { Prods, useAppSelector } from "../index";
import { selectProducts } from "../redux_toolkit/productSlice";

const ProductCard = lazy(() => import("./ProductCard"));

const ProductCards: React.FC<{ category: string; collection: string }> = ({
  category,
  collection,
}) => {

  let products = useAppSelector(selectProducts);


  if (category === "men") {
    products = products.filter((product) => product.category === "men");
  } else if (category == "women") {
    products = products.filter((product) => product.category === "women");
  }

  if (category !== collection) {
    products = products.filter((product) => product.type == collection);
  }

  return (
    <>
      <h1 className="text-center font-urbanist font-bold text-4xl mt-10">
        PRODUCTS
      </h1>
      <div className="mt-4 pb-40 font-urbanis items-start mx-auto grid grid-cols-2 gap-x-2 gap-y-10 px-2 md:grid-cols-3 md:px-5 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
        <Suspense
          fallback={
            <div className="animate-pulse  w-screen text-center font-urbanist font-semibold text-3xl">
              LOADING...
            </div>
          }
        >
          {products.map((product: Prods) => (
            <ProductCard key={product.$id} product={product}/>
          ))}
        </Suspense>
      </div>
    </>
  );
};

export default ProductCards;
