
import { connect, disconnect } from "mongoose";
 async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL)
        // mongoose.connect(process.env.MONGODB_URL, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     dbName: 'your-database-name', // Replace with your actual database name
        //   });
          
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