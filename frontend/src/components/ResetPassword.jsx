import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(""); // 🔴 Add OTP state
  const navigate = useNavigate();
  const email = localStorage.getItem("resetEmail");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/reset-password", {
        email,
        otp,
        newPassword: password, // ✅ Use correct value
      });
      toast.success("Password reset successful!");
      localStorage.removeItem("resetEmail");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to reset password");
    }
  };

  return (
    <div className="flex justify-center mt-28 mb-28">
      <form onSubmit={handleReset} className="border p-6 bg-white rounded w-96">
        <h2 className="text-2xl mb-4">Reset Password</h2>
        
        <input
          type="text"
          placeholder="Enter OTP"
          className="input-box mb-4"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        
        <input
          type="password"
          placeholder="Enter new password"
          className="input-box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="submit" className="btn-primary mt-4">Reset</button>
      </form>
    </div>
  );
};

export default ResetPassword;
