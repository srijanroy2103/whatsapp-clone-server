//Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

//gridFs storage engine for multer to store and upload files directly to MongoDB

import multer from "multer";
import { GridFsStorage } from 'multer-gridfs-storage';


import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;

const PASSWORD = process.env.DB_PASSWORD;

//here url is mongo db url 
const storage = new GridFsStorage({
    url : `mongodb://${USERNAME}:${PASSWORD}@ac-h0cn7zn-shard-00-00.p061pb5.mongodb.net:27017,ac-h0cn7zn-shard-00-01.p061pb5.mongodb.net:27017,ac-h0cn7zn-shard-00-02.p061pb5.mongodb.net:27017/?ssl=true&replicaSet=atlas-arvps1-shard-0&authSource=admin&retryWrites=true&w=majority` ,
    options : { useUnifiedTopology : true, useNewUrlParser: true },

    file : (request , file) =>{
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.mimeType)=== -1) {
            return `${Date.now()}-file-${file.originalname}`;
        }

        return {
            bucketName : "photos",
            filename : `${Date.now()}-file-${file.originalname}` 
        };
    }
});

export default multer({ storage });