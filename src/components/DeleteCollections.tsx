import { useState } from "react";
import {
  Colls,
  deleteCollections,
  useAppDispatch,
  useAppSelector,
} from "../index";
import {
  deleteCollection,
  selectCollections,
} from "../redux_toolkit/productSlice";

const DeleteCollections: React.FC = () => {
  const [id, setId] = useState("");
  const dispatch = useAppDispatch();
  const [collection, setCollection] = useState<Colls | null>(null);
  const collections = useAppSelector(selectCollections);

  const getCollectionDetails = () => {
    const foundCollection = collections.find(
      (collection) => collection.$id === id
    );
    setCollection(foundCollection);
  };
  const handleDeleteCollection = async () => {
    const isDeleted = await deleteCollections(id);
    if (isDeleted) {
      dispatch(deleteCollection(id));
      setId("");
      alert("Collection deleted successfully");
      setCollection(null);
    } else {
      alert("Failed to delete collection");
    }
  };

  return (
    <>
      <div className="flex h-auto w-auto flex-col gap-6 items-center font-urbanist mb-10">
        <input
          className="h-10 w-60 rounded-xl text-center px-1"
          placeholder="collection id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button
          onClick={getCollectionDetails}
          className="h-12 w-48 text-2xl font-normal text-center bg-black rounded-lg text-white transition duration-200"
        >
          Get collection
        </button>

        {collection && (
          <>
            <div className="overflow-x-0 flex flex-wrap bg-purple-200 *:truncate *:h-8 *:w-40 *:text-center *:p-1 *:text-clip ">
              <p>{collection ? collection.$id : ""}</p>
              <p>{collection ? collection.name : ""}</p>
              <p>{collection ? collection.type : ""}</p>
              <p>{collection ? collection.gender : ""}</p>
              <p>{collection ? collection.link : ""}</p>
              <p>{collection ? collection.cardImage : ""}</p>
              <p>{collection ? collection.headerImage : ""}</p>
              <p>{collection ? collection.bannerImages : ""}</p>
            </div>

            <button
              className="h-12 w-48 text-2xl font-normal text-center bg-purple-300 rounded-lg hover:bg-purple-400 transition duration-200"
              onClick={handleDeleteCollection}
            >
              delete collection
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default DeleteCollections;
