import {
  banners,
  categories,
  CategoryCards,
  BannerSlider,
  ProductCards,
  useAppSelector,
} from "../index";

function Men() {

  const products = useAppSelector((store)=> store.products.products)

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
