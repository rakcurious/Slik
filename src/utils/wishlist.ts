import { updateProductInAppwrite } from "../appwrite/config";
import { useAppDispatch, useAppSelector } from "../redux_toolkit/hooks";
import { updateProduct } from "../redux_toolkit/productSlice";

const products = useAppSelector((store)=> store.products.products);
const dispatch = useAppDispatch();

export const wishlistUpdate = async (id:string) => {
const product = products.find((product)=>product.$id === id)
let wishlist = product.wishlist
if(wishlist.has(id)){
    wishlist = wishlist.filter((userid:string) => userid !== id)
}
else {
    wishlist.push(id)
}

const updatedProduct = await updateProductInAppwrite(id, {
    ...product,
    wishlist: wishlist

  });
  if (updatedProduct) {
    dispatch(updateProduct(updatedProduct));
    console.log("Product added to wishlist");
  } else {
    console.log("Failed to add the product to wishlist");
  }
}