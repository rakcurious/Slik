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

  const userid = userdata.$id;
  const product: any = products.find((product) => product.$id === productId);
  let prodWishlist: string[] = product?.wishlist;

  if (prodWishlist.includes(userid)) {
    prodWishlist = prodWishlist.filter((user: string) => user !== userid);
  } else {
    prodWishlist = [userid, ...prodWishlist];
  }

  const updatedProduct = { ...product, wishlist: prodWishlist };

  store.dispatch(setWishlist(updatedWishlist));
  store.dispatch(updateProduct(updatedProduct));

  const response = await updateWishlist(userdata.$id, updatedWishlist);
  if (response) {
  } else {
    console.log("failed to update user wishlist");
    store.dispatch(setWishlist(wishlist));
  }

  const res = await updateProductInAppwrite(productId, {
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

  if (res) {
  } else {
    console.log("product wishlist update failed");
    store.dispatch(updateProduct(product));
  }
};
