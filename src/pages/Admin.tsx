import React, { useEffect, useState } from "react";
import {fetchAllDocuments, useAppSelector, useAppDispatch, Navbar, Colls, DeleteProducts, UpdateProducts, CreateProducts, Prods } from "../index";
import CreateCollections from "../components/CreateCollections";
import UpdateCollections from "../components/UpdateCollections";
import DeleteCollections from "../components/DeleteCollections";
import { selectCollections, selectProducts } from "../redux_toolkit/productSlice";

const Admin: React.FC = () => {
  const dispatch = useAppDispatch();
  const collections = useAppSelector(selectCollections);
  const products = useAppSelector(selectProducts);
  const [toggle, setToggle] = useState("create");
  const [topToggle, setTopToggle] = useState("products");

  useEffect(() => {
    fetchAllDocuments();
  }, [dispatch]);

  return (
    <>
    <Navbar />
      <div className="h-auto w-screen flex flex-col justify-start items-center bg-violet-100 font-urbanist">
      <div className="mb-10 bg-transparent h-12 w-auto flex justify-center items-center gap-1 md:gap-5 mt-2 px-2 md:px-2 rounded-3xl ring-2 ring-violet-200 font-urbanist text-xl font-semibold *:w-auto *:px-6 *:py-1 *:rounded-full *:cursor-pointer">
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
        <div className="mb-10 bg-transparent h-12 w-auto flex justify-center items-center gap-1 md:gap-5 mt-2 px-2 md:px-2 rounded-3xl ring-2 ring-violet-200 font-urbanist text-xl font-semibold *:w-auto *:px-6 *:py-1 *:rounded-full *:cursor-pointer">
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
        </div>
        
      </div>
      { topToggle === 'products' && <>
      {toggle === "create" && <CreateProducts />}
      {toggle === "update" && <UpdateProducts />}
      {toggle === "delete" && <DeleteProducts />}
      <hr />
      <h1 className="text-2xl mb-6 font-urbanist font-bold text-center">
        PRODUCTS
      </h1>
      {products && products.length > 0 ? (
        <div className="h-auto w-screen px-10 pb-10 flex flex-col justify-start items-center gap-4 text-sm font-semibold *:h-auto *:w-auto *:text-center *:rounded-xl *:px-1">
          {products.map((product: Prods) => (
            <div
              className="overflow-x-0 flex flex-wrap bg-purple-200 *:truncate *:h-8 *:w-40 *:text-center *:p-1 *:text-clip"
              key={product.$id}
            >
              <p>{product.$id}</p>
              <p>{product.brand}</p>
              <p>{product.title}</p>
              <p>{product.type}</p>
              <p>{product.category}</p>
              <p>{Number(product.price)}</p>
              <p>{product.userid}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
      </>}
      
     { topToggle === 'collections' && <>
      {toggle === "create" && <CreateCollections />}
      {toggle === "update" && <UpdateCollections />}
      {toggle === "delete" && <DeleteCollections />}
      <hr />
      <h1 className="text-2xl capitalize mb-6 font-urbanist font-bold text-center">
        COLLECTIONS
      </h1>
      {collections && collections.length > 0 ? (
        <div className="h-auto w-screen px-10 pb-10 flex flex-col justify-start items-center gap-4 text-sm font-semibold *:h-auto *:w-auto *:text-center *:rounded-xl *:px-1">
          {collections.map((collection: Colls) => (
            <div
              className="overflow-x-0 flex flex-wrap bg-purple-200 *:truncate *:h-8 *:w-40 *:text-center *:p-1 *:text-clip"
              key={collection.$id}
            >
              <p>{collection.$id}</p>
              <p>{collection.name}</p>
              <p>{collection.type}</p>
              <p>{collection.gender}</p>
              <p>{collection.cardImage}</p>
              <p>{collection.headerImage}</p>
              <p>{collection.bannerImages}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No Collections found.</p>
      )}
      </>}

    </>
  );
};

export default Admin;
