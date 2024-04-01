import { Client, Databases } from "appwrite";
import confvars from "../confvars/confvars";
import { Prods, Product } from "../utils/data";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../features/users/userSlice";



const client = new Client()
  .setEndpoint(confvars.appwriteUrl)
  .setProject(confvars.appwriteProjectId);
const databases = new Databases(client);

// interface Product {
//   id: string;
//   title: string;
//   target: string;
//   images: string[];
//   price: string;
//   brand: string;
//   likes?: number;
//   category: string;
//   clicks?: number;
//   userid: string;
//   collection: string;
// }

export const createProductInAppwrite = async (product: Prods) => {
  try {
    const response = await databases.createDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteCollectionId,
      product.id, 
      product
    );
    console.log("Document created successfully:", response);
  } catch (error) {
    console.log(`Appwrite createDocument error: ${error}`);
  }
};

export const updateProductInAppwrite = async (
  id: string,
  updatedData: Partial<Prods>
) => {
  try {
    const response = await databases.updateDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteCollectionId,
      id,
      updatedData
    );
    console.log("Document updated successfully:", response);
  } catch (error) {
    console.log(`Appwrite updateDocument error: ${error}`);
  }
};

export const deleteProductInAppwrite = async (id: string) => {
  try {
    const response = await databases.deleteDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteCollectionId,
      id
    );
    console.log("Document deleted successfully:", response);
  } catch (error) {
    console.log(`Appwrite deleteDocument error: ${error}`);
  }
};

export const fetchAllDocuments = async ()  => {
    try {
      const response = await databases.listDocuments(
        confvars.appwriteDatabaseId,
        confvars.appwriteCollectionId
      );
      console.log(response.documents);
      return response.documents;
    } catch (error) {
      console.log(`Appwrite listDocuments error: ${error}`);
    }
  }
