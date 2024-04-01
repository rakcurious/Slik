// ProductsPage.tsx
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
} from "../features/users/userSlice";
import {
  createProductInAppwrite,
  updateProductInAppwrite,
  deleteProductInAppwrite,
  fetchAllDocuments,
} from "../appwrite/config";
import { nanoid } from "@reduxjs/toolkit";
import { Prods } from "../utils/data";
import { store } from "../app/store";

const ProductsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  const [productId, setProductId] = useState(nanoid());
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [userid, setUserid] = useState("");
  const [collection, setCollection] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState("create");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const productsData = await fetchAllDocuments();
      if (productsData) {
        dispatch(getProducts(productsData));
      }
      setIsLoading(false);
    };

    fetchData();
  }, [dispatch]);

  const handleCreateProduct = async () => {
    const newProduct: Prods = {
      id: productId,
      title,
      target,
      images,
      price,
      brand,
      category,
      userid,
      collection,
      likes: 0,
      clicks: 0,
    };
    dispatch(addProduct(newProduct));
    await createProductInAppwrite(newProduct);
  };
  const handleUpdateProduct = async () => {
    const updatedProduct: Prods = {
      id: productId,
      title,
      target,
      images,
      price,
      brand,
      category,
      userid,
      collection,

    };
    dispatch(updateProduct(updatedProduct));
    await updateProductInAppwrite(productId, updatedProduct);
  };

  const handleDeleteProduct = async () => {
    dispatch(deleteProduct(productId));
    await deleteProductInAppwrite(productId);
  };

  return (
    <>
      <div className="h-auto w-screen flex flex-col justify-start items-center bg-violet-100 font-urbanist">
        <div className="mb-10 bg-transparent h-12 w-auto flex justify-center items-center gap-1 md:gap-5 mt-2 px-2 md:px-6 rounded-3xl  ring-2 ring-violet-200 font-urbanist text-xl  font-semibold  *:w-auto *:px-6 *:py-1 *:rounded-full *:cursor-pointer">
          <p onClick={()=> setToggle("create")} className={ toggle == "create" ?"ring-1 ring-violet-300": "hover:ring-1 hover:ring-violet-300"}>
            Create
          </p>
          <p onClick={()=> setToggle("update")} className={ toggle == "update" ?"ring-1 ring-violet-300": "hover:ring-1 hover:ring-violet-300"}>
            Update
          </p>
          <p onClick={()=> setToggle("delete")} className={ toggle == "delete" ?"ring-1 ring-violet-300": "hover:ring-1 hover:ring-violet-300"}>
            Delete
          </p>
        </div>
        {toggle == "create" && (
          <div className="flex h-auto w-auto flex-col gap-6 items-center font-urbanist mb-10">
            <div className="h-auto w-auto flex flex-wrap justify-center gap-4 text-xl font-semibold *:h-10 *:w-60 *:text-center *:rounded-xl *:px-1 ">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Target"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              />
              <input
                type="text"
                placeholder="Images"
                value={images.join(",")}
                onChange={(e) => setImages(e.target.value.split(","))}
              />
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <input
                type="text"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <input
                type="text"
                placeholder="User ID"
                value={userid}
                onChange={(e) => setUserid(e.target.value)}
              />
              <input
                type="text"
                placeholder="Collection"
                value={collection}
                onChange={(e) => setCollection(e.target.value)}
              />
            </div>
            <button
              className="h-12 w-48 text-2xl font-semibold text-center bg-purple-300 rounded-lg hover:bg-purple-400 transition duration-200"
              onClick={handleCreateProduct}
            >
              add product
            </button>
          </div>
        )}
      </div>
      {toggle == "update" && (
        <div className="flex h-auto w-auto flex-col gap-6 items-center font-urbanist mb-10">
          <input
            className="text-xl font-semibold h-10 w-80 text-center rounded-xl px-1 "
            type="text"
            placeholder="Product ID"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
          <div className="h-auto w-auto flex flex-wrap justify-center gap-4 text-xl font-semibold *:h-10 *:w-60 *:text-center *:rounded-xl *:px-1 ">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Target"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
            <input
              type="text"
              placeholder="Images"
              value={images.join(",")}
              onChange={(e) => setImages(e.target.value.split(","))}
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <input
              type="text"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="text"
              placeholder="User ID"
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
            />
            <input
              type="text"
              placeholder="Collection"
              value={collection}
              onChange={(e) => setCollection(e.target.value)}
            />
          </div>
          <button
            className="my-10 h-12 w-48 text-2xl font-semibold text-center bg-purple-300 rounded-lg hover:bg-purple-400 transition duration-200"
            onClick={handleUpdateProduct}
          >
            update product
          </button>
        </div>
      )}

      {toggle == "delete" && (
        <div className="flex h-auto w-auto flex-col gap-6 items-center font-urbanist mb-10">
          <input
            className="text-xl font-semibold h-10 w-80 text-center rounded-xl px-1 "
            type="text"
            placeholder="Product ID"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
          <button
            className="my-10 h-12 w-48 text-2xl font-semibold text-center bg-purple-300 rounded-lg hover:bg-purple-400 transition duration-200"
            onClick={handleDeleteProduct}
          >
            delete product
          </button>
        </div>
      )}

      <hr />
      <h1 className="text-2xl mb-6 font-urbanist font-bold text-center ">
        PRODUCTS
      </h1>

      {isLoading && (
        <h1 className="text-2xl font-urbanist font-bold text-center animate-pulse text-gray-500 mt-10">
          Loading
        </h1>
      )}
      {!isLoading && (
        <div className="h-auto w-screen flex flex-col justify-start items-center gap-4 text-sm font-semibold *:h-auto *:w-auto *:text-center *:rounded-xl *:px-1 ">
          {products.map((product: Prods) => (
            <div
              className="overflow-x-0 flex flex-wrap bg-purple-200 *:truncate *:h-8 *:w-40 *:text-center *:p-1 *:text-clip "
              key={product.id}
            >
              <p>{product.brand}</p>
              <p>{product.title}</p>
              <p>{product.id}</p>
              <p>{product.collection}</p>
              <p>{product.category}</p>
              <p>{Number(product.price)}</p>
              <p>{product.userid}</p>
              <p>{product.target}</p>
              <p>{product.images}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsPage;
