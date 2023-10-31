
import { connect, disconnect } from "mongoose";
 async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL)
    } catch (err) {
        console.log(err);
        
        throw new Error("can not connect to db")
    }
}

async function disconnectToDatabase() {
    try {
        await disconnect()
    } catch (err) {
        console.log(err);
        
        throw new Error("Fail to disconnect from db")
    }
}

export {connectToDatabase, disconnectToDatabase}