// Modal.tsx
import React, { useState } from "react";
import { startVerification } from "../appwrite/auth";

interface ModalProps {
  isOpen: boolean;
  isAuthenticated: boolean;
  isVerified: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  isAuthenticated,
  isVerified,
  onClose,
  onLogin,
}) => {
  if (!isOpen) return null;

  const [verificationStarted, setVerificationStarted] = useState(false);

  const handleVerify = async () => {
    const verificationResponse = await startVerification();
    if (verificationResponse.success) {
      setVerificationStarted(true);
    }
  };

  return (
    <div className="font-urbanist fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-70" onClick={onClose} />
      <div className="bg-purple-100 p-6 z-10 h-auto w-60 md:h-auto md:w-96 rounded-lg flex flex-col items-center justify-center">
        {!isAuthenticated ? (
          <>
            <p className="font-medium text-md md:text-lg text-black my-4">
              Please login to use wishlists
            </p>
            <button
              className="px-4 py-1 w-4/5 text-lg font-medium text-center bg-black rounded-lg text-white transition duration-200"
              onClick={onLogin}
            >
              Login
            </button>
          </>
        ) : !isVerified ? (
          <>
            <p className="font-medium text-md md:text-lg text-black my-4">
              Please verify your email to use wishlists.
            </p>
            {!verificationStarted ? (
              <button
                className="w-4/5 px-4 py-1 text-lg font-medium text-center bg-black rounded-lg text-white"
                onClick={handleVerify}
              >
                Verify Email
              </button>
            ) : (
              <p className="font-medium text-md md:text-lg text-green-600 my-4">
                We have sent you a verification email from appwrite. Please
                verify your email address using the link in the email
              </p>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};
