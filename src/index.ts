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
import { UserInfoLogout } from "./components/UserInfoLogout";
import { cn } from "./utils/cn";
import { categories, banners, products } from "./utils/data";
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
}

export interface Colls {
  $collectionId?: string;
  $createdAt?: string;
  $databaseId?: string;
  $id?: string;
  $permissions?: string[];
  $updatedAt?: string;
  name: string; //Collection Name eg: Shirts or Aristobrat
  type: string; // Brand or Category or else
  gender: string; //men or women
  link: string; //link of the collection page eg:beslik.in/men/shirts
  cardImage: string; //Image on the card on homepage or women's page etc
  headerImage: string; //Image at the top of the collection page
  bannerImages?: string[]; //Banner Image on the homepage or men's page etc
}

export {
  CategoryCards,
  BannerSlider,
  ProductCards,
  banners,
  categories,
  products,
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
  UserInfoLogout,
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
