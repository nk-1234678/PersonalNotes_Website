import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },

  // 🔽 Added Personal Info Fields
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  zipCode: {
    type: String,
    default: "",
  },
  profileImage: {
    type: String,
    default: "", // Store image URL or path
  },
  role: { 
    type: String, 
    default: "" 
  },
  organization: {
    type: String, 
    default: "" 
  },
  department: {
    type: String, 
    default: "" 
  },
  experience: {
    type: Number, 
    default: 0 
  },
  linkedin: { 
    type: String, 
    default: "" 
  },
  portfolio: { 
    type: String, 
    default: "" 
  },
});

const User = mongoose.model("User", userSchema);

export default User;
