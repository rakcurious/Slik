import React from "react";
import { CardBody, CardContainer, CardItem, Prods, useAppDispatch, useAppSelector } from "../index";
import { handleWishlistUpdate } from "../utils/wishlist";
import { selectUserData, selectWishlist, setWishlist } from "../redux_toolkit/userSlice";
import heartfill from '../assets/heartfill.svg'
import heart from '../assets/heart.svg'
import { selectProducts } from "../redux_toolkit/productSlice";
import { useNavigate } from "react-router-dom";




const ProductCards : React.FC<{category: string}> = ({category}) => {

  const navigate = useNavigate();

  const userdata = useAppSelector(selectUserData);
  let products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector(selectWishlist);


// const handleWishlistUpdate = async (productId: any) => {
//   if (userdata) {
//     const updatedWishlist = wishlist.includes(productId)
//       ? wishlist.filter((id:string) => id !== productId)
//       : [...wishlist, productId];

//     const response = await updateWishlist(userdata.$id, updatedWishlist);
//     if (response) {
//       dispatch(setWishlist(updatedWishlist));
//       console.log("Wishlist updated successfully");
//     } else {
//       console.log("Failed to update wishlist");
//     }
//     wishlistUpdate(products, productId, userdata?.$id)
//   }
// };

  if(category === "men"){
    products = products.filter((product)=> product.category === "men")
  }
  else if(category == "women"){
    products = products.filter((product)=> product.category === "women")
  }



  return (
    <>
    <h1 className="text-center font-urbanist font-bold text-4xl mt-10">PRODUCTS</h1>
      <div className="mt-4 pb-40 font-urbanis items-start mx-auto grid grid-cols-2 gap-x-2 gap-y-10 px-2 md:grid-cols-3 md:gap-y-10 md:px-5 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
        {products.map((product:Prods) => (
          <CardContainer key={product.$id} className="inter-var col-span-1">
            <CardBody className="flex flex-col items-center justify-start  relative group/card rounded-xl w-44 sm:w-60 md:w-52 lg:w-64">
              
                <CardItem
                  translateZ="100"
                  className="w-auto flex justify-center mb-2"
                >
                  
                  <img onClick={()=>navigate(`/product/${product.$id}`)}
                    src={product.images[0]}
                    className="w-full aspect-[3/4] object-cover rounded-lg group-hover/card:shadow-xl cursor-pointer"
                    alt={product.title}
                  />
                </CardItem>
                
                <div className="flex justify-start w-full">
                      <CardItem
                        translateZ="50"
                        className="text-xs lg:text-sm w-5/6 pl-2"
                      >
                        <div className="truncate font-semibold">{product.title}</div>
                        <div className=" font-normal truncate uppercase">
                          {product.brand}
                        </div>
                        <div className=" mb-1 font-semibold  truncate">
                        {`₹${product.price}`}
                        </div>
                      </CardItem>

                      <CardItem
                        as="div"
                        translateZ="60"
                        className="flex flex-col justify-start items-center text-xs lg:text-sm font-normal w-1/6"
                      >
                        <img onClick={()=>handleWishlistUpdate(product.$id, userdata, wishlist, products)} src={wishlist.includes(product?.$id)? heartfill: heart } className="h-4 w-4 md:h-6 md:w-6 cursor-pointer"/>
                        <div className="text-center h-4 w-4 md:h-6 md:w-6 font-semibold">
                        {product?.wishlist.length}
                        </div>
                        
                      </CardItem>
                    </div>
              
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}

export default ProductCards