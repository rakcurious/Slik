import React, { lazy, Suspense, useState } from "react";
import { Prods, useAppSelector } from "../index";
import { selectProducts } from "../redux_toolkit/productSlice";

const ProductCard = lazy(() => import("./ProductCard"));

const ProductCards: React.FC<{ category: string; collection: string }> = ({
  category,
  collection
}) => {

  const [sort, setSort] = useState('likes')

  let products: Prods[] = useAppSelector(selectProducts);


  if (category === "men" || category == "women") {
    products = products.filter((product) => product.category === category);
    
  } else if (category == "brands") {
    products = products.filter((product) => product.brand === category);
     }

  if ((category !== collection) && (category !== 'brands')) {
    products = products.filter((product) => product.type == collection);
  }

  let prd = [...products];
  const sortedByLikes = [...prd].sort((a, b) => b.wishlist.length - a.wishlist.length);
  const sortedByPriceHighToLow = [...prd].sort((a, b) => b.price - a.price);
  const sortedByPriceLowToHigh = [...prd].sort((a, b) => a.price - b.price);

  if (sort == 'likes') {
    products = sortedByLikes;
  } else if (sort == 'pricehigh') {
    products = sortedByPriceHighToLow;
  } else if (sort == 'pricelow') {
    products = sortedByPriceLowToHigh;
  } else if(sort == 'new'){
    products = products.reverse();
  }

  if((category === 'men' || category === 'women' || category === 'home') && products.length>20){
     products = products.slice(0,20)
  }

  return (
    <>
      <h1 className="capitalize text-center font-urbanist font-medium text-4xl mt-10">
        {category === collection? 'PRODUCTS' : collection}
      </h1>
      <div className="mt-4 flex flex-col items-center justify-start font-urbanist">
        <p className="font-medium mb-0 translate-y-2">Sort by</p>
      {category !== collection && <div className="mb-1 bg-transparent h-12 w-full md:w-2/3 lg:w-1/2 flex justify-center items-center gap-1 md:gap-3 mt-2 px-2 rounded-3xl ring-2 ring-violet-200 font-urbanist text-sm sm:text-base md:text-lg lg:text-lg font-semibold *:w-1/4 *:px-3 *:py-1 *:rounded-3xl *:cursor-pointer *:text-center *:truncate">
          <p
            onClick={() => setSort("likes")}
            className={
              sort === "likes"
                ? "ring-1 ring-violet-300"
                : "hover:ring-1 hover:ring-violet-300"
            }
          >
            Popularity
          </p>
          <p
            onClick={() => setSort("pricehigh")}
            className={
              sort === "pricehigh"
                ? "ring-1 ring-violet-300"
                : "hover:ring-1 hover:ring-violet-300"
            }
          >
            High Price
          </p>
          <p
            onClick={() => setSort("pricelow")}
            className={
              sort === "pricelow"
                ? "ring-1 ring-violet-300"
                : "hover:ring-1 hover:ring-violet-300"
            }
          >
            Low Price
          </p>
          <p
            onClick={() => setSort("new")}
            className={
              sort === "new"
                ? "ring-1 ring-violet-300"
                : "hover:ring-1 hover:ring-violet-300"
            }
          >
            Newest
          </p>
          
        </div>}
        </div>
      <div className="mt-10 pb-40 font-urbanis items-start mx-auto grid grid-cols-2 gap-x-2 gap-y-10 px-2 md:grid-cols-3 md:px-5 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
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
