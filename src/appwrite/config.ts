//@ts-nocheck
import { Client, Databases, ID, Query } from "appwrite";
import { Prods } from "../index";
import confvars from "./confvars";
import { store } from "../redux_toolkit/store";
import { getLikes, getProducts } from "../redux_toolkit/productSlice";
import { setWishlist } from "../redux_toolkit/userSlice";

const client = new Client()
  .setEndpoint(confvars.appwriteUrl)
  .setProject(confvars.appwriteProjectId);
const databases = new Databases(client);



export const fetchWishlist = async (id: any) => {
  try {
    const response = await databases.listDocuments(
      confvars.appwriteDatabaseId,
      confvars.appwriteWishlistCollectionId,
      [Query.equal("$id", id)]
    );
    let wishlist = response.documents[0]?.likes?.reverse();
    store.dispatch(setWishlist(wishlist));
    return wishlist;
  } catch (error) {
    console.log(`Wishlist fetching failed: ${error}`);
    return null;
  }
};

export const createWishlist = async (id: any) => {
  try {
    const response = await databases.createDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteWishlistCollectionId,
      id,
      { likes: [] }
    );
    return response;
  } catch (error) {
    console.log(`Appwrite createWishlist failed:: id: ${id}; error: ${error}`);
    return null;
  }
};

export const updateWishlist = async (id: string, updatedData: string[]) => {
  try {
    const response = await databases.updateDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteWishlistCollectionId,
      id,
      { likes: updatedData }
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
    await createLikes(response.$id)
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
    if(response){
      await deleteLikes(id)
    }
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

export const fetchAllLikes = async () => {
  try {
    const response = await databases.listDocuments(
      confvars.appwriteDatabaseId,
      confvars.appwriteLikesCollectionId,
      [Query.limit(2000)]
    );
    let likes = response.documents.map((prod)=> {
      let x = [];
      prod.wishlist.forEach(element => {
        x.push(element.$id)
      });
      return {$id:prod.$id, wishlist: x}
    })
    store.dispatch(getLikes(likes))
  } catch (error) {
    console.log(`Appwrite list Likes error: ${error}`);
    return null;
  }
};

export const createLikes = async (id: any) => {
  try {
    const response = await databases.createDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteLikesCollectionId,
      id,
      { wishlist: [] }
    );
  } catch (error) {
    console.log(id);
    console.log(`Appwrite createLikes failed:: ${error}`);
    return null;
  }
};

export const deleteLikes = async (id: string) => {
  try {
    const response = await databases.deleteDocument(
      confvars.appwriteDatabaseId,
      confvars.appwriteLikesCollectionId,
      id
    );
    return response;
  } catch (error) {
    console.log(`Appwrite delete Likes error: ${error}`);
    return null;
  }
};

// export const fetchAllWishlists = async () => {
//   try {
//     const response = await databases.listDocuments(
//       confvars.appwriteDatabaseId,
//       confvars.appwriteWishlistCollectionId,
//       [Query.limit(2000)]
//     );
//     console.log(response.documents)
//     return response.documents;
//   } catch (error) {
//     console.log(`Appwrite list Wishlists error: ${error}`);
//     return null;
//   }
// };

// export const createWishlistss = async (id: any, data) => {
//   try {
//     const response = await databases.createDocument(
//       confvars.appwriteDatabaseId,
//       confvars.appwriteWishlistCollectionId,
//       id,
//       data
//     );
//     console.log('success:', id)
//   } catch (error) {
//     console.log(id);
//     console.log(`Appwrite create Wishlistss failed:: ${error}`);
//     return null;
//   }
// };

// export const fetchAllWishlist = async () => {
//   try {
//     const response = await databases.listDocuments(
//       confvars.appwriteDatabaseId,
//       confvars.appwriteUsersCollectionId,
//       [Query.limit(1000)]
//     );
//     let wishlistss = response.documents;
//     return wishlistss;
//   } catch (error) {
//     console.log(`Wishlistss fetching failed: ${error}`);
//     return null;
//   }
// };

