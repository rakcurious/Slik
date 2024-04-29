import { useState } from "react";

import { deleteProductInAppwrite } from "../appwrite/config";
import { useAppDispatch, useAppSelector } from "../redux_toolkit/hooks";
import { selectProducts } from "../redux_toolkit/productSlice";
import { deleteProduct } from "../redux_toolkit/productSlice";
import { Prods } from "../index";

const DeleteProducts: React.FC = () => {
  const [id, setId] = useState("");
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Prods | null>(null);
  const products = useAppSelector(selectProducts);

  const getProductDetails = () => {
    const foundProduct = products.find((product) => product.$id === id);
    //@ts-ignore
    setProduct(foundProduct);
  };
  const handleDeleteProduct = async () => {
    const isDeleted = await deleteProductInAppwrite(id);
    if (isDeleted) {
      dispatch(deleteProduct(id));
      setId("");
      alert("Product deleted successfully");
      setProduct(null);
    } else {
      alert("Failed to delete product");
    }
  };

  return (
    <>
      <div className="flex h-auto w-auto flex-col gap-6 items-center mb-10">
        <input
          className="h-10 w-60 rounded-xl text-center px-1"
          placeholder="product id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button
          onClick={getProductDetails}
          className="h-12 w-48 text-2xl font-normal text-center bg-black rounded-lg text-white transition duration-200"
        >
          get product
        </button>

        {product && (
          <>
            <div className="overflow-x-0 flex flex-wrap bg-purple-200 *:truncate *:h-8 *:w-40 *:text-center *:p-1 *:text-clip ">
              <p>{product ? product.$id : ""}</p>
              <p>{product ? product.brand : ""}</p>
              <p>{product ? product.title : ""}</p>
              <p>{product ? product.type : ""}</p>
              <p>{product ? product.category : ""}</p>
              <p>{product ? Number(product.price) : ""}</p>
              <p>{product ? product.userid : ""}</p>
              <p>{product ? product.target : ""}</p>
              <p>{product ? product.images : ""}</p>
            </div>

            <button
              className="h-12 w-48 text-2xl font-normal text-center text-white bg-black rounded-lg"
              onClick={handleDeleteProduct}
            >
              delete product
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default DeleteProducts;
