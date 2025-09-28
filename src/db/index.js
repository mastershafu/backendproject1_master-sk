import mongoose from 'mongoose'
/*
;(async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
    } catch(error){
        console.error("Error: ", error);
        throw error;
    }
})()
*/

import { DB_Name } from "../constant.js";

const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log(`MONGODB connected succcesfully!!! DB Host: ${connectionInstance.connection.host}`);

    } catch(error){
        console.log("MONGODB connection Error ", error)
        process.exit(1)
    }
}

export default connectDB