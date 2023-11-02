import express from 'express'
import {config} from 'dotenv'
import morgan from 'morgan'
import appRouter from './routes/index.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
config()
const app=express()
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,  // Include credentials (cookies) in CORS requests if applicable, MUST do it 
  };
  app.use(cors(corsOptions));
//app.use(cors())
app.use(cookieParser(process.env.COOKIE_SECRET))
//console.log(process.env.COOKIE_SECRET);

app.use(express.json())
//remove it in prod
app.use(morgan('dev'))
// app.get("/setcookie", (req, res) => {
//     // Set a cookie
//     res.cookie("exampleCookieName", "cookieValue", { signed: true });
  
//     res.send("Cookie set");
//   });  
//   app.get("/getcookie", (req, res) => {
//     // Read the signed cookie
//     const signedCookieValue = req.signedCookies.exampleCookie;
  
//     if (signedCookieValue) {
//       res.send("Signed Cookie Value: " + signedCookieValue);
//     } else {
//       res.send("No signed cookie found");
//     }
//   });
app.use('/api/v1', appRouter)
export default app