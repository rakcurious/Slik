import { useForm, SubmitHandler } from "react-hook-form";
import { Colls, updateCollections, updateProductInAppwrite, useAppDispatch, useAppSelector } from "../index";
import { selectCollections, updateCollection, updateProduct } from "../redux_toolkit/productSlice";
import { useEffect, useState } from "react";

const UpdateCollections: React.FC = () => {
  const [collection, setCollection] = useState<Partial<
    Omit<
      Colls,
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
  const collections = useAppSelector(selectCollections);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isDirty },
  } = useForm<
    Omit<
      Colls,
      | "$databaseId"
      | "$collectionId"
      | "$id"
      | "$permissions"
      | "$createdAt"
      | "$updatedAt"
    >
  >({
    defaultValues: collection || {},
  });

  const getCollectionDetails = () => {
    const foundCollection = collections.find((collection) => collection.$id === id);
    console.log(collections)
    console.log(foundCollection)
    if (foundCollection) {
      const updatedCollection: Partial<
        Omit<
          Colls,
          | "$databaseId"
          | "$collectionId"
          | "$id"
          | "$permissions"
          | "$createdAt"
          | "$updatedAt"
        >
      > = {};
      for (const key in foundCollection) {
        if (
          key !== "$databaseId" &&
          key !== "$collectionId" &&
          key !== "$id" &&
          key !== "$permissions" &&
          key !== "$createdAt" &&
          key !== "$updatedAt"
        ) {
          updatedCollection[key] = foundCollection[key as keyof Prods];
        }
      }
      setCollection(updatedCollection);
    } else {
      setCollection(null);
    }
  };

  useEffect(() => {
    if (collection) {
      Object.keys(collection).forEach((key) => {
        setValue(
          key as keyof Omit<
            Colls,
            | "$databaseId"
            | "$collectionId"
            | "$id"
            | "$permissions"
            | "$createdAt"
            | "$updatedAt"
          >,
          collection[key]
        );
      });
    }
  }, [collection, setValue]);

  const onSubmit: SubmitHandler<
    Omit<
      Colls,
      | "$databaseId"
      | "$collectionId"
      | "$id"
      | "$permissions"
      | "$createdAt"
      | "$updatedAt"
    >
  > = async (data) => {
    const updatedCollection = await updateCollections(id, {
      ...data,
      bannerImages: Array.isArray(data.bannerImages
      ) ? data.bannerImages : data.bannerImages.split(",")
    });
    if (updatedCollection) {
      dispatch(updateCollection(updatedCollection));
      reset();
      setId("");
      alert("collectin updated successfully");
    } else {
      alert("Failed to update collection");
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
          onClick={getCollectionDetails}
          className="h-12 w-auto px-6 py-1 text-2xl font-normal text-center bg-black text-white rounded-lg transition duration-200"
        >
          Get collection
        </button>
      </div>
      {collection && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex h-auto w-auto flex-col gap-6 items-center font-urbanist mb-10">
              <div className="h-auto w-auto flex flex-wrap justify-center gap-4 text-xl font-semibold *:h-10 *:w-60 *:text-center *:rounded-xl *:px-1 ">
              <input placeholder="Name" {...register("name")} required />
            <input placeholder="Type" {...register("type")} required />
            <input placeholder="Gender" {...register("gender")} required />
            <input placeholder="Link" {...register("link")} required />
            <input placeholder="Card Image" {...register("cardImage")} required />
            <input placeholder="Header Image" {...register("headerImage")} required />
            <input placeholder="Banner Image" {...register("bannerImages")} required />
              </div>
              <input
                type="submit"
                value="Update Collection"
                className="h-12 w-auto px-6 py-1 text-2xl font-semibold text-center bg-black rounded-lg text-white transition duration-200"
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

export default UpdateCollections;
