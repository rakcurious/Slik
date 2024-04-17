// ProductCard.tsx
import React from 'react';
import { CardBody, CardContainer, CardItem, Prods } from "../index";
import { handleWishlistUpdate } from "../utils/wishlist";
import { useAppSelector } from "../redux_toolkit/hooks";
import { selectUserData, selectWishlist } from "../redux_toolkit/userSlice";
import heartfill from '../assets/heartfill.svg'
import heart from '../assets/heart.svg'
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Prods;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const userdata = useAppSelector(selectUserData);
  const wishlist = useAppSelector(selectWishlist);

  return (
    <CardContainer key={product.$id} className="inter-var col-span-1">
      <CardBody className="flex flex-col items-center justify-start  relative group/card rounded-xl w-44 sm:w-60 md:w-52 lg:w-64">
        <CardItem
          translateZ="100"
          className="w-auto flex justify-center mb-2"
        >
          <img
            onClick={() => navigate(`/product/${product.$id}`)}
            src={product.images[0]}
            className="w-full aspect-[3/4] object-cover rounded-lg group-hover/card:shadow-xl cursor-pointer"
            alt={product.title}
          />
        </CardItem>

        <div className="flex justify-start w-full">
          <CardItem
            translateZ="50"
            className="text-xs lg:text-sm w-5/6 pl-2"
          >
            <div className="truncate capitalize font-semibold">{product.title}</div>
            <div className=" font-normal truncate uppercase">
              {product.brand}
            </div>
            <div className=" mb-1 font-semibold  truncate">
              {`₹${product.price}`}
            </div>
          </CardItem>

          <CardItem
            as="div"
            translateZ="60"
            className="flex flex-col justify-start items-center text-xs lg:text-sm font-normal w-1/6"
          >
            <img onClick={() => handleWishlistUpdate(product.$id, userdata, wishlist, [], () => {})} src={wishlist.includes(product?.$id) ? heartfill : heart} className="h-4 w-4 md:h-6 md:w-6 cursor-pointer" />
            <div className="text-center h-4 w-4 md:h-6 md:w-6 font-semibold">
              {product?.wishlist.length}
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProductCard;