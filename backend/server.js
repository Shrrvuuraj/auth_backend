import e from "express";
import { connectDb } from "./DB/temp.js";
import { config } from "dotenv";
import authRoutes from "./Routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();

const app = e();
const Port = process.env.port || 5000;  // keeping 'port' lowercase as in your code

app.use(cookieParser()); // parse incoming cookies
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // fixed typo

app.use(e.json()); // JSON parsing middleware
app.use("/api/auth", authRoutes);

app.listen(Port, () => {
  connectDb();
  console.log(`the server is running on port ${Port}`);
});
