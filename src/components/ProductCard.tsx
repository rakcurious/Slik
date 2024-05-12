import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./3dCard";
import Modal from "./AuthModal";
import { Prods } from "../index";
import {
  selectUserData,
  selectWishlist,
  selectWishlistIds,
} from "../redux_toolkit/userSlice";
import { selectLikes, selectProducts } from "../redux_toolkit/productSlice";
import { useAppSelector } from "../redux_toolkit/hooks";
import heartfill from "../assets/heartfill.svg";
import heart from "../assets/heart.svg";
import { useNavigate } from "react-router-dom";
import { handleWishlistUpdate } from "../utils/wishlist";

const ProductCard: React.FC<{ product: Prods }> = ({ product }) => {
  const navigate = useNavigate();
  const userdata = useAppSelector(selectUserData);
  const products = useAppSelector(selectProducts);
  const wishlist = useAppSelector(selectWishlist);
  const wishIds = useAppSelector(selectWishlistIds);
  let likeList = useAppSelector(selectLikes);

  let x;
  if (likeList.length > 0) {
    x = likeList?.find((pro) => pro.$id === product.$id).wishlist?.length;
  }

  const [showModal, setShowModal] = useState(false);

  const isAuthenticated = !!userdata;
  const isVerified = userdata?.emailVerification || false;

  return (
    <>
      <CardContainer key={product.$id} className="inter-var col-span-1 w-full">
        <CardBody className="flex flex-col items-center justify-start relative group/card rounded-xl w-full">
          <CardItem
            translateZ="100"
            className="w-full flex justify-center mb-1"
          >
            <img
              onClick={() => navigate(`/product/${product.slug}`)}
              src={product.images[0]}
              className="w-full h-auto aspect-[2/3] object-cover rounded-lg group-hover/card:shadow-xl cursor-pointer"
              alt={product.title}
            />
          </CardItem>

          <div className="flex justify-start w-full xl:mt-1">
            <CardItem
              translateZ="50"
              className="text-xs sm:text-sm md:text-sm lg:text-base 2xl:text-xl w-3/4 sm:w-5/6 pl-2"
            >
              <div className="truncate capitalize font-semibold">
                {product.title}
              </div>
              <div className="font-medium truncate lg:text-base uppercase">
                {product.brand}
              </div>
              <div className=" mb-1 font-semibold truncate">
                {`₹${product.price.toLocaleString("en-IN")}`}
              </div>
            </CardItem>

            <CardItem
              as="div"
              translateZ="60"
              className="flex flex-col justify-start items-center text-xs lg:text-sm xl:text-base 2xl:text-lg font-semibold w-1/4 sm:w-1/6"
            >
              <img
                alt="heart icon"
                onClick={() =>
                  handleWishlistUpdate(
                    wishIds,
                    wishlist,
                    userdata,
                    product.$id,
                    products,
                    likeList,
                    setShowModal
                  )
                }
                src={wishIds?.includes(product?.$id) ? heartfill : heart}
                className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10 cursor-pointer"
              />
              <div className="text-center h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-16 2xl:w-16">
                {x}
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <Modal
        isOpen={showModal}
        isAuthenticated={isAuthenticated}
        isVerified={isVerified}
        onClose={() => setShowModal(false)}
        onLogin={() => {
          navigate("/login");
          setShowModal(false);
        }}
      />
    </>
  );
};

export default ProductCard;
