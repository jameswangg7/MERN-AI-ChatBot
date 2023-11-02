//import { config } from "dotenv";
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//config()
const PORT=process.env.PORT || 5000
connectToDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log('connceted to db and listening now');    
    })
}).catch(err=>console.log(err))

