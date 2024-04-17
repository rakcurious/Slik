import { useForm, SubmitHandler } from "react-hook-form";
import {
  UploadImages,
  useAppDispatch,
  createCollections,
  Colls,
} from "../index";
import { addCollection } from "../redux_toolkit/productSlice";

const CreateCollections: React.FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<Colls>();

  const onSubmit: SubmitHandler<Colls> = async (data) => {
    const createdCollection = await createCollections({
      ...data,
      bannerImages: data.bannerImages.split(","),
    });
    if (createdCollection) {
      dispatch(addCollection(createdCollection));
      reset();
      alert("Collection added successfully");
    } else {
      alert("Failed to add collection");
    }
  };

  return (
    <>
      <UploadImages folder={"slik/misc"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex h-auto w-auto flex-col gap-6 items-center font-urbanist mb-10">
          <div className="h-auto w-auto flex flex-wrap justify-center gap-4 text-xl font-semibold *:h-10 *:w-60 *:text-center *:rounded-xl *:px-1">
            <input placeholder="Name" {...register("name")} required />
            <input placeholder="Type" {...register("type")} required />
            <input placeholder="Gender" {...register("gender")} required />
            <input placeholder="Link" {...register("link")} required />
            <input
              placeholder="Card Image"
              {...register("cardImage")}
              required
            />
            <input
              placeholder="Header Image"
              {...register("headerImage")}
              required
            />
            <input
              placeholder="Banner Images"
              {...register("bannerImages")}
              required
            />
          </div>
          <input
            type="submit"
            value="Add Collection"
            className="h-12 cursor-pointer w-48 text-2xl font-normal text-center bg-black rounded-lg text-white transition duration-200"
          />
        </div>
      </form>
      <hr />
    </>
  );
};

export default CreateCollections;
