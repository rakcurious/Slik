import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageData {
  imageUrl: string;
  collectionLink: string;
  title: string;
  description: string;
}

const images: ImageData[] = [
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_15_7Ioswgq.jpg?format=webp&w=1366&dpr=1.0",
    collectionLink: "/collection1",
    title: "Collection 1",
    description: "Click to view Collection 1",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-banner_24.jpg?format=webp&w=1366&dpr=1.0",
    collectionLink: "/collection2",
    title: "Collection 2",
    description: "Click to view Collection 2",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner-copy_copy.jpg?format=webp&w=1366&dpr=1.0",
    collectionLink: "/collection3",
    title: "Collection 3",
    description: "Click to view Collection 3",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage-banner_16.jpg?format=webp&w=1366&dpr=1.0",
    collectionLink: "/collection4",
    title: "Collection 4",
    description: "Click to view Collection 4",
  },
];

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className="w-screen rounded-xl">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-full">
            <a href={image.collectionLink}>
              <img
                src={image.imageUrl}
                alt={`Slide ${index + 1}`}
                className="w-full h-['30rem']"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
