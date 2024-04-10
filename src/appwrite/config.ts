import { Client, Databases, ID } from "appwrite";
import { Prods } from "../index";
import confvars from './confvars'
import { store } from "../redux_toolkit/store";
import { getProducts } from "../redux_toolkit/productSlice";

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
    console.log("Document created successfully:", response);
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
    console.log("Document updated successfully:", response);
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
    console.log(response);
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
    console.log(response.documents);
    store.dispatch(getProducts(response.documents));
    return response.documents;
  } catch (error) {
    console.log(`Appwrite listDocuments error: ${error}`);
    return null;
  }
};
