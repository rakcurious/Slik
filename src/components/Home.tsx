
import {
    banners,
    categories,
    products,
    CategoryCards,
    BannerSlider,
    ProductCards,
  } from "../index";
import Admin from "./Admin";
import CreateProducts from "./CreateProducts";
import UpdateProducts from "./UpdateProducts";
import Upload from "./UploadImages";
import Loki from "./login";
import LoginComponent from "./login";
  
  
  function Home() {
    return (
      <> 
          <UpdateProducts />
      </>
    );
  }
  
  export default Home;
  