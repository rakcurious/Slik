
import { Prods } from "..";
import { updateProductInAppwrite, updateWishlist } from "../appwrite/config";
import { updateProduct } from "../redux_toolkit/productSlice";
import { store } from "../redux_toolkit/store";
import { setWishlist } from "../redux_toolkit/userSlice"; 

export const handleWishlistUpdate = async (
  productId: any,
  userdata: any,
  wishlist: string[],
  products: Prods[],
  setShowModal: (show: boolean) => void
) => {
  if (!userdata) {
  
    setShowModal(true);
    return;
  }

  if (!userdata.emailVerification) {
    setShowModal(true);
    return;
  }

  const updatedWishlist = wishlist.includes(productId)
    ? wishlist.filter((id: string) => id !== productId)
    : [...wishlist, productId];

  const response = await updateWishlist(userdata.$id, updatedWishlist);
  if (response) {
    store.dispatch(setWishlist(updatedWishlist));
    console.log("user wishlist updated successfully");
  } else {
    console.log("failed to update user wishlist");
  }

  const userid = userdata.$id;
  const product: Prods = products.find((product) => product.$id === productId)
  let prodWishlist: string[] = product?.wishlist
  if (prodWishlist.includes(userid)) {
    prodWishlist = prodWishlist.filter((user: string) => user !== userid)
  } else {
    prodWishlist = [userid, ...prodWishlist]
  }

  const updatedProduct = await updateProductInAppwrite(productId, {
    title: product?.title,
    target: product?.target,
    images: product?.images,
    price: product?.price,
    brand: product?.brand,
    category: product?.category,
    type: product?.type,
    userid: product?.userid,
    wishlist: prodWishlist
  });

  if (updatedProduct) {
    store.dispatch(updateProduct(updatedProduct));
    console.log("product wishlist updated");
  } else {
    console.log("product wishlist update failed");
  }
};