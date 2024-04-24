import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useAppSelector, selectCollections} from '../index'
import { useNavigate } from "react-router-dom";

const BannerSlider: React.FC<{
  category: string;
}> = ({ category }) => {
  const navigate = useNavigate();

  let collections = useAppSelector(selectCollections);

  if (category === "men" || category === "women" || category ==="brands") {
    collections = collections.filter(
      (collection) => collection.category.toLowerCase() === category
    );
  }
  else if(category === 'home'){
    collections = collections.filter((collection)=>collection.category.toLowerCase() == 'men' || collection.category.toLowerCase() == 'women' )
  }

  collections.reverse();

  if(collections.length>6){
    collections = collections.slice(0,6)
 }
  
  const navigateToCollection = (category:string, slug:string) => {
    navigate(`/${category}/${slug}`);
  };

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
    <div className="w-screen px-4  mb-1 lg:mb-5">
      <div className="hidden lg:block">
        <Slider {...settings}>
          {collections.map((collection) => (
            <div key={collection.$id} className="relative h-full">
              <img
                onClick={() =>
                  navigateToCollection(collection.category, collection.slug)
                }
                src={collection?.headerImage}
                alt={collection?.name}
                className="cursor-pointer w-full aspect-[4/1] object-cover rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="lg:hidden">
        <Slider {...settings}>
          {collections.map((collection) => (
            <div key={collection.$id} className="relative h-full">
              <img
                onClick={() =>
                  navigateToCollection(collection.category, collection.slug)
                }
                src={collection?.cardImage}
                alt={collection?.name}
                className="w-full aspect-1 rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
