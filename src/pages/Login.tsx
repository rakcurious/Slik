import { useState } from "react";
import signinwithgoogle from "../assets/signinwithgoogle.svg";
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
  signup,
  startPasswordRecovery,
} from "../appwrite/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState("Sign up");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    await loginWithGoogle();
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (page === "Login") {
      const { success, error } = await loginWithEmailAndPassword(
        email,
        password
      );
      if (success) {
        navigate("/");
      } else {
        setErrorMsg(error);
      }
    } else if (page === "Sign up") {
      const { success, error, message } = await signup(email, password, name);
      if (success) {
        //@ts-ignore
        setSuccessMsg(message);
        setPage("Verification");
      } else {
        setErrorMsg(error);
      }
    } else if (page === "Reset Password") {
      const { success, error } = await startPasswordRecovery(email);
      if (success) {
        setErrorMsg("");
        setSuccessMsg(
          "We have sent you a Password reset email from appwrite. You can reset your password using the link in the email"
        );
      } else {
        setErrorMsg(error);
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            onClick={() => navigate("/")}
            className="mx-auto h-14 w-auto"
            src="https://res.cloudinary.com/dnhz5reqf/image/upload/v1713705965/slik/sliklogo_iiawiz.webp"
            alt="Slik"
          />
          {(page == "Login" || page === "Sign up") && (
            <div className="flex flex-col justify-start items-center">
              <p className="text-center uppercase font-medium text-xs mt-10">
                Fast. easy. no extra verification
              </p>
              <img
                className=" cursor-pointer h-auto flex w-2/3 justify-center leading-6"
                src={signinwithgoogle}
                onClick={handleLoginWithGoogle}
              />
              <p className="text-center font-medium text-sm mt-7 mb-2">OR</p>
            </div>
          )}
          <h2 className="mt-2 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            {page}
          </h2>
        </div>

        {page === "Verification" ? (
          <div className="flex flex-col items-center">
            <p className="text-center text-green-500 text-2xl font-semibold mt-10">
              We have sent you a verification email from appwrite. Please verify
              your email address using the link in the email to make the most
              out of Slik
            </p>
          </div>
        ) : (
          <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {(page == "Login" ||
                page === "Sign up" ||
                page === "Reset Password") && (
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-0">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-lg font-medium sm:leading-6"
                    />
                  </div>
                </div>
              )}

              {(page == "Login" || page === "Sign up") && (
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    {page === "Login" && (
                      <div className="text-sm">
                        <p
                          onClick={() => setPage("Reset Password")}
                          className="font-semibold text-indigo-700 cursor-pointer"
                        >
                          Forgot password?
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mt-0">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-lg font-medium sm:leading-6"
                    />
                  </div>
                </div>
              )}
              {page === "Sign up" && (
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Name
                    </label>
                  </div>
                  <div className="mt-0">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-lg font-medium sm:leading-6"
                    />
                  </div>
                </div>
              )}

              <div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="flex w-full h-10 justify-center items-center rounded-md bg-black px-3  text-lg font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {isLoading ? (
                    <>
                      <span>
                        {page === "Login"
                          ? "Logging in"
                          : page === "Sign up"
                          ? "Signing up"
                          : ""}
                      </span>
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline ml-3 w-6 h-6 me-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    </>
                  ) : (
                    page
                  )}
                </button>
              </div>
              <p className="my-3 mx-5 text-center text-red-500 text-lg font-semibold">
                {errorMsg}
              </p>
            </form>

            {(page === "Login" || page === "Sign up") && (
              <>
                {" "}
                <p className="mt-5 text-center text-md text-gray-500 font-medium">
                  {page === "Login"
                    ? "New user? "
                    : page === "Sign up"
                    ? "Already have an account? "
                    : ""}
                  <span
                    onClick={() =>
                      setPage((prev) =>
                        prev === "Login" ? "Sign up" : "Login"
                      )
                    }
                    className="text-indigo-700 cursor-pointer text-md font-semibold"
                  >
                    {page === "Login" ? "Sign up" : "Login"}
                  </span>
                </p>
              </>
            )}

            {page === "Reset Password" && (
              <p className="text-center text-2xl font-semibold">
                {successMsg}{" "}
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
