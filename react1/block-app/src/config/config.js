const config = { 
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteprojectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedatabaseID: String(import.meta.env.VITE_APPWRITE_DATABACE_ID),
    appwritecollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwritebucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
 }

export default config;