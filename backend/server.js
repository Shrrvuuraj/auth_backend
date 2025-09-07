import e from "express";
import { connectDb } from "./DB/temp.js";
import { config } from "dotenv";
import authRoutes from "./Routes/auth.route.js"
import cookieParser from "cookie-parser";

config();

const app = e();
const Port=process.env.port ||5000
   
 app.use(cookieParser())//parse incoming cookie
app.use(e.json())
app.use("/api/auth",authRoutes)
 
app.listen(Port, () => {
  connectDb();
  console.log(`the server is running on port  ${Port}`);
}); 
  