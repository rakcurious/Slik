import { useState } from "react";
import { deleteProductInAppwrite, Prods, useAppDispatch, useAppSelector } from "../index";
import { deleteProduct } from "../redux_toolkit/productSlice";

const DeleteProducts: React.FC = () => {
  const [id, setId] = useState("");
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Prods | null>(null);
  const products = useAppSelector((state) => state.products.products);

  const getProductDetails = () => {
    const foundProduct = products.find((product) => product.$id === id);
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
      <div className="flex h-auto w-auto flex-col gap-6 items-center font-urbanist mb-10">
        <input
          className="h-10 w-60 rounded-xl text-center px-1"
          placeholder="Product ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button
          onClick={getProductDetails}
          className="h-12 w-48 text-2xl font-semibold text-center bg-black rounded-lg text-white transition duration-200"
        >
          Get product
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
              className=" h-12 w-48 text-2xl font-semibold text-center bg-purple-300 rounded-lg hover:bg-purple-400 transition duration-200"
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
