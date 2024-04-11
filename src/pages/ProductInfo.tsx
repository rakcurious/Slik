import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux_toolkit/hooks";
import { selectUserData } from "../redux_toolkit/userSlice";
import { selectProducts } from "../redux_toolkit/productSlice";
import { wishlistUpdate } from "../utils/wishlist";
import { useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductInfo: React.FC = () => {
  const products = useAppSelector(selectProducts).products;
  const userdata = useAppSelector(selectUserData);

  const { productid } = useParams();

  const product = products.find((product) => product.$id == productid);

  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    swipeToSlide: true,
  };

  return (
    <>
      {product && (
        <>
          <div className="hidden xl:flex h-auto overflow-hidden">
            <div className="w-2/3 overflow-y-auto flex flex-wrap p-4 justify-center scrollbar-none">
              {product?.images.map((image, index) => (
                <div key={index} className="w-1/2 p-2">
                  <img
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="w-1/3  px-4 py-10 rounded-xl fixed top-32 right-4 h-auto font-urbanist">
              <h1 className="text-xl font-bold mb-4 capitalize text-center">
                {product?.title}
              </h1>
              <p className="mb-2 gap-2 text-lg capitalize font-medium text-center">
                {product?.brand}
              </p>
              <p className="text-lg font-semibold text-center mb-4">
                ₹{product?.price}
              </p>
              <div className="flex flex-col items-center gap-2 w-full">
                <button
                  onClick={() =>
                    wishlistUpdate(products, product.$id, userdata?.$id)
                  }
                  className="bg-black text-xl w-4/5 font-semibold h-14 text-white py-2 rounded-lg transition duration-500 hover:-translate-y-0.5 hover:text-purple-100"
                >
                  {product?.wishlist.includes(userdata.$id)
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
                </button>
                <button className="bg-black text-xl w-4/5 font-semibold h-14 text-white py-2 rounded-lg transition duration-500 hover:-translate-y-0.5">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="xl:hidden h-auto w-screen flex flex-col">
            <div className="w-full mx-auto">
              <Slider {...settings}>
                {product.images.map((image, index) => (
                  <div key={index} className="relative w-full aspect-[2/3]">
                    <img
                      key={index}
                      src={image}
                      alt={product.title}
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="font-urbanist w-full flex flex-col items-center justify-center p-5">
              <h1 className="text-xl font-bold mb-2 capitalize text-center">
                {product?.title}
              </h1>
              <p className=" text-lg capitalize font-medium text-center">
                {product?.brand}
              </p>
              <p className="text-lg font-semibold text-center mb-2">
                ₹{product?.price}
              </p>
              <div className="flex flex-col gap-2 w-full">
                <button
                  onClick={() =>
                    wishlistUpdate(products, product.$id, userdata?.$id)
                  }
                  className="bg-black text-xl font-semibold h-14 text-white py-2 rounded-lg transition duration-500 hover:-translate-y-0.5"
                >
                  {product?.wishlist.includes(userdata.$id)
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
                </button>
                <button className="bg-black text-xl font-semibold h-14 text-white py-2 rounded-lg transition duration-500 hover:-translate-y-0.5">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductInfo;
