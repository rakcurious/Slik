// @ts-nocheck
import { Account, Client, ID } from "appwrite";
import { store } from "../redux_toolkit/store";
import confvars from "./confvars";
import { setUserData } from "../redux_toolkit/userSlice";
import { createWishlist, fetchWishlist } from "./config";

const client = new Client()
  .setEndpoint(confvars.appwriteUrl)
  .setProject(confvars.appwriteProjectId);
const account = new Account(client);

export const getCurrentSession = async () => {
  try {
    const currentUser = await account.get();
    store.dispatch(setUserData(currentUser));
    return currentUser;
  } catch (error: any) {
    return null;
  }
};

export const loginWithGoogle = async () => {
  try {
    account.createOAuth2Session(
      "google",
      `https://beslik.in/`,
      `https://beslik.in/login`
    );
  } catch (error: any) {
    console.log(error.message);
  }
};

export const loginWithEmailAndPassword = async (
  email: string,
  password: any
) => {
  try {
    const currentUser = await account.createEmailSession(email, password);
    if (currentUser) {
      const userdata = await getCurrentSession();
      if (userdata) {
        const wishlist = await fetchWishlist(userdata.$id);
        if (wishlist) {
        } else {
          await createWishlist(userdata.$id);
          fetchWishlist(userdata.$id);
        }
      }
      return { success: true, data: currentUser };
    } else {
      return { success: false, error: "Login failed" };
    }
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const signup = async (email: string, password: any, name: any) => {
  try {
    const currentUser = await account.create(
      ID.unique(),
      email,
      password,
      name
    );
    if (currentUser) {
      const { success, error } = await loginWithEmailAndPassword(
        email,
        password
      );
      if (success) {
        const verificationResponse = await startVerification();
        if (verificationResponse.success) {
          return {
            success: true,
            message: "Please check your email inbox to verify",
          };
        } else {
          return { success: false, error: "Failed to send verification email" };
        }
      } else {
        return { success: false, error };
      }
    } else {
      return { success: false, error: "Signup failed" };
    }
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const logout = async () => {
  try {
    await account.deleteSession("current");
  } catch (error: any) {
    console.error("Logout failed:", error);
  }
};

export const startVerification = async () => {
  try {
    const response = await account.createVerification(
      "https://beslik.in/verification"
    );
    if (response) {
      return { success: true, data: response };
    } else {
      return { success: false, error: "Failed to start verification" };
    }
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const updateVerification = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");
  const userId = urlParams.get("userId");

  try {
    const response = await account.updateVerification(userId, secret);
    if (response) {
      await getCurrentSession();
      return { success: true, data: response };
    } else {
      return { success: false, error: "Verification failed" };
    }
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const startPasswordRecovery = async (email: string) => {
  try {
    const response = await account.createRecovery(
      email,
      "https://beslik.in/passwordrecovery"
    );
    return { success: true, data: response };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const updatePasswordRecovery = async (password: any) => {
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");
  const userId = urlParams.get("userId");

  try {
    const response = await account.updateRecovery(
      userId,
      secret,
      password,
      password
    );
    return { success: true, data: response };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
