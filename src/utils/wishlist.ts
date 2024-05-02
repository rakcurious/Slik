// @ts-nocheck
import { Prods } from "../index";
import { updateWishlist } from "../appwrite/config";
import { updateProduct } from "../redux_toolkit/productSlice";
import { store } from "../redux_toolkit/store";
import { setWishlist } from "../redux_toolkit/userSlice";

export const handleWishlistUpdate = async (
  wishIds: string[],
  wishlist: Prods[],
  userdata: any,
  productId: any,
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

  const userid = userdata.$id;
  const likeUser = {
    $collectionId: userdata.$collectionId,
    $createdAt: userdata.$createdAt,
    $databaseId: userdata.$databaseId,
    $id: userdata.$id,
    $permissions: userdata.$permissions,
    $updatedAt: userdata.$updatedAt,
  };
  const product = products.find((prod) => prod.$id == productId);

  const updatedWishlist = wishIds?.includes(productId)
    ? wishlist.filter((prod: Prods) => prod.$id !== productId)
    : [product, ...wishlist];

  store.dispatch(setWishlist(updatedWishlist));

  const updatedWishIds = wishIds.includes(productId)
    ? wishIds.filter((id) => id !== productId)
    : [productId, ...wishIds];

  let prodLovers: any[] = product.lovers;
  let prodLoverIds = prodLovers.map((user: any) => user.$id);
  prodLovers = prodLoverIds.includes(userid)
    ? prodLovers.filter((user: any) => user.$id !== userid)
    : [...prodLovers, likeUser];

  const updatedProduct = { ...product, lovers: prodLovers };

  store.dispatch(updateProduct(updatedProduct));

  const response = await updateWishlist(userdata.$id, updatedWishIds);
  if (response) {
  } else {
    console.log("failed to update user wishlist");
    store.dispatch(setWishlist(wishlist));
    store.dispatch(updateProduct(product));
  }
};
