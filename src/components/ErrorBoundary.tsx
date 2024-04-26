import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error: any = useRouteError();

  return (
    <div className="bg-indigo-100 px-10 pt-20 flex flex-col items-center justify-start w-screen bg-transparent min-h-screen font-main">
      <img
        src="https://res.cloudinary.com/dnhz5reqf/image/upload/v1713705966/slik/slikbearog_wx3vqt.png"
        alt="Slik"
        className="mb-5 h-40 w-40"
      />
      <p className="text-center font-medium text-xl">Oops, an error!</p>
      <p className="my-2 text-center font-semibold text-lg">
        don't worry, just reload/refresh the page.
      </p>
      <p className="text-center font-medium text-lg">
        If you still see the error after refreshing multiple times, or if this
        error is very frequent, please let us know ASAP via email. Just take a
        screenshot of this page and send it to{" "}
        <span className="text-center font-semibold text-lg">
          rakcurious@gmail.com
        </span>
      </p>
      <p className="text-center font-semibold text-lg mt-4 ">Error text:</p>
      <p className="text-center font-medium text-lg">
        {error.statusText || error.message}
      </p>
      <div className="flex flex-wrap gap-3 mt-10 justify-center items-center">
        <Link to={"/women"}>
          <button className="text-center text-xl font-medium h-auto w-auto px-4 py-2 rounded-lg text-white bg-black">
            Women
          </button>
        </Link>
        <Link to={"/men"}>
          <button className="text-center text-xl font-medium h-auto w-auto px-4 py-2 rounded-lg text-white bg-black">
            Men
          </button>
        </Link>
        <Link to={"/"}>
          <button className="text-center text-xl font-medium h-auto w-auto px-4 py-2 rounded-lg text-white bg-black">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorBoundary;
