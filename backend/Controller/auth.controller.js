import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { genrateVerificationCode } from "../utils/genrateVerificationCode.js";
import { genrateTokenAndSetCookie } from "../utils/genrateTokenAndSetCookie.js";
import {
  sendVerificationEmail,
  sendWelcomeData,
  forgotPasswordEmail
} from "../mail/emailmailtrap.js";



export const SignUp = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("all Fields Are Required ");
    }

    const userAlreadyExist = await User.findOne({ email });

    if (userAlreadyExist) {
      return res
        .status(400)
        .json({ success: false, error: "User Already Exist " });
    } // if goes forward we ned to craerte an user

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = genrateVerificationCode();

    const user = new User({
      email: email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    await user.save();
    // jwt
    genrateTokenAndSetCookie(res, user._id);

    //mailtrap
    await sendVerificationEmail(user.email, verificationToken);
    res.status(201).json({
      success: true,
      message: "user Created Succesfully",
      user: { ...user._doc, password: undefined },
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
export const verifyEmail = async (req, res) => {
  const { code } = req.body;

  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expire Verification code",
      });
    }

    user.isverified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;

    await user.save();

    await sendWelcomeData(user.email, user.name);
    res.status(200).json({
      success: true,
      message: "Your account is verified",
      user: { ...user._doc, password: undefined },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Verification of email is failed",
      error: error,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email: email,
      
    });
   const passwordChecker= await bcrypt.compare(password,user.password);
    if (!user|| !passwordChecker) {
      return res
        .status(401)
        .json({ success: false, message: "email or pass is wrong" });
    }
    user.lastLogin=Date.now()
    await user.save()
    genrateTokenAndSetCookie(res,user._id)
    res
      .status(200)
      .json({
        success: true,
        message: "user is logged in ",
        data: { ...user._doc, password: undefined },
      });
  } catch (error) {
    return res.status(500).json({success:true,message:"the user i not logged in",error:error.message})
  }
};

export const logOut = async (req, res) => {
  res.clearCookie("auth");
  res.status(200).json({ success: true, message: "User is logged out" });
};


export const forgotPassword=async(req,res)=>{

  const {email}=req.body;
  try {
    const user=User.find({email}
      
    )
    if(!email){
      return res.status(400).json({success:false,message:"the user is not logged"})
    }
  forgotPasswordEmail(email)
  res.status(200).json({success:true,message:"the email for resting paswword",user:{...user._doc,password:undefined}})
  } catch (error) {
    
  }

}