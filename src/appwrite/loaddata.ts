// import { Client, Databases } from "appwrite";
// import confvars from "../confvars/confvars";
// import { useDispatch } from "react-redux";
// let dispatch = useDispatch();

// export default function LoadData() {

//     const client = new Client()
//     .setEndpoint(confvars.appwriteUrl)
//     .setProject(confvars.appwriteProjectId);
//   const databases = new Databases(client);
    
//  const fetchAllDocuments = async ()  => {
//     try {
//       const response = await databases.listDocuments(
//         confvars.appwriteDatabaseId,
//         confvars.appwriteCollectionId
//       );
//       console.log(response.documents);
//       return response.documents;
      
//     } catch (error) {
//       console.log(`Appwrite listDocuments error: ${error}`);
//     }
//   }

// }