import CategoryCards from "./components/CollectionCards";
import BannerSlider from "./components/BannerSlider";
import { CardBody, CardContainer, CardItem } from "./components/3dCard";
import CreateProducts from "./components/CreateProducts";
import DeleteProducts from "./components/DeleteProducts";
import CreateCollections from "./components/CreateCollections";
import DeleteCollections from "./components/DeleteCollections";
import UpdateCollections from "./components/UpdateCollections";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import CollectionCards from "./components/CollectionCards";
import ProductInfo from "./pages/ProductInfo";
import WishlistCards from "./components/WishlistCards";
import UpdateProducts from "./components/UpdateProducts";
import UploadImages from "./components/UploadImages";
import Modal from "./components/AuthModal";
import Error from "./components/WrongPage";
import Error404 from "./pages/Error404Page";
import Footer from "./components/Footer";
import Cutie from "./pages/Cuties";
import Login from "./pages/Login";
import PasswordRecovery from "./pages/PasswordRecovery";
import Verification from "./pages/Verification";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import PrivacyTerms from "./pages/PrivacyTerms";
import FloatingMenu from "./components/FloatingMenu";
import Collection from "./pages/Collection";
import ErrorBoundary from "./components/ErrorBoundary";
import { cn } from "./utils/cn";
import confvars from "./appwrite/confvars";
import { handleWishlistUpdate } from "./utils/wishlist";
import {
  createProductInAppwrite,
  updateProductInAppwrite,
  deleteProductInAppwrite,
  fetchAllDocuments,
  createCollections,
  updateCollections,
  deleteCollections,
  fetchCollections,
} from "./appwrite/config";
import {
  signup,
  loginWithEmailAndPassword,
  logout,
  getCurrentSession,
  startPasswordRecovery,
  startVerification,
  updatePasswordRecovery,
  updateVerification,
  loginWithGoogle,
} from "./appwrite/auth";
import { useAppSelector, useAppDispatch } from "./redux_toolkit/hooks";

import {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  addCollection,
  updateCollection,
  deleteCollection,
  getCollections,
  selectCollections,
  selectProducts,
} from "./redux_toolkit/productSlice";

import {
  setUserData,
  setWishlist,
  selectUserData,
  selectWishlist,
} from "./redux_toolkit/userSlice";

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
  price: number;
  target: string;
  title: string;
  userid: string;
  type: string;
  slug: string;
  likes: Likes[];
}

export interface Likes {
  userid: string;
  time: number;
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
  CollectionCards,
  BannerSlider,
  ProductCards,
  Cutie,
  Login,
  Admin,
  Collection,
  Profile,
  Contact,
  PrivacyTerms,
  PasswordRecovery,
  Verification,
  Home,
  ErrorBoundary,
  CardBody,
  CardContainer,
  CardItem,
  CreateProducts,
  DeleteProducts,
  UpdateProducts,
  CreateCollections,
  UpdateCollections,
  DeleteCollections,
  UploadImages,
  Modal,
  FloatingMenu,
  Error,
  Error404,
  Footer,
  createProductInAppwrite,
  updateProductInAppwrite,
  deleteProductInAppwrite,
  fetchAllDocuments,
  signup,
  loginWithEmailAndPassword,
  logout,
  getCurrentSession,
  startPasswordRecovery,
  startVerification,
  updatePasswordRecovery,
  updateVerification,
  loginWithGoogle,
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
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  addCollection,
  updateCollection,
  deleteCollection,
  getCollections,
  selectProducts,
  selectCollections,
  setUserData,
  setWishlist,
  selectUserData,
  selectWishlist,
  handleWishlistUpdate,
};
