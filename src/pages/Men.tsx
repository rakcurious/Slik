import {
  banners,
  categories,
  products,
  CategoryCards,
  BannerSlider,
  ProductCards,
} from "../index";

function Men() {

    let menBanners = banners.filter((banner)=> banner.category === "men")
    let menCategories = categories.filter((category)=> category.category === "men")
    let menProducts = products.filter((product)=> product.category === "men")
  return (
    <>
      
        <BannerSlider images={menBanners} />
        <CategoryCards categories={menCategories} />
        <ProductCards products={menProducts} />
    </>
  );
}

export default Men;
