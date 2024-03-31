import React, { useState, useEffect } from "react";
import { Client, Account, Models } from "appwrite";
import confvars from "../confvars/confvars";

const client = new Client()
  .setEndpoint(confvars.appwriteUrl)
  .setProject(confvars.appwriteProjectId);
const account = new Account(client);

const LoginComponent: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<Models.Account<Models.Preferences> | null>(null);

  // Login function
  const login = async () => {
    try {
      await account.createOAuth2Session(
        "google",
        `http://localhost:5173/`, // Success redirect URL
        `http://localhost:5173/` // Failure redirect URL
      );
      const currentUser = await account.get();
      setIsLoggedIn(true);
      setUserProfile(currentUser);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await account.deleteSession("current");
      setIsLoggedIn(false);
      setUserProfile(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Get current session
  const getCurrentSession = async () => {
    try {
      const currentUser = await account.get();
      setIsLoggedIn(true);
      setUserProfile(currentUser);
    } catch (error) {
      console.error("Failed to get current session:", error);
    }
  };

  useEffect(() => {
    getCurrentSession();
  }, []);

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  const getFirstName = (fullName: string) => {
    if (fullName) {
      const names = fullName.split(" ");
      return names[0];
    }
    return "";
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>First Name: {getFirstName(userProfile?.name || "")}</p>
          <p>Email: {userProfile?.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
};

export default LoginComponent;