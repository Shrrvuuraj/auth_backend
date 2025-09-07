import jwt from "jsonwebtoken"
import { config } from "dotenv";
config()

export const verifyToken = (req, res, next) => {
  const token = res.cookies.auth;
  if (!token) {
    return res
      .status(403)
      .json({ success: false, message: "the token is not avaible" });
  }
  try {

     const decoded=jwt.verify(token,process.env.JWT_SECRET)
     if(!decoded){
          res.status(404).json({success:false,message:"the token is expired or wrong "})
     }
     req.userId=decoded.userId
     console.log(req.userId)
     

    next(); //call the next question
  } catch (error) {
     res.status(500).json({success:false,message:"token verification gone wrong",error:error.message})
  }
};
