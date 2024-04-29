// @ts-nocheck
import { useForm, SubmitHandler } from "react-hook-form";
import { Collection } from "../index";
import { useEffect, useState } from "react";
import { updateCollections } from "../appwrite/config";
import { useAppDispatch, useAppSelector } from "../redux_toolkit/hooks";
import { selectCollections, updateCollection } from "../redux_toolkit/productSlice";
import UploadImages from "./UploadImages";


type CollectionWithoutMeta = Omit<
  Collection,
  "$databaseId" | "$collectionId" | "$id" | "$permissions" | "$createdAt" | "$updatedAt"
>;

const UpdateCollections: React.FC = () => {
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const [collection, setCollection] = useState<Partial<CollectionWithoutMeta> | null>(null);
  const [id, setId] = useState("");
  const dispatch = useAppDispatch();
  const collections = useAppSelector(selectCollections);

  const { register, handleSubmit, reset, setValue, formState: { isDirty } } = useForm<CollectionWithoutMeta>({
    defaultValues: collection || {},
  });

  const getCollectionDetails = () => {
    const foundCollection = collections.find((collection) => collection.$id === id);
    if (foundCollection) {
      const updatedCollection: Partial<CollectionWithoutMeta> = {};
      for (const key in foundCollection) {
        if (
          key !== "$databaseId" &&
          key !== "$collectionId" &&
          key !== "$id" &&
          key !== "$permissions" &&
          key !== "$createdAt" &&
          key !== "$updatedAt"
        ) {
          updatedCollection[key] = foundCollection[key as keyof Collection];
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
        setValue(key as keyof CollectionWithoutMeta, collection[key]);
      });
    }
  }, [collection, setValue]);

  const onSubmit: SubmitHandler<CollectionWithoutMeta> = async (data) => {
    const updatedCollection = await updateCollections(id, {
      ...data,
      slug: slugify(data.name),
    });
    if (updatedCollection) {
      dispatch(updateCollection(updatedCollection));
      reset();
      setId("");
      alert("collection updated successfully");
    } else {
      alert("Failed to update collection");
    }
  };

  return (
    <>
    <UploadImages folder={"slik/misc"} />
      <div className="flex h-auto w-auto flex-col gap-6 items-center mb-10">
        <input
          className="h-10 w-60 rounded-xl text-center px-1"
          placeholder="collection id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button
          onClick={getCollectionDetails}
          className="h-12 w-auto px-6 py-1 text-2xl font-normal text-center bg-black text-white rounded-lg transition duration-200"
        >
          get collection
        </button>
      </div>
      {collection && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex h-auto w-auto flex-col gap-6 items-center mb-10">
              <div className="h-auto w-auto flex flex-wrap justify-center gap-4 text-xl font-semibold *:h-10 *:w-60 *:text-center *:rounded-xl *:px-1 ">
                <input placeholder="Name" {...register("name")} required />
                <input placeholder="Category" {...register("category")} required />
                <input
                  placeholder="slug"
                  {...register("slug")}
                  required
                />
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
                
              </div>
              <input
                type="submit"
                value="update collection"
                className="cursor-pointer h-12 w-auto px-6 py-1 text-2xl font-medium text-center bg-black rounded-lg text-white transition duration-200"
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
