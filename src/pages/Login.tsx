import { useState } from "react";
import signinwithgoogle from "../assets/signinwithgoogle.svg";
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
  signup,
  startPasswordRecovery,
} from "../index";
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

      const { success, error } = await loginWithEmailAndPassword(email, password);
      if(success){
        navigate('/')
      }
      else {
        setErrorMsg(error);
      }
    } else if (page === "Sign up") {
      setSuccessMsg('Signing up, please wait...')
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
    setIsLoading(false)
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img onClick={()=>navigate('/')}
            className="mx-auto h-14 w-auto"
            src="https://res.cloudinary.com/dnhz5reqf/image/upload/v1713705965/slik/sliklogo_iiawiz.webp"
            alt="Slik"
          />
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            {page}
          </h2>
        </div>

        {page === "Verification" ? (
          <div className="flex flex-col items-center">
            {" "}
            <p className="text-center text-green-500 text-2xl font-semibold mt-10">
              We have sent you a verification email from appwrite. Please verify
              your email address using the link in the email to make the most
              out of Slik
            </p>
            <button
              onClick={() => navigate("/")}
              className="text-center text-2xl py-2 font-semibold mt-10 h-14 w-60 rounded-lg text-white bg-black"
            >
              Home
            </button>
          </div>
        ) : (
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
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
                  className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {isLoading ? 'Please wait...' : page}
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
                <p className="text-center font-medium text-sm my-5">OR</p>
                <img
                  className=" cursor-pointer h-10 md:h-12 flex w-full justify-center leading-6"
                  src={signinwithgoogle}
                  onClick={handleLoginWithGoogle}
                />
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
