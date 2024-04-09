import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductImage: React.FC<{ images: string[] }> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false, // Ensure this is false
    swipeToSlide: true,
  };

  return (
    <div className="xl:hidden h-auto w-screen flex flex-col">
      <div className="w-full mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative w-full aspect-[2/3]">
              <img
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                className="absolute w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Product Details */}
      <div className="font-urbanist w-full flex flex-col items-center justify-center p-5">
        <h1 className="text-xl font-bold mb-2 capitalize text-center">
          Formal attire shadow grey trouser sfdfjsgfsfjshf
        </h1>
        <p className=" text-lg capitalize font-medium text-center">
          Adah by Leesha
        </p>
        <p className="text-lg font-semibold text-center mb-2">₹1299</p>
        <div className="flex flex-col gap-2 w-full">
          <button className="bg-black text-xl font-semibold h-14 text-white py-2 rounded-lg transition duration-500 hover:-translate-y-0.5">
            Add to Wishlist
          </button>
          <button className="bg-black text-xl font-semibold h-14 text-white py-2 rounded-lg transition duration-500 hover:-translate-y-0.5">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
