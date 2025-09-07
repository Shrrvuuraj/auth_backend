import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();

export const genrateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  
  res.cookie("auth", token, {
    httpOnly: true, // cookie cant be acceses by js
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000 * 7,
  });
  return token
};
