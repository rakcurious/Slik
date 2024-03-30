import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider: React.FC<{
  images: {
    imageUrl: string;
    collectionLink: string;
    category: string;
    size: string;
  }[];
}> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    swipeToSlide: true,
  };

  return (
    <div className="w-screen px-4 lg:px-10 mb-20">
      <div className=" lol:hidden">
      <Slider {...settings} >
        {images
          .filter((image) => image.size === "big")
          .map((image, index) => (
            <div key={index} className="relative h-full">
              <a href={image.collectionLink}>
                <img
                  src={image.imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-2/5 rounded-xl"
                />
              </a>
            </div>
          ))}
      </Slider>
      </div>
            <div className="lg:hidden"> 
      <Slider {...settings}>
        {images
          .filter((image) => image.size === "small")
          .map((image, index) => (
            <div key={index} className="relative h-full">
              <a href={image.collectionLink}>
                <img
                  src={image.imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-3/5 rounded-xl"
                />
              </a>
            </div>
          ))}
      </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
