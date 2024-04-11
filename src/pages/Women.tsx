import { useEffect } from "react";
import {
    banners,
    categories,
    products,
    CategoryCards,
    BannerSlider,
    ProductCards,
  } from "../index";
  
  function Women() {


    useEffect(() => {
      document.body.scrollTo(0, 0); 
  });
  
      let womenBanners = banners.filter((banner)=> banner.category === "women")
      let womenCategories = categories.filter((category)=> category.category === "women")
      let womenProducts = products.filter((product)=> product.category === "women")
    return (
      <>
        
          <BannerSlider images={womenBanners} />
          <CategoryCards categories={womenCategories} />
          <ProductCards category='women' />
      </>
    );
  }
  
  export default Women;
  