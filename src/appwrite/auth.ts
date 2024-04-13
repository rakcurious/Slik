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
      await loginWithEmailAndPassword(email, password)
      const lol = await startVerification();
      if(lol){
        console.log('please check your email inbox to verify')
        return lol
       }
       else {
        console.log('no email lol')
        return lol;
       }
    }
    else {
      return null;
    }
  } catch (error) {
    console.error("signup failed:", error);
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

export const startVerification = async () => {
  try {
    const response = await account.createVerification('http://localhost:5173/verification');
    if(response) {
      return response;
    }
    else {
      return null;
    }
  } catch (error) {
    
    console.error("verification start failed:", error);
    return null;
  }
};

export const updateVerification = async () => {
const urlParams = new URLSearchParams(window.location.search);
const secret = urlParams.get('secret');
const userId = urlParams.get('userId');

try {
  const response = await account.updateVerification(userId, secret)
  if(response) {
    console.log(response)
    return response;
  }
  else {
    return null
  }
} catch (error) {
  console.error('Verification failed:',error)
  return null;
}
}

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