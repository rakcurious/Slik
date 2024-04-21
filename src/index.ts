import CategoryCards from "./components/CollectionCards";
import BannerSlider from "./components/BannerSlider";
import { CardBody, CardContainer, CardItem } from "./components/3dCard";
import CreateProducts from "./components/CreateProducts";
import DeleteProducts from "./components/DeleteProducts";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import ProductInfo from "./pages/ProductInfo";
import WishlistCards from "./components/WishlistCards";
import UpdateProducts from "./components/UpdateProducts";
import UploadImages from "./components/UploadImages";
import { cn } from "./utils/cn";
import confvars from "./appwrite/confvars";
import {
  createProductInAppwrite,
  updateProductInAppwrite,
  deleteProductInAppwrite,
  fetchAllDocuments,
  createCollections,
  updateCollections,
  deleteCollections,
  fetchCollections,
  createWishlist,
  updateWishlist,
  fetchWishlist,
} from "./appwrite/config";
import {
  loginWithEmailAndPassword,
  logout,
  getCurrentSession,
} from "./appwrite/auth";
import { useAppSelector, useAppDispatch } from "./redux_toolkit/hooks";

export interface Prods {
  $collectionId?: string;
  $createdAt?: string;
  $databaseId?: string;
  $id?: string;
  $permissions?: string[];
  $updatedAt?: string;
  brand: string;
  category: string;
  images: string[];
  wishlist: string[];
  price: number;
  target: string;
  title: string;
  userid: string;
  type: string;
  slug:string;
}


export interface Collection {
  $collectionId?: string;
  $createdAt?: string;
  $databaseId?: string;
  $id?: string;
  $permissions?: string[];
  $updatedAt?: string;
  name: string; //Collection Name eg: Shirts or Aristobrat
  category: string; // BrandName or Men or Women
  cardImage: string; //Image on the card on homepage or women's page etc
  headerImage: string; //Image at the top of the collection page
  slug: string; //slug of the name of collection
}

export {
  CategoryCards,
  BannerSlider,
  ProductCards,
  CardBody,
  CardContainer,
  CardItem,
  CreateProducts,
  DeleteProducts,
  UpdateProducts,
  UploadImages,
  createProductInAppwrite,
  updateProductInAppwrite,
  deleteProductInAppwrite,
  fetchAllDocuments,
  loginWithEmailAndPassword,
  logout,
  getCurrentSession,
  Navbar,
  ProductInfo,
  WishlistCards,
    cn,
  confvars,
  useAppSelector,
  useAppDispatch,
  createCollections,
  updateCollections,
  deleteCollections,
  fetchCollections,
  createWishlist,
  updateWishlist,
  fetchWishlist,
};
