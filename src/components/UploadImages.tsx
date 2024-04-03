import { useRef, useState } from "react";

export default function Upload() {
  const [imageUrls, setImageUrls] = useState([]);
  const picsRef = useRef();

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
      <div className="font-urbanist w-screen h-auto flex justify-center">
        <div>
          <input
            type="file"
            multiple
            ref={picsRef}
          />
          <button onClick={submitImages}>Upload</button>
          
            <div className="font-bold text-3xl">
              {imageUrls.length}
            </div>
        </div>
      </div>
    </>
  );
}