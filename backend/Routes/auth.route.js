import e from "express";
import { forgotPassword, login, logOut, SignUp,verifyEmail,resetPassword,checkauth } from "../Controller/auth.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";


const router = e.Router();
router.get("/check-auth",verifyToken,checkauth)
router.post("/signup", SignUp);
router.post("/login", login);
router.post("/logout", logOut);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
export default router;
