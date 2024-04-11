import React from "react";
import { CardBody, CardContainer, CardItem, Prods, useAppSelector } from "../index";
import { wishlistUpdate } from "../utils/wishlist";
import { selectUserData } from "../redux_toolkit/userSlice";
import heartfill from '../assets/heartfill.svg'
import heart from '../assets/heart.svg'
import { selectProducts } from "../redux_toolkit/productSlice";
import { useNavigate } from "react-router-dom";




const ProductCards : React.FC<{category: string}> = ({category}) => {

  const navigate = useNavigate();

  const userdata = useAppSelector(selectUserData);
  let products = useAppSelector(selectProducts).products;

  if(category === "men"){
    products = products.filter((product)=> product.category === "men")
  }
  else if(category == "women"){
    products = products.filter((product)=> product.category === "women")
  }

  return (
    <>
    <h1 className="text-center font-urbanist font-bold text-4xl mt-10">PRODUCTS</h1>
      <div className="mt-4 xl:gap-x-0 font-urbanist grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-start mx-auto gap:2 md:gap-2 lg:gap-10 pb-40 px-0 md:px-10">
        {products.map((product:Prods) => (
          <CardContainer key={product.$id} className="inter-var ">
            <CardBody className=" flex flex-col items-center justify-start h-52 w-44 md:h-full md:w-full lg:h-96 lg:w-auto relative group/card  rounded-xl mb-10 md:mb-6 xl:mb-12 px-5 p-0">
              
                <CardItem
                  translateZ="100"
                  className="w-full flex justify-center mb-2"
                >
                  
                  <img onClick={()=>navigate(`/product/${product.$id}`)}
                    src={product.images[0]}
                    className="h-auto w-auto md:h-auto xl:h-96 xl:w-auto md:w-auto object-cover  rounded-lg group-hover/card:shadow-xl cursor-pointer"
                    alt={product.title}
                  />
                </CardItem>
                
                <div className="flex justify-between w-48 md:w-60 lg:w-60">
                      <CardItem
                        translateZ="50"
                        className="text-xs md:text-sm"
                      >
                        <div className="truncate font-semibold text-base max-w-40 md:max-w-52">{product.title}</div>
                        <div className="text-xs md:text-sm font-normal  truncate max-w-52 uppercase">
                          {product.brand}
                        </div>
                        <div className="text-xs mb-1 md:text-sm font-semibold  truncate max-w-52">
                        {`₹${product.price}`}
                        </div>
                      </CardItem>

                      <CardItem
                        as="div"
                        translateZ="60"
                        className="text-sm  md:text-lg font-normal"
                      >
                        <img onClick={()=>wishlistUpdate(products, product.$id, userdata?.$id)} src={product.wishlist.includes(userdata?.$id)? heartfill: heart } className="h-6 w-6 cursor-pointer"/>
                        <div className="text-center h-6 w-6 text-lg md:text-lg font-semibold">
                        {product.wishlist.length}
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