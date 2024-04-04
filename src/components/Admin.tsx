import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Prods } from "../utils/data";
import DeleteProducts from "./DeleteProducts";
import UpdateProducts from "./UpdateProducts";
import CreateProducts from "./CreateProducts";
import { fetchAllDocuments } from "../appwrite/config";

const Admin: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const [toggle, setToggle] = useState("create");

  useEffect(() => {
    fetchAllDocuments();
  }, [dispatch]);

  return (
    <>
      <div className="h-auto w-screen flex flex-col justify-start items-center bg-violet-100 font-urbanist">
        <div className="mb-10 bg-transparent h-12 w-auto flex justify-center items-center gap-1 md:gap-5 mt-2 px-2 md:px-6 rounded-3xl ring-2 ring-violet-200 font-urbanist text-xl font-semibold *:w-auto *:px-6 *:py-1 *:rounded-full *:cursor-pointer">
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
        {toggle === "create" && <CreateProducts />}
      </div>
      {toggle === "update" && <UpdateProducts />}
      {toggle === "delete" && <DeleteProducts />}
      <hr />
      <h1 className="text-2xl mb-6 font-urbanist font-bold text-center">
        PRODUCTS
      </h1>
      {products && products.length > 0 ? (
        <div className="h-auto w-screen px-10 flex flex-col justify-start items-center gap-4 text-sm font-semibold *:h-auto *:w-auto *:text-center *:rounded-xl *:px-1">
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
    </>
  );
};

export default Admin;
