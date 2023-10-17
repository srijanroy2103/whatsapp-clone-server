import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;

const PASSWORD = process.env.DB_PASSWORD;


const Connection = async() =>{
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-h0cn7zn-shard-00-00.p061pb5.mongodb.net:27017,ac-h0cn7zn-shard-00-01.p061pb5.mongodb.net:27017,ac-h0cn7zn-shard-00-02.p061pb5.mongodb.net:27017/?ssl=true&replicaSet=atlas-arvps1-shard-0&authSource=admin&retryWrites=true&w=majority` ;
    try {
        await mongoose.connect(URL, { useUnifiedTopology : true });
        console.log('database connected');
    } catch (error) {
        console.log('error : ',error.message);
    }
}

export default Connection;