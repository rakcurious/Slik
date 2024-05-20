import React, { useState } from "react";
import { Prods } from "../index";
import { useAppSelector } from "../redux_toolkit/hooks.ts";
import { selectLikes, selectProducts } from "../redux_toolkit/productSlice.ts";
import ProductCard from "./ProductCard.tsx";

const ProductCards: React.FC<{ category: string; collection: string }> = ({
  category,
  collection,
}) => {
  const [sort, setSort] = useState("new");

  let products: Prods[] = useAppSelector(selectProducts);
  let likeList = useAppSelector(selectLikes);

  if (category === "men" || category == "women") {
    products = products.filter(
      (product) =>
        product.category === category || product.category === "unisex"
    );
  } else if (category == "brands") {
    products = products.filter(
      (product) => product.brand.toLowerCase() === collection.toLowerCase()
    );
  }

  if (category !== collection && category !== "brands") {
    products = products.filter(
      (product) => product.type.toLowerCase() == collection.toLowerCase()
    );
  }

  const filteredLikes = likeList?.filter((like: any) =>
    products.some((product) => product.$id === like.$id)
  );

  if (filteredLikes.length > 0) {
    filteredLikes?.sort(
      (a: any, b: any) => b.wishlist.length - a.wishlist.length
    );
  }

  let prd = [...products];

  const sortedByLikes = filteredLikes?.map((prod: any) =>
    products?.find((pro) => pro.$id === prod.$id)
  );
  const sortedByPriceHighToLow = [...prd].sort((a, b) => b.price - a.price);
  const sortedByPriceLowToHigh = [...prd].sort((a, b) => a.price - b.price);

  if (sort === "likes") {
    if (filteredLikes.length > 0) {
      //@ts-ignore
      products = sortedByLikes;
    }
  } else if (sort === "pricehigh") {
    products = sortedByPriceHighToLow;
  } else if (sort === "pricelow") {
    products = sortedByPriceLowToHigh;
  } else if (sort === "new") {
    products = [...products].reverse();
  }
  return (
    <>
      <h1 className="text-center capitalize font-medium text-2xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl mt-6 lg:mt-10 xl:mt-16">
        {category === collection
          ? "ALL PRODUCTS"
          : category === "brands"
          ? collection?.toUpperCase()
          : `${category}'s ${collection}`}
      </h1>
      {category !== collection && (
        <div className="md:mt-4 flex flex-col items-center justify-start">
          <p className="font-medium mb-0 translate-y-2">Sort by</p>
          <div className="mb-1 bg-transparent h-12 w-11/12 md:w-2/3 lg:w-1/2 2xl:w-2/5 flex justify-center items-center gap-1 md:gap-3 mt-2 px-2 rounded-3xl ring-2 ring-violet-200 text-sm sm:text-base md:text-lg lg:text-lg 2xl:text-xl font-semibold *:w-1/4 *:px-2 *:py-1 *:rounded-3xl *:cursor-pointer *:text-center *:truncate">
            <p
              onClick={() => setSort("likes")}
              className={
                sort === "likes"
                  ? "ring-1 ring-violet-300"
                  : "hover:ring-1 hover:ring-violet-300"
              }
            >
              Love
            </p>
            <p
              onClick={() => setSort("pricehigh")}
              className={
                sort === "pricehigh"
                  ? "ring-1 ring-violet-300"
                  : "hover:ring-1 hover:ring-violet-300"
              }
            >
              Price{" "}
              <svg
                className="inline h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 xl:w-4 xl:h-4 2xl:h-4 2xl:w-4"
                enableBackground="new 0 0 256 256"
                height="256px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 256 256"
                width="256px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                {" "}
                <path d="M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z" />
              </svg>
            </p>
            <p
              onClick={() => setSort("pricelow")}
              className={
                sort === "pricelow"
                  ? "ring-1 ring-violet-300"
                  : "hover:ring-1 hover:ring-violet-300"
              }
            >
              Price{" "}
              <svg
                className="inline h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 xl:w-4 xl:h-4 2xl:h-4 2xl:w-4"
                enableBackground="new 0 0 256 256"
                height="256px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 256 256"
                width="256px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path d="M33.861,164.526l89.6,89.6c2.5,2.5,6.551,2.5,9.051,0l89.6-89.6c2.5-2.5,2.5-6.551,0-9.051s-6.742-2.5-9.242,0L134,234.151  V6.401c0-3.535-2.466-6.4-6-6.4s-6,2.865-6,6.4v227.75l-78.881-78.676c-1.25-1.25-2.993-1.875-4.629-1.875s-3.326,0.625-4.576,1.875  C31.413,157.976,31.361,162.026,33.861,164.526z" />
              </svg>
            </p>
            <p
              onClick={() => setSort("new")}
              className={
                sort === "new"
                  ? "ring-1 ring-violet-300"
                  : "hover:ring-1 hover:ring-violet-300"
              }
            >
              New
            </p>
          </div>
        </div>
      )}
      {products.length !== 0 ? (
        <div className="mt-5 lg:mt-10 xl:mt-16 grid grid-cols-2 gap-5 px-4 sm:gap-10 md:grid-cols-3 md:px-5 lg:grid-cols-3 lg:gap-20 xl:grid-cols-4 xl:gap-16 text-black pb-5 xl:mr-5">
          {products.map((product: Prods) => (
            <ProductCard key={product?.$id} product={product} />
          ))}
        </div>
      ) : (
        <div className="px-10 mt-20 flex flex-col items-center justify-center w-screen h-auto bg-transparent">
          <img
            src="https://res.cloudinary.com/dnhz5reqf/image/upload/v1713705966/slik/slikbearog_wx3vqt.png"
            alt="Slik"
            className="mt-24 lg:mt-0 mb-0 h-60 w-60 animate-bounce"
          />
          <div className="mb-5 w-screen animate-pulse text-center font-medium text-3xl">
            LOADING
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCards;
