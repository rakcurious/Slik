import { Client, Account, Models } from "appwrite";
import confvars from "../confvars/confvars";
import { useState, useEffect } from "react";

const client = new Client()
  .setEndpoint(confvars.appwriteUrl)
  .setProject(confvars.appwriteProjectId);
const account = new Account(client);

// User state management
let currentUser: Models.Session | null = null;
const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
const [userProfile, setUserProfile] = useState<Models.Session | null>(null);

// Login function
const login = async () => {
  try {
    const response = await account.createOAuth2Session(
      "google",
      `http://localhost:5173/`, // Success redirect URL
      `http://localhost:5173/login` // Failure redirect URL
    );
    currentUser = response;
    setIsLoggedIn(true);
    setUserProfile(response);
    console.log("Login successful:", response);
  } catch (error) {
    console.error("Login failed:", error);
  }
};

// Logout function
const logout = async () => {
  try {
    await account.deleteSession("current");
    currentUser = null;
    setIsLoggedIn(false);
    setUserProfile(null);
    console.log("Logout successful");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

// Get current session
const getCurrentSession = async () => {
  try {
    const response = await account.getSession("current");
    currentUser = response;
    setIsLoggedIn(true);
    setUserProfile(response);
    console.log("Current session:", response);
  } catch (error) {
    console.error("Failed to get current session:", error);
  }
};

// Call getCurrentSession on component mount
useEffect(() => {
  getCurrentSession();
}, []);


export {login, logout, getCurrentSession}