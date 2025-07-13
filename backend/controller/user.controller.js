import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

// Fetch logged-in user's profile
export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    next(errorHandler(500, "Failed to fetch user profile"));
  }
};

export const updateUserProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const allowedUpdates = [
      "firstName",
      "lastName",
      "phone",
      "country",
      "city",
      "address",
      "zipCode",
      "profileImage",
      // professional info
      "role",
      "organization",
      "department",
      "experience",
      "linkedin",
      "portfolio"
    ];
    const updates = {};
    allowedUpdates.forEach(field => {
      if (req.body[field]) updates[field] = req.body[field];
    });

    const user = await User.findByIdAndUpdate(userId, updates, { new: true });

    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user,
    });
  } catch (err) {
    next(errorHandler(500, "Failed to update profile"));
  }
};


export const uploadProfileImage = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    if (!imagePath) {
      return next(errorHandler(400, "No image uploaded"));
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { profileImage: imagePath },
      { new: true }
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Profile image updated successfully",
      user,
    });
  } catch (err) {
    next(errorHandler(500, "Failed to upload profile image"));
  }
};
