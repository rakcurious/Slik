//@ts-nocheck
import { Client, Databases, ID, Query } from "appwrite";
import {Prods} from "../index";
import confvars from './confvars'
import { store } from "../redux_toolkit/store";
import {getProducts} from "../redux_toolkit/productSlice";
import { setWishlist } from "../redux_toolkit/userSlice";

const client = new Client()
  .setEndpoint(confvars.appwriteUrl)
  .setProject(confvars.appwriteProjectId);
const databases = new Databases(client);

export const fetchWishlist = async (id: any) => {
  try {
    const response = await databases.listDocuments(
      confvars.appwriteDatabaseId,
      confvars.appwriteUsersCollectionId,
      [Query.equal("$id", id)]
    );
    let wishlist = response.documents[0]?.wishlist?.reverse();
    store.dispatch(setWishlist(wishlist))
    return wishlist;
  } catch (error) {
    console.log(`Wishlist fetching failed: ${error}`);
    return null;
  }
}

export const createWishlist = async (id: any) => {
  try {
    const response = await databases.createDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteUsersCollectionId,
      id,
      { wishlist: [] }
    )
    console.log(id)
    return response;
  } catch (error) {
    console.log(id)
    console.log(`Appwrite createWishlist failed:: ${error}`);
    return null;
  }
};

export const updateWishlist = async (id: string, updatedData: string[]) => {
  try {
    const response = await databases.updateDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteUsersCollectionId,
      id,
      { wishlist: updatedData }
    );
    return response;
  } catch (error) {
    console.log(`Wishlist update failed: ${error}`);
    return null;
  }
};

export const createProductInAppwrite = async (product: Prods) => {
  try {
    const response = await databases.createDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteProductsCollectionId,
      ID.unique(),
      product
    );
    return response;
  } catch (error) {
    console.log(`Appwrite createDocument error: ${error}`);
    return null;
  }
};

export const updateProductInAppwrite = async (
  id: string,
  updatedData: Partial<Prods>
) => {
  try {
    const response = await databases.updateDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteProductsCollectionId,
      id,
      updatedData
    );

    return response;
  } catch (error) {
    console.log(`Appwrite updateDocument error: ${error}`);
    return null;
  }
};

export const deleteProductInAppwrite = async (id: string) => {
  try {
    const response = await databases.deleteDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteProductsCollectionId,
      id
    );
    return response;
  } catch (error) {
    console.log(`Appwrite deleteDocument error: ${error}`);
    return null;
  }
};

export const fetchAllDocuments = async () => {
  try {
    const response = await databases.listDocuments(
      confvars.appwriteDatabaseId,
      confvars.appwriteProductsCollectionId,
      [Query.limit(2000)]
    );
      store.dispatch(getProducts(response.documents));
  } catch (error) {
    console.log(`Appwrite listDocuments error: ${error}`);
    return null;
  }
};