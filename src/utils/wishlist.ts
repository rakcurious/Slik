import { Prods } from "..";
import { updateProductInAppwrite } from "../appwrite/config";
import { useAppDispatch, useAppSelector } from "../redux_toolkit/hooks";
import { updateProduct } from "../redux_toolkit/productSlice";
import { store } from "../redux_toolkit/store";


// const products = useAppSelector((store)=> store.products.products);
// const dispatch = useAppDispatch();

export const wishlistUpdate = async (products: Prods[], id:string, userid:string) => {
const product = products.find((product)=>product.$id === id)
let wishlist = product.wishlist
if(wishlist.includes(userid)){
    wishlist = wishlist.filter((user:string) => user !== userid)
}
else {
    console.log(wishlist)
    wishlist = [...wishlist, userid]
}

const updatedProduct = await updateProductInAppwrite(id, {
    title: product?.title,
    target:product?.target,
    images:product?.images,
    price:product?.price,
    brand:product?.brand,
    category:product?.category,
    type:product?.type,
    userid:product?.userid,
    wishlist: wishlist

  });
  if (updatedProduct) {
    store.dispatch(updateProduct(updatedProduct));
    console.log("Product added to wishlist");
  } else {
    console.log("Failed to add the product to wishlist");
  }
}