//@ts-nocheck
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Prods,
  updateProductInAppwrite,
  useAppDispatch,
  useAppSelector,
} from "../index";
import { updateProduct } from "../redux_toolkit/productSlice";
import { useEffect, useState } from "react";

const UpdateProducts: React.FC = () => {
  type ProductsWithoutMeta = Omit<
    Prods,
    | "$databaseId"
    | "$collectionId"
    | "$id"
    | "$permissions"
    | "$createdAt"
    | "$updatedAt"
  >;

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const [product, setProduct] = useState<Partial<ProductsWithoutMeta> | null>(
    null
  );
  const [id, setId] = useState("");
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isDirty },
  } = useForm<ProductsWithoutMeta>({
    defaultValues: product || {},
  });

  const getProductDetails = () => {
    const foundProduct = products.find((product) => product.$id === id);
    if (foundProduct) {
      const updatedProduct: Partial<ProductsWithoutMeta> = {};
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
        setValue(key as keyof ProductsWithoutMeta, product[key]);
      });
    }
  }, [product, setValue]);

  const onSubmit: SubmitHandler<ProductsWithoutMeta> = async (data) => {
    const updatedProduct = await updateProductInAppwrite(id, {
      ...data,
      slug: slugify(data.title + " " + data.category + " " + data.type),
      images: Array.isArray(data.images) ? data.images : data.images.split(","),
      wishlist: products.find((product) => product.$id === id).wishlist,
    });
    if (updatedProduct) {
      dispatch(updateProduct(updatedProduct));
      reset();
      setId("");
      alert("Product updated successfully");
    } else {
      alert("Failed to update product");
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
          className="h-12 w-48 text-2xl font-normal text-center bg-black text-white rounded-lg transition duration-200"
        >
          get product
        </button>
      </div>
      {product && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex h-auto w-auto flex-col gap-6 items-center mb-10">
              <div className="h-auto w-auto flex flex-wrap justify-center gap-4 text-xl font-semibold *:h-10 *:w-60 *:text-center *:rounded-xl *:px-1 ">
                <input placeholder="Title" {...register("title")} required />
                <input placeholder="Target" {...register("target")} required />
                <input placeholder="Images" {...register("images")} required />
                <input placeholder="Price" {...register("price")} required />
                <input placeholder="Brand" {...register("brand")} required />
                <input
                  placeholder="Category"
                  {...register("category")}
                  required
                />
                <input placeholder="UserID" {...register("userid")} required />
                <input placeholder="Type" {...register("type")} required />
              </div>
              <input
                type="submit"
                value="update product"
                className="cursor-pointer h-12 w-48 text-2xl font-medium text-center bg-black rounded-lg text-white transition duration-200"
                disabled={!isDirty}
              />
            </div>
          </form>
        </>
      )}
      <hr />
    </>
  );
};

export default UpdateProducts;
