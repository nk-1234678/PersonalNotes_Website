import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import {
  updateUserProfile,
  getUserProfile,
  uploadProfileImage,
} from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// Ensure uploads folder exists
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${req.user.id}${ext}`;
    cb(null, filename);
  },
});
const upload = multer({ storage });

// Routes
router.get("/profile", verifyToken, getUserProfile);
router.put("/update-profile", verifyToken, updateUserProfile);
router.put("/upload-image", verifyToken, upload.single("profileImage"), uploadProfileImage);

export default router;
