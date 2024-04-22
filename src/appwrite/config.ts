import { Client, Databases, ID } from "appwrite";
import { Collection, Prods } from "../index";
import confvars from './confvars'
import { store } from "../redux_toolkit/store";
import { getCollections, getProducts } from "../redux_toolkit/productSlice";

const client = new Client()
  .setEndpoint(confvars.appwriteUrl)
  .setProject(confvars.appwriteProjectId);
const databases = new Databases(client);

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
      confvars.appwriteProductsCollectionId
    );
    store.dispatch(getProducts(response.documents));
    return response.documents;
  } catch (error) {
    console.log(`Appwrite listDocuments error: ${error}`);
    return null;
  }
};

export const fetchWishlist = async (id: string) => {
  try {
    const response = await databases.listDocuments(
      confvars.appwriteDatabaseId,
      confvars.appwriteUsersCollectionId,
    );
    const wishlist = response.documents.find((user)=> user.$id == id).wishlist;
      return wishlist;
    
  } catch (error) {
    console.log(`Appwrite listDocuments error: ${error}`);
    return null;
  }
};

export const createWishlist = async (id: string) => {
  try {
    const response = await databases.createDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteUsersCollectionId,
      id,
      { wishlist: [] }
    );
    console.log("Wishlist created successfully:", response);
    return response;
  } catch (error) {
    console.log(`Appwrite createDocument error: Wishlist:: ${error}`);
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
export const fetchCollections = async () => {
  try {
    const response = await databases.listDocuments(
      confvars.appwriteDatabaseId,
      confvars.appwriteCollectionsCollectionId,
    );
    store.dispatch(getCollections(response.documents.reverse()));
      return response.documents;
    
  } catch (error:any) {
    console.log(`Collections listing failed:: ${error}`);
    return null;
  }
};

export const createCollections = async (collection: Collection) => {
  try {
    const response = await databases.createDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteCollectionsCollectionId,
      ID.unique(),
      collection
    );
    return response;
  } catch (error) {
    console.log(`Collection creation failed: ${error}`);
    return null;
  }
};

export const updateCollections = async (id: string, updatedData: Collection) => {
  try {
    const response = await databases.updateDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteCollectionsCollectionId,
      id,
      updatedData
    );
    return response;
  } catch (error) {
    console.log(`Collection updation failed: ${error}`);
    return null;
  }
};

export const deleteCollections = async (id: string) => {
  try {
    const response = await databases.deleteDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteCollectionsCollectionId,
      id
    );
    return response;
  } catch (error) {
    console.log(`Collection deletion failed: ${error}`);
    return null;
  }
};
