import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

import crypto from "crypto"
import { sendEmail } from "../utils/sendEmail.js"


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body

  const isValidUser = await User.findOne({ email })

  if (isValidUser) {
    return next(errorHandler(400, "User already Exist"))
  }

  const hashedPassword = bcryptjs.hashSync(password, 10)

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  })

  try {
    await newUser.save()

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
    })
  } catch (error) {
    next(error)
  }
}

export const signin = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const validUser = await User.findOne({ email })

    if (!validUser) {
      return next(errorHandler(404, "User not found"))
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password)

    if (!validPassword) {
      return next(errorHandler(401, "Wrong Credentials"))
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)

    const { password: pass, ...rest } = validUser._doc

    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      success: true,
      message: "Login Successful!",
      rest,
    })
  } catch (error) {
    next(error)
  }
}

export const signout = async (req, res, next) => {
  try {
    res.clearCookie("access_token")

    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    })
  } catch (error) {
    next(error)
  }
}


export const forgotPassword = async (req, res, next) => {
  const { email } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) return next(errorHandler(404, "User not found"))

    const otp = Math.floor(100000 + Math.random() * 900000).toString()

    user.otp = otp
    user.otpExpiry = Date.now() + 10 * 60 * 1000 // 10 minutes expiry

    await user.save()

    await sendEmail(
      user.email,
      "Your Password Reset OTP",
      `Your OTP for password reset is: ${otp}`
    )

    res.status(200).json({
      success: true,
      message: "OTP sent to your email",
    })
  } catch (error) {
    next(error)
  }
}


// controllers/auth.controller.js
export const verifyOtp = async (req, res, next) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return next(errorHandler(404, "User not found"));

    if (String(user.otp) !== String(otp)) {
      return next(errorHandler(400, "Wrong OTP entered"));
    }

    if (user.otpExpiry < Date.now()) {
      return next(errorHandler(400, "OTP expired"));
    }

    res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (err) {
    next(err);
  }
};




export const resetPassword = async (req, res, next) => {
  const { email, otp, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return next(errorHandler(404, "User not found"));

    console.log("User-entered OTP:", otp);
    console.log("Stored OTP:", user.otp);

    // Loose equality to avoid type mismatch
    if (user.otp != otp) {
      return next(errorHandler(400, "Wrong OTP entered"));
    }

    if (user.otpExpiry < Date.now()) {
      return next(errorHandler(400, "OTP expired"));
    }

    // ✅ Hash the new password
    const hashedPassword = bcryptjs.hashSync(newPassword, 10);
    user.password = hashedPassword;

    // Clear OTP
    user.otp = undefined;
    user.otpExpiry = undefined;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    next(error);
  }
};



