// appwriteAuth.ts
import { Account, Client, ID } from "appwrite";
import {confvars} from "../index";
import { setUserData } from "../redux_toolkit/userSlice";
import { store } from "../redux_toolkit/store"; 

const client = new Client()
  .setEndpoint(confvars.appwriteUrl)
  .setProject(confvars.appwriteProjectId);
const account = new Account(client);

export const loginWithGoogle = async () => {
  try {
    await account.createOAuth2Session(
      "google",
      `http://localhost:5173/`,
      `http://localhost:5173/`
    );
    const currentUser = await account.get();
    store.dispatch(setUserData(currentUser)); 
    return currentUser;
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};

export const loginWithEmailAndPassword = async (email:string, password:any) => {
  try {
    
    const currentUser = await account.createEmailPasswordSession(email, password)
    if(currentUser){
      store.dispatch(setUserData(currentUser)); 
      return currentUser;
    }
    else {
      return null;
    }
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
}
export const signup = async (email:string, password:any, name:any) => {
  try {
    
    const currentUser = await account.create(ID.unique(), email, password, name)
    if(currentUser){
      loginWithEmailAndPassword(email, password) 
    }
    else {
      return null;
    }
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
}


export const logout = async () => {
  try {
    await account.deleteSession("current");
    store.dispatch(setUserData(null));
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

export const getCurrentSession = async () => {
  try {
    const currentUser = await account.get();
    store.dispatch(setUserData(currentUser));
    return currentUser;
  } catch (error) {
    console.error("Failed to get current session:", error);
    return null;
  }
};