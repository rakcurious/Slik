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

const smallImages: ImageData[] = [
    {
      imageUrl:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_-_oversized_t-shirt_big_vibe_big_print.jpg",
      collectionLink: "/collection1",
      title: "Collection 1",
      description: "Click to view Collection 1",
    },
    {
      imageUrl:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile_34.jpg",
      collectionLink: "/collection2",
      title: "Collection 2",
      description: "Click to view Collection 2",
    },
    {
      imageUrl:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-banner-copy-2_copy.jpg",
      collectionLink: "/collection3",
      title: "Collection 3",
      description: "Click to view Collection 3",
    },
    {
      imageUrl:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-Banner_43.jpg",
      collectionLink: "/collection4",
      title: "Collection 4",
      description: "Click to view Collection 4",
    },
  ];

const images: ImageData[] = [
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_banner_oversized_t-shirt_bif_vive_big_print.jpg?format=webp&w=1366&dpr=1.0",
    collectionLink: "/collection1",
    title: "Collection 1",
    description: "Click to view Collection 1",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage-banner_16.jpg?format=webp&w=1366&dpr=1.0",
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
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_21.jpg?format=webp&w=1366&dpr=1.0",
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
    swipeToSlide : true,
  };

  return (
    <div className="w-screen px-4 lg:px-10 mb-20">
      <Slider {...settings} className=" lol:hidden">
        {images.map((image, index) => (
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

      <Slider {...settings} className="lg:hidden">
        {smallImages.map((image, index) => (
          <div key={index} className="relative h-full">
            <a href={image.collectionLink}>
              <img
                src={image.imageUrl}
                alt={`Slide ${index +  1}`}
                className="w-full h-3/5 rounded-xl"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
