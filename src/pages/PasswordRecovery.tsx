import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updatePasswordRecovery } from "../appwrite/auth";
import sliklogo from "../assets/sliklogo.webp";

export default function PasswordRecovery() {
  const navigate = useNavigate();
  const [reset, setReset] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const resetPassword = async () => {
    try {
      const { success, error, data } = await updatePasswordRecovery(password);
      if (success) {
        setSuccessMsg("Password reset successful");
        setReset(true);
      } else {
        setErrorMsg(error);
      }
    } catch (error) {
      setErrorMsg("Password reset failed, error: " + error);
    }
  };

  return (
    <>
      <div className="font-urbanist w-screen flex flex-col justify-start items-center py-10 px-5">
        <img className="mx-auto h-14 w-auto" src={sliklogo} alt="Slik" />
        <h2 className="mt-20 mb-6 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Password Reset
        </h2>
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="text-red-500 font-semibold text-center">{errorMsg}</p>
          <p className="text-green-500 font-semibold text-center">
            {successMsg}
          </p>
          <label
            htmlFor="password"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Password
          </label>
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
          <button
            onClick={resetPassword}
            className="w-full my-3 h-10 text-center rounded-md bg-black px-3 py-auto text-lg font-medium leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Change password
          </button>
        </div>
        {reset && (
          <>
            <button
              onClick={() => navigate("/login")}
              className="text-center font-semibold mt-10 h-10 w-60 rounded-lg text-white bg-black"
            >
              Login
            </button>
          </>
        )}
      </div>
    </>
  );
}
