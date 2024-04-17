import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppSelector } from "../redux_toolkit/hooks";
import { selectCollections } from "../redux_toolkit/productSlice";
import { useNavigate } from "react-router-dom";

const BannerSlider: React.FC<{
  page: string;
}> = ({ page }) => {

  const navigate = useNavigate();

  let collections = useAppSelector(selectCollections)

  if(page === 'men' || page === 'women'){
    collections = collections.filter((collection)=> collection.gender.toLowerCase() === page)
  }
  const navigateToCollection = (gender, id) =>{
    navigate(`/${gender}/${id}`)
  }

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
    <div className="w-screen px-4 mb-20">
      <div className="hidden lg:block">
      <Slider {...settings} >
        {collections.map((collection)=> (
            <div key={collection.$id} className="relative h-full">
                <img onClick={()=>navigateToCollection(collection.gender,collection.$id)}
                  src={collection?.bannerImages[1]}
                  alt={collection?.name}
                  className="w-full aspect-[4/1] object-cover rounded-xl"
                />
            </div>
          ))}
      </Slider>
      </div>
            <div className="lg:hidden"> 
            <Slider {...settings} >
        {collections.map((collection)=> (
            <div key={collection.$id} className="relative h-full">
              
                <img onClick={()=>navigate(`/${collection.gender}/${collection.name.toLowerCase().replace(' ','-')}`)}
                  src={collection?.bannerImages[0]}
                  alt={collection?.name}
                  className="w-full h-3/5 rounded-xl"
                />
            </div>
          ))}
      </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
