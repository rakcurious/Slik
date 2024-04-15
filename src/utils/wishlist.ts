// handleWishlistUpdate.ts
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
    // User is not authenticated
    setShowModal(true); // Show the modal with a message to log in
    return;
  }

  if (!userdata.emailVerification) {
    // User is authenticated but not verified
    setShowModal(true); // Show the modal with a message to verify email
    return;
  }

  // User is authenticated and verified, proceed with wishlist update
  const updatedWishlist = wishlist.includes(productId)
    ? wishlist.filter((id: string) => id !== productId)
    : [...wishlist, productId];

  const response = await updateWishlist(userdata.$id, updatedWishlist);
  if (response) {
    store.dispatch(setWishlist(updatedWishlist));
    console.log("Wishlist updated successfully");
  } else {
    console.log("Failed to update wishlist");
  }

  const userid = userdata.$id;
  const product: Prods = products.find((product) => product.$id === productId)
  let prodWishlist: string[] = product?.wishlist
  if (prodWishlist.includes(userid)) {
    prodWishlist = prodWishlist.filter((user: string) => user !== userid)
  } else {
    console.log(prodWishlist)
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
    console.log("wishlist updated");
  } else {
    console.log("wishlist update failed");
  }
};