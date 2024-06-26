import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Error: React.FC = () => {
  const [load, setLoad] = useState(false);

  const loadingtime = () => {
    setTimeout(() => {
      setLoad(true);
    }, 5000);
  };
  loadingtime();
  const navigate = useNavigate();

  return (
    <>
      {
        <div className="px-10 mt-20 flex flex-col items-center justify-center w-screen h-auto bg-transparent">
          <img
            src="https://res.cloudinary.com/dnhz5reqf/image/upload/v1713705966/slik/slikbearog_wx3vqt.png"
            alt="Slik"
            className={`mt-24 lg:mt-0 mb-0 h-60 w-60  ${load? '' : 'animate-bounce' }`}
          />
          {!load && <div className="mb-5 w-screen animate-pulse text-center font-medium text-3xl">
              LOADING
            </div>}
          {load && (
            <>
              <p className="text-center font-semibold text-2xl">
                Oops, this page is empty!
              </p>
              <p className="text-center font-normal text-2xl">
                Go back and continue your manifesting session
              </p>
              <div className="flex flex-col md:flex-row justify-center flex-wrap gap-x-3 gap-y-1">
                <button
                  onClick={() => navigate(-1)}
                  className="text-xl px-10 text-white font-semibold rounded-lg h-14 w-auto bg-black mt-6 hover:bg-black transition duration-500 hover:-translate-y-1"
                >
                  Go Back
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="text-xl px-10 text-white font-semibold rounded-lg h-14 w-auto bg-black mt-6 hover:bg-black transition duration-500 hover:-translate-y-1"
                >
                  Home
                </button>
              </div>
            </>
          )}
        </div>
      }
    </>
  );
};

export default Error;
