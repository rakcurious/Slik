import React, { useState } from "react";
import { CardBody, CardContainer, CardItem, Prods, selectProducts, selectUserData, selectWishlist, useAppSelector, handleWishlistUpdate, Modal } from "../index";
import heartfill from "../assets/heartfill.svg";
import heart from "../assets/heart.svg";
import { useNavigate } from "react-router-dom";

const ProductCard: React.FC<{product: Prods}> = ({ product }) => {
  const navigate = useNavigate();
  const userdata = useAppSelector(selectUserData);
  const wishlist = useAppSelector(selectWishlist);
  const products = useAppSelector(selectProducts)
  const [showModal, setShowModal] = useState(false);
  
  const isAuthenticated = !!userdata;
  const isVerified = userdata?.emailVerification || false;

  return (
    <>
    <CardContainer key={product.$id} className="inter-var col-span-1">
      <CardBody className="flex flex-col items-center justify-start  relative group/card rounded-xl w-44 sm:w-60 md:w-52 lg:w-64">
        <CardItem translateZ="100" className="w-auto flex justify-center mb-1">
          <img
            onClick={() => navigate(`/product/${product.slug}`)}
            src={product.images[0]}
            className="w-full aspect-[3/4] object-cover rounded-lg group-hover/card:shadow-xl cursor-pointer"
            alt={product.title}
          />
        </CardItem>

        <div className="flex justify-start w-full">
          <CardItem translateZ="50" className="text-xs lg:text-sm w-2/3 pl-2">
            <div className="truncate capitalize font-semibold">
              {product.title}
            </div>
            <div className="text-xs font-medium truncate uppercase">
              {product.brand}
            </div>
            <div className=" mb-1 font-semibold truncate">
              {`₹${product.price}`}
            </div>
          </CardItem>

          <CardItem
            as="div"
            translateZ="60"
            className="flex flex-col justify-start items-center text-xs lg:text-sm font-normal w-1/3"
          >
            <img alt="heart icon"
              onClick={() =>
                handleWishlistUpdate(
                  product.$id,
                  userdata,
                  wishlist,
                  products,
                  setShowModal
                )
              }
              src={wishlist?.includes(product?.$id) ? heartfill : heart}
              className="h-8 w-8 cursor-pointer"
            />
            {/* <div className="text-center h-4 w-4 md:h-6 md:w-6 font-semibold">
              {product?.wishlist.length} 
            </div> */}
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
