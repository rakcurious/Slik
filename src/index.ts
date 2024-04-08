import CategoryCards from "./components/CategoryCards";
import BannerSlider from "./components/BannerSlider";
import { CardBody, CardContainer, CardItem } from './components/3dCard';
import CreateProducts from "./components/CreateProducts";
import DeleteProducts from "./components/DeleteProducts";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import ProductInfo from "./components/ProductInfo";
import WishlistCards  from "./components/WishlistCards";
import UpdateProducts from "./components/UpdateProducts";
import UploadImages from "./components/UploadImages";
import { UserInfoLogout } from "./components/UserInfoLogout";
import { cn } from "./utils/cn";
import {categories, banners, products } from "./utils/data";
import confvars from "./appwrite/confvars";
import { createProductInAppwrite, updateProductInAppwrite, deleteProductInAppwrite, fetchAllDocuments } from "./appwrite/config";
import { login, logout, getCurrentSession } from "./appwrite/auth";
import { useAppSelector, useAppDispatch } from "./redux_toolkit/hooks";

export interface Prods {
  $collectionId?: string,
  $createdAt?: string,
  $databaseId?: string,
  $id?: string,
  $permissions?: string[],
  $updatedAt?: string,
  brand: string,
  category: string,
  clicks?: number,
  images: string[],
  likes?: number,
  price: number,
  target: string,
  title: string,
  userid: string,
  type: string
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
  login,
  logout,
  getCurrentSession,
  Navbar,
  ProductInfo,
  WishlistCards,
  UserInfoLogout,
  cn,
  confvars,
  useAppSelector,
  useAppDispatch
};
