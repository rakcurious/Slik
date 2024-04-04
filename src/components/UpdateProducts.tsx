import { useForm, SubmitHandler } from "react-hook-form";
import { Prods } from "../utils/data";
import { updateProductInAppwrite } from "../appwrite/config";
import { updateProduct } from "../features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import failed from "../assets/failedemoji.svg";

const UpdateProducts: React.FC = () => {
  const [error, setError] = useState(false);
  const [product, setProduct] = useState<Partial<
    Omit<
      Prods,
      | "$databaseId"
      | "$collectionId"
      | "$id"
      | "$permissions"
      | "$createdAt"
      | "$updatedAt"
    >
  > | null>(null);
  const [id, setId] = useState("");
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isDirty },
  } = useForm<
    Omit<
      Prods,
      | "$databaseId"
      | "$collectionId"
      | "$id"
      | "$permissions"
      | "$createdAt"
      | "$updatedAt"
    >
  >({
    defaultValues: product || {},
  });

  const getProductDetails = () => {
    const foundProduct = products.find((product) => product.$id === id);
    if (foundProduct) {
      const updatedProduct: Partial<
        Omit<
          Prods,
          | "$databaseId"
          | "$collectionId"
          | "$id"
          | "$permissions"
          | "$createdAt"
          | "$updatedAt"
        >
      > = {};
      for (const key in foundProduct) {
        if (
          key !== "$databaseId" &&
          key !== "$collectionId" &&
          key !== "$id" &&
          key !== "$permissions" &&
          key !== "$createdAt" &&
          key !== "$updatedAt"
        ) {
          updatedProduct[key] = foundProduct[key as keyof Prods];
        }
      }
      setProduct(updatedProduct);
    } else {
      setProduct(null);
    }
  };

  useEffect(() => {
    if (product) {
      Object.keys(product).forEach((key) => {
        setValue(
          key as keyof Omit<
            Prods,
            | "$databaseId"
            | "$collectionId"
            | "$id"
            | "$permissions"
            | "$createdAt"
            | "$updatedAt"
          >,
          product[key]
        );
      });
    }
  }, [product, setValue]);

  const onSubmit: SubmitHandler<
    Omit<
      Prods,
      | "$databaseId"
      | "$collectionId"
      | "$id"
      | "$permissions"
      | "$createdAt"
      | "$updatedAt"
    >
  > = async (data) => {
    const updatedProduct = await updateProductInAppwrite(id, {
      ...data,
      images: Array.isArray(data.images) ? data.images : data.images.split(","),
      likes: 0,
      clicks: 0,
    });
    if (updatedProduct) {
      dispatch(updateProduct(updatedProduct));
      setError(false);
      reset();
      setId("");
      alert("Product updated successfully");
    } else {
      setError(true);
      alert("Failed to update product");
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
          className="h-12 w-48 text-2xl font-semibold text-center bg-purple-300 rounded-lg hover:bg-purple-400 transition duration-200"
        >
          Get product
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex h-auto w-auto flex-col gap-6 items-center font-urbanist mb-10">
          <div className="h-auto w-auto flex flex-wrap justify-center gap-4 text-xl font-semibold *:h-10 *:w-60 *:text-center *:rounded-xl *:px-1 ">
            <input placeholder="Title" {...register("title")} required />
            <input placeholder="Target" {...register("target")} required />
            <input placeholder="Images" {...register("images")} required />
            <input placeholder="Price" {...register("price")} required />
            <input placeholder="Brand" {...register("brand")} required />
            <input placeholder="Category" {...register("category")} required />
            <input placeholder="UserID" {...register("userid")} required />
            <input
              placeholder="Collection"
              {...register("collection")}
              required
            />
          </div>
          <input
            type="submit"
            value="Update Products"
            className="h-12 w-48 text-2xl font-semibold text-center bg-purple-300 rounded-lg hover:bg-purple-400 transition duration-200"
            disabled={!isDirty}
          />
        </div>
      </form>
      {error && (
        <div className="w-screen h-auto flex justify-center">
          <img src={failed} className="animate-bounce h-20 w-20" />
        </div>
      )}
      <hr />
    </>
  );
};

export default UpdateProducts;
