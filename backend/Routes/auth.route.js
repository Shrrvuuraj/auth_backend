import e from "express";
import { forgotPassword, login, logOut, SignUp,verifyEmail } from "../Controller/auth.controller.js";


const router = e.Router();

router.post("/signup", SignUp);
router.post("/login", login);
router.post("/logout", logOut);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
export default router;
