// @ts-nocheck
import { useCallback, useRef, useState } from "react";

const UploadImages: React.FC<{
  folder: string;
}> = ({ folder }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const picsRef = useRef();
  const urlRef = useRef(null);
  const [share, setShare] = useState(false);

  const copyUrlToClipboard = useCallback(
    (id: number) => {
      window.navigator.clipboard.writeText(imageUrls[id]);
    },
    [imageUrls]
  );
  const copyAll = useCallback(() => {
    window.navigator.clipboard.writeText(imageUrls.join(","));
    setShare(true);
    setTimeout(() => {
      setShare(false)
      setImageUrls([])
    }, 1000);
  }, [imageUrls]);

  function submitImages() {
    const fileList = picsRef.current.files;
    const filesArray = Array.from(fileList);

    filesArray.forEach((file) => {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "beslik");
      data.append("folder", folder);

      fetch(
        `https://api.cloudinary.com/v1_1/dnhz5reqf/image/upload?upload_preset=beslik&log=true`,
        {
          method: "post",
          body: data,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          const url = data.secure_url;
          setImageUrls((prev) => [...prev, url]);
        })
        .catch((error) => console.log(error));
    });
  }

  return (
    <>
      <div className="w-screen h-auto flex-col gap-y-4 flex items-center mb-10">
        <input className="pl-32" type="file" multiple ref={picsRef} />
        <button
          className="h-12 w-48 text-2xl font-normal text-center bg-black text-white rounded-lg  transition duration-200"
          onClick={submitImages}
        >
          upload
        </button>

        <div className=" flex flex-col items-center w-screen gap-2">
          <div className="flex flex-wrap justify-center w-full px-5">
          {imageUrls &&
            imageUrls.map((image, index) => (
              <div
                key={index}
                className="flex flex-col justify-center iterms-center gap-1 w-auto px-2"
              >
                <p className="h-auto w-auto text-lg font-semibold rounded-md text-center self-center pb-0 px-auto">
                  {index + 1}.
                </p>{" "}
                <input
                  ref={urlRef}
                  value={image}
                  readOnly
                  className="truncate font-mono text-sm rounded-lg px-1 py-1 h-8 bg-white w-16"
                />
                <button
                  onClick={() => copyUrlToClipboard(index)}
                  className="h-8 w-16 text-lg text-center outline-none rounded-lg bg-black text-white shrink-0"
                >
                  copy
                </button>
              </div>
            ))}
            </div>
          {imageUrls.length > 0 && (
            <button
              onClick={copyAll}
              className={`h-12 w-48 text-2xl font-normal text-center outline-none rounded-lg px-3 my-2 py-1 shrink-0 ${
                share ? "text-black bg-indigo-200 font-normal text-2xl" : "bg-black text-white"}`}
            >
             {share? 'copied': `copy all • ${imageUrls.length}`}
            </button>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default UploadImages;
