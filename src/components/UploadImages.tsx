import { useCallback, useRef, useState } from "react";

export default function Upload() {
  const [imageUrls, setImageUrls] = useState([]);
  const picsRef = useRef();
  const urlRef = useRef(null);

  const copyUrlToClipboard = useCallback(
    (id: number) => {
      window.navigator.clipboard.writeText(imageUrls[id]);
    },
    [imageUrls]
  );
  const copyAll = useCallback(() => {
    window.navigator.clipboard.writeText(imageUrls.join(","));
  }, [imageUrls]);

  function submitImages() {
    const fileList = picsRef.current.files;
    const filesArray = Array.from(fileList);

    filesArray.forEach((file) => {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "beslik");

      fetch(
        `https://api.cloudinary.com/v1_1/dnhz5reqf/image/upload?upload_preset=beslik&log=true`,
        {
          method: "post",
          body: data,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const url = data.secure_url;
          setImageUrls((prev) => [...prev, url]);
        })
        .catch((error) => console.log(error));
    });
  }

  return (
    <>
      <div className="font-urbanist mt-10 w-screen h-auto flex-col gap-y-4 flex items-center mb-10">
        <input type="file" multiple ref={picsRef} />
        <button
          className="h-12 w-48 text-2xl font-semibold text-center bg-purple-300 rounded-lg hover:bg-purple-400 transition duration-200"
          onClick={submitImages}
        >
          Upload
        </button>

        <div className=" flex flex-col items-center w-auto gap-2">
          {imageUrls &&
            imageUrls.map((image, index) => (
              <div
                key={index}
                className="flex justify-center gap-1 w-screen px-4"
              >
               <p className="h-10 w-6 text-lg font-semibold rounded-md text-center py-2 pl-2">{index+1}.</p> <input
                  ref={urlRef}
                  value={image}
                  readOnly
                  className="truncate font-mono text-lg rounded-lg px-1 py-1 h-10 bg-white w-80"
                />
                <button
                  onClick={() => copyUrlToClipboard(index)}
                  className="h-10 w-20 outline-none rounded-lg bg-purple-300 px-3 py-0.5 shrink-0"
                >
                  copy
                </button>
              </div>
            ))}
          {imageUrls.length > 0 && (
            <button
              onClick={copyAll}
              className="h-10 w-40 text-xl font-semibold outline-none rounded-lg bg-purple-300 px-3 my-2 py-1 shrink-0"
            >
              copy all
            </button>
          )}
        </div>
      </div>
      <hr />
    </>
  );
}
