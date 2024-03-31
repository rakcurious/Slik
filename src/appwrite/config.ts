import { Client, Databases, ID, Models } from "appwrite";
import confvars from "../confvars/confvars";
import { Product } from "../utils/data";

const client = new Client()
  .setEndpoint(confvars.appwriteUrl)
  .setProject(confvars.appwriteProjectId);
const databases = new Databases(client);

// interface Productz {
//   id: number;
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

async function createProduct(product: Product) {

  try {
    const response = await databases.createDocument(
      confvars.appwriteDatabaseId ,
      confvars.appwriteCollectionId  ,
      ID.unique(),
      {
        title: product.title,
        target: product.target,
        image: product.image,
        price: product.price,
        brand: product.brand,
        likes: product.likes || 0,
        category: product.category,
        clicks: product.clicks || 0,
        userid: product.userid,
        collection: product.collection,
      }
    );
    console.log("Document created successfully:", response);
  } catch (error) {
    console.log(`Appwrite createDocument error: ${error}`);
  }


}

export default createProduct;