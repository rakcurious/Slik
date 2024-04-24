import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateVerification } from "../index";

export default function Verification() {
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const verification = async () => {
      try {
        const { success, error } = await updateVerification();
        if (success) {
          setVerified(true);
        } else {
          setErrorMsg(error);
        }
      } catch (error) {
        setErrorMsg("Verification failed, error: " + error);
      }
    };

    verification();
  }, []);

  return (
    <>
      <div className="w-screen flex flex-col justify-start items-center py-10 px-5">
        <img className="mx-auto h-14 w-auto" src='https://res.cloudinary.com/dnhz5reqf/image/upload/v1713705965/slik/sliklogo_iiawiz.webp' alt="Slik" />
        <h2 className="mt-20 mb-6 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Verification
        </h2>
        <p className="text-red-500 font-semibold text-center">{errorMsg}</p>
        {verified ? (
          <>
            <p className="text-center text-green-700 font-semibold text-xl ">
              Congratulations, You are verified. Start manifesting...
            </p>
            <button
              onClick={() => navigate("/")}
              className="text-center text-xl font-semibold mt-10 h-14 w-60 rounded-lg text-white bg-black"
            >
              Home
            </button>
          </>
        ) : (
          <p className="text-center font-semibold text-xl animate-pulse">
            Verification is in Progress, Please wait...
          </p>
        )}
      </div>
    </>
  );
}
