import config from "../config/config"
import { Client, Account, ID,Databases,Storage,Query} from "appwrite";

export class Service {
    client  = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteURL) 
        .setProject(config.appwriteprojectID); 

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
     
    async createPost({title,slug,content,featuredimg,status,userId}){
        try{
            return await this.databases.createDocument(
                config.appwritedatabaseID,
                config.appwritecollectionID,
                slug,
                {
                    title,
                    content,
                    featuredimg,
                    status,
                    userId,  
                }
            )   

        } catch(error){
             console.log(`${error} createPost`)
        }
    }

    async updataPost(slug,{title,content,featuredimg,status,userId}){
        try{
              return await this.databases.updateDocument(
                config.appwritedatabaseID,
                config.appwritecollectionID,
                slug,
                {
                   title,
                   content,
                   featuredimg,
                   status,
                });

        } catch(error){
            console.log(`${error}  updataPost`)
        }
    }

    async deletePost(slug){
        try{
             await this.databases.deleteDocument(
                config.appwritedatabaseID,
                config.appwritecollectionID,
                slug,  
              ); 
              
              return true;
   
        } catch(error){
            console.log(`${error} deletePost`);
            return false;
        }
    } 

    async getPost(slug){
        try{
             return await this.databases.getDocument(
                config.appwritedatabaseID,
                config.appwritecollectionID,
                slug, 
             )
        } catch(error){
            console.log(`${error}  getPost`);
            return false;
        }
    }
     
    async getAllPost(queries = [Query.equal("status","active")]){
        try{
             return await this.databases.listDocuments(
                config.appwritedatabaseID,
                config.appwritecollectionID,
                 queries,
             )
        } catch(error){
            console.log(`${error}  getAllPost`);
            return false;
        }
    }
     
    // file upload service
    async uploadFile(file){
        try{
           return await this.bucket.createFile(
            config.appwritebucketID,
            ID.unique(),
            file,
           )     

        } catch(error){
            console.log(`${error} uploadFile`)
            return false;
        }
    }

    async deletefile(fileid){
        try{
             await this.bucket.deleteFile(
                config.appwritebucketID,
                fileid,
             )
             return true;
        } catch(error){
            console.log(`${error} deletefile`)
            return false;
        }
    }

    getFilePreview(fileid){
       return this.bucket.getFilePreview(
        config.appwritebucketID,
        fileid
       )
    }
    
    
}

const service = new Service();
export default service;




