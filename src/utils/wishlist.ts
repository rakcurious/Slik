import { Prods,Likes} from "../index";
import { updateProductInAppwrite } from "../appwrite/config";
import { updateProduct } from "../redux_toolkit/productSlice";
import { store } from "../redux_toolkit/store";

export const handleWishlistUpdate = async (
  productId: any,
  userdata: any,
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
  const product: any = products.find((product) => product.$id === productId);


  let likesArr: Likes[] = product.likes;

  let prods = product.likes?.find((like: Likes) => like.userid === userid)

    if(prods){
      likesArr = likesArr.filter(((like: Likes) => like.userid !== userid))
    } else {
      likesArr = [{userid, time: Number(Date.now())}, ...likesArr]
    }
    const updatedProduct = {...product, likes: likesArr}

  store.dispatch(updateProduct(updatedProduct));


  const res = await updateProductInAppwrite(productId, {
    title: product?.title,
    target: product?.target,
    images: product?.images,
    price: product?.price,
    brand: product?.brand,
    category: product?.category,
    type: product?.type,
    userid: product?.userid,
    likes : likesArr,

  });

  if (res) {
  } else {
    console.log("product wishlist update failed");
    store.dispatch(updateProduct(product));
  }
};
