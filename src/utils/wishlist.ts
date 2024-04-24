import {
  Prods,
  updateProductInAppwrite,
  updateWishlist,
  updateProduct,
  setWishlist,
} from "../index";
import { store } from "../redux_toolkit/store";

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
  } else {
    console.log("failed to update user wishlist");
  }

  const userid = userdata.$id;
  const product: any = products.find((product) => product.$id === productId);
  let prodWishlist: string[] = product?.wishlist;
  if (prodWishlist.includes(userid)) {
    prodWishlist = prodWishlist.filter((user: string) => user !== userid);
  } else {
    prodWishlist = [userid, ...prodWishlist];
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
    wishlist: prodWishlist,
  });

  if (updatedProduct) {
    store.dispatch(updateProduct(updatedProduct));
  } else {
    console.log("product wishlist update failed");
  }
};
