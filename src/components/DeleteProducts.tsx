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
            <div className="overflow-x-0 w-auto rounded-xl font-bold px-4 flex flex-wrap bg-purple-200 *:truncate *:h-auto *:text-center *:p-2 *:mx-2 *:text-clip">
              <p className="w-48">{product.$id}</p>
              <p className="w-28">{product.brand}</p>
              <p className="w-40">{product.title}</p>
              <p className="w-28">{product.type}</p>
              <p className="w-20">{product.category}</p>
              <p className="w-20">₹{Number(product.price)}</p>
              <p className="w-20">lovers: {product.lovers?.length}</p>
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
