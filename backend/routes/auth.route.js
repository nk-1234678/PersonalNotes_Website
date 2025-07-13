import express from "express"
import { signin, signout, signup, forgotPassword, resetPassword, verifyOtp } from "../controller/auth.controller.js"
import { verifyToken } from "../utils/verifyUser.js"

const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/signout", verifyToken, signout)
router.post("/forgot-password", forgotPassword)
router.post("/verify-otp",verifyOtp)
router.post("/reset-password", resetPassword)

export default router
