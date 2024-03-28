
import {
    banners,
    categories,
    products,
    CategoryCards,
    BannerSlider,
    ProductCards,
  } from "../index";
  
  
  function Home() {
    return (
      <>
          <BannerSlider images={banners} />
          <CategoryCards categories={categories} />
          <ProductCards products={products} />
      </>
    );
  }
  
  export default Home;
  