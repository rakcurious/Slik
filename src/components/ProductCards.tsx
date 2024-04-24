import React, { lazy, Suspense, useState } from "react";
import { Prods, useAppSelector, selectProducts } from "../index";

const ProductCard = lazy(() => import("./ProductCard"));

const ProductCards: React.FC<{ category: string; collection: string }> = ({
  category,
  collection,
}) => {
  const [sort, setSort] = useState("newest");

  let products: Prods[] = useAppSelector(selectProducts);

  if (category === "men" || category == "women") {
    products = products.filter((product) => product.category === category || product.category === 'unisex');
  } else if (category == "brands") {
    products = products.filter(
      (product) => product.brand.toLowerCase() === collection.toLowerCase()
    );
  }

  if (category !== collection && category !== "brands") {
    products = products.filter((product) => product.type == collection);
  }

  let prd = [...products];
  const sortedByLikes = [...prd].sort(
    (a, b) => b.wishlist.length - a.wishlist.length
  );
  const sortedByPriceHighToLow = [...prd].sort((a, b) => b.price - a.price);
  const sortedByPriceLowToHigh = [...prd].sort((a, b) => a.price - b.price);

  if (sort == "likes") {
    products = sortedByLikes;
  } else if (sort == "pricehigh") {
    products = sortedByPriceHighToLow;
  } else if (sort == "pricelow") {
    products = sortedByPriceLowToHigh;
  } else if (sort == "new") {
    products = products.reverse();
  }

  // if (
  //   (category === "men" || category === "women" || category === "home") &&
  //   products.length > 20
  // ) {
  //   products = products.slice(0, 20);
  // }

  return (
    <>
      <h1 className="text-center capitalize font-medium text-2xl lg:text-4xl mt-10">
        {category === collection
          ? "PRODUCTS"
          : category === "brands"
          ? collection
          : `${category}'s ${collection}`}
      </h1>
      {category !== collection && (
        <div className="mt-4 flex flex-col items-center justify-start">
          <p className="font-medium mb-0 translate-y-2">Sort by</p>
          <div className="mb-1 bg-transparent h-12 w-full md:w-2/3 lg:w-1/2 flex justify-center items-center gap-1 md:gap-3 mt-2 px-2 rounded-3xl ring-2 ring-violet-200 text-sm sm:text-base md:text-lg lg:text-lg font-semibold *:w-1/4 *:px-3 *:py-1 *:rounded-3xl *:cursor-pointer *:text-center *:truncate">
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
          </div>
        </div>
      )}
      <div className="mt-5 pb-10 w-screen items-start mx-auto grid grid-cols-2 gap-x-2 gap-y-5 px-2 md:grid-cols-3 md:px-5 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
        <Suspense
          fallback={
            <div className="animate-pulse mt-4 w-screen text-center font-semibold text-3xl">
              Loading...
            </div>
          }
        >
          {products.map((product: Prods) => (
            <ProductCard key={product.$id} product={product} />
          ))}
        </Suspense>
      </div>
    </>
  );
};

export default ProductCards;
