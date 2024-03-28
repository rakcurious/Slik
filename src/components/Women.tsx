import {
    banners,
    categories,
    products,
    CategoryCards,
    BannerSlider,
    ProductCards,
  } from "../index";
  
  function Women() {
  
      let womenBanners = banners.filter((banner)=> banner.category === "women")
      let womenCategories = categories.filter((category)=> category.category === "women")
      let womenProducts = products.filter((product)=> product.category === "women")
    return (
      <>
        
          <BannerSlider images={womenBanners} />
          <CategoryCards categories={womenCategories} />
          <ProductCards products={womenProducts} />
      </>
    );
  }
  
  export default Women;
  