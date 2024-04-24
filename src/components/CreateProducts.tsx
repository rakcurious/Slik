import { useForm, SubmitHandler } from "react-hook-form";
import {
  createProductInAppwrite,
  UploadImages,
  Prods,
  useAppDispatch, addProduct
} from "../index";

const CreateProducts: React.FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<Prods>();

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const onSubmit: SubmitHandler<Prods> = async (data) => {
    const createdProduct = await createProductInAppwrite({
      ...data,
      slug: slugify(data.title+ ' ' + data.category + ' ' + data.type),
      //@ts-ignore
      images: data.images.split(","),

      wishlist: [],
    });
    if (createdProduct) {
      dispatch(addProduct(createdProduct));
      reset();
      alert("Product added successfully");
    } else {
      alert("Failed to add product");
    }
  };

  return (
    <>
      <UploadImages folder={"slik/products"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex h-auto w-auto flex-col gap-6 items-center mb-10">
          <div className="h-auto w-auto flex flex-wrap justify-center gap-4 text-xl font-semibold *:h-10 *:w-60 *:text-center *:rounded-xl *:px-1">
            <input placeholder="Title" {...register("title")} required />
            <input placeholder="Target" {...register("target")} required />
            <input placeholder="Images" {...register("images")} required />
            <input placeholder="Price" {...register("price")} required />
            <input placeholder="Brand" {...register("brand")} required />
            <input placeholder="Category" {...register("category")} required />
            <input placeholder="Cutiepie" {...register("userid")} required />
            <input placeholder="Type" {...register("type")} required />
          </div>
          <input
            type="submit"
            value="add product"
            className="cursor-pointer h-12 w-48 text-2xl font-normal text-center bg-black rounded-lg text-white transition duration-200"
          />
        </div>
      </form>
      <hr />
    </>
  );
};

export default CreateProducts;
