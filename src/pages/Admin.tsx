import React, { useEffect, useState } from "react";
import { Prods, Collection } from "../index";
import { fetchAllDocuments } from "../appwrite/config";
import CreateProducts from "../components/CreateProducts";
import UpdateProducts from "../components/UpdateProducts";
import DeleteProducts from "../components/DeleteProducts";
import Navbar from "../components/Navbar";
import { useAppSelector, useAppDispatch } from "../redux_toolkit/hooks";
import {
  selectCollections,
  selectProducts,
} from "../redux_toolkit/productSlice";
import { selectUserData } from "../redux_toolkit/userSlice";
import Error from "../components/WrongPage";

const Admin: React.FC = () => {
  const dispatch = useAppDispatch();
  const collections = useAppSelector(selectCollections);
  let products = useAppSelector(selectProducts);
  const [toggle, setToggle] = useState("create");
  const [topToggle, setTopToggle] = useState("products");
  const userdata = useAppSelector(selectUserData);

  useEffect(() => {
    fetchAllDocuments();
  }, [dispatch]);

  if (products) {
    products = [...products].reverse();
  }
  return (
    <>
      {userdata?.$id === "660963212d52965c7a7f" ||
      userdata?.$id === "6633e3a9e0ec5c0491bb" ? (
        <>
          <Navbar />
          <div className="h-auto w-screen flex flex-col justify-start items-center">
            <div className="mb-5 bg-transparent h-12 w-auto flex justify-center items-center gap-1 md:gap-5 mt-2 px-2 md:px-2 rounded-3xl ring-2 ring-violet-200 text-xl font-semibold *:w-auto *:px-6 *:py-1 *:rounded-full *:cursor-pointer">
              <p
                onClick={() => setTopToggle("products")}
                className={
                  topToggle === "products"
                    ? "ring-1 ring-violet-300"
                    : "hover:ring-1 hover:ring-violet-300"
                }
              >
                Products
              </p>
              <p
                onClick={() => setTopToggle("collections")}
                className={
                  topToggle === "collections"
                    ? "ring-1 ring-violet-300"
                    : "hover:ring-1 hover:ring-violet-300"
                }
              >
                Collections
              </p>
            </div>
           {topToggle === 'products' && <div className="mb-10 bg-transparent h-12 w-auto flex justify-center items-center gap-1 md:gap-5 mt-2 px-2 md:px-2 rounded-3xl ring-2 ring-violet-200 text-xl font-semibold *:w-auto *:px-6 *:py-1 *:rounded-full *:cursor-pointer">
              <p
                onClick={() => setToggle("create")}
                className={
                  toggle === "create"
                    ? "ring-1 ring-violet-300"
                    : "hover:ring-1 hover:ring-violet-300"
                }
              >
                Create
              </p>
              <p
                onClick={() => setToggle("update")}
                className={
                  toggle === "update"
                    ? "ring-1 ring-violet-300"
                    : "hover:ring-1 hover:ring-violet-300"
                }
              >
                Update
              </p>
              <p
                onClick={() => setToggle("delete")}
                className={
                  toggle === "delete"
                    ? "ring-1 ring-violet-300"
                    : "hover:ring-1 hover:ring-violet-300"
                }
              >
                Delete
              </p>
            </div>}
          </div>
          {topToggle === "products" && (
            <>
              {toggle === "create" && <CreateProducts />}
              {toggle === "update" && <UpdateProducts />}
              {toggle === "delete" && <DeleteProducts />}
              <h1 className="text-2xl mb-6 font-bold text-center">PRODUCTS</h1>
              {products && products.length > 0 ? (
                <div className="h-auto w-screen px-10 pb-10 flex flex-col justify-start items-center gap-4 text-sm font-semibold *:h-auto *:w-auto *:text-center *:rounded-xl *:px-1">
                  {products.map((product: Prods) => (
                    <div
                      onClick={() =>
                        //@ts-ignore
                        window.navigator.clipboard.writeText(product?.$id)
                      }
                      className="cursor-pointer overflow-x-0 w-screen px-4 flex flex-wrap bg-purple-200 *:truncate *:h-auto *:text-center *:p-2 *:mx-2 *:text-clip"
                      key={product.$id}
                    >
                      <p className="w-20">{product.order} • </p>
                      <p className="w-40">{product.$id}</p>
                      <p className="w-28">{product.brand}</p>
                      <p className="w-40">{product.title}</p>
                      <p className="w-28">{product.type}</p>
                      <p className="w-20">{product.category}</p>
                      <p className="w-20">₹{Number(product.price)}</p>
                      <p className="w-20">lovers: {product.lovers?.length}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-semibold text-3xl text-center">
                  No products found
                </p>
              )}
            </>
          )}

          {topToggle === "collections" && (
            <>
              <h1 className="text-2xl capitalize mb-6 font-bold text-center">
                COLLECTIONS
              </h1>
              {collections && collections.length > 0 ? (
                <div className="h-auto w-screen px-10 pb-10 flex flex-col justify-start items-center gap-4 text-sm font-semibold *:h-auto *:w-auto *:text-center *:rounded-xl *:px-1">
                  {collections.map((collection: Collection) => (
                    <div
                      onClick={() =>
                        //@ts-ignore
                        window.navigator.clipboard.writeText(collection?.$id)
                      }
                      className="cursor-pointer overflow-x-0 flex flex-wrap bg-purple-200 *:truncate *:h-8 *:w-40 *:text-center *:p-1 *:text-clip"
                      key={collection.$id}
                    > 
                      <p>{collection.$id}</p>
                      <p>{collection.name}</p>
                      <p>{collection.category}</p>
                      <p>{collection.slug}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No Collections found.</p>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <Navbar />
          <Error />
        </>
      )}
    </>
  );
};

export default Admin;
