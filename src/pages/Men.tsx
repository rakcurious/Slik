import { useEffect } from "react";
import {
  banners,
  categories,
  CategoryCards,
  BannerSlider,
  ProductCards,
  useAppSelector,
} from "../index";

function Men() {

  useEffect(() => {
    document.body.scrollTo(0, 0); 
});

    let menBanners = banners.filter((banner)=> banner.category === "men")
    let menCategories = categories.filter((category)=> category.category === "men")
    
  return (
    <>
      
        <BannerSlider images={menBanners} />
        <CategoryCards categories={menCategories} />
        <ProductCards category='men' />
    </>
  );
}

export default Men;
