import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("resetEmail");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/auth/verify-otp", {
      email,
      otp: otp.toString(), // 🔥 Ensure it's string
    });

      toast.success(res.data.message);
      navigate("/reset-password");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="flex justify-center mt-28 mb-28">
      <form onSubmit={handleSubmit} className="border p-6 bg-white rounded w-96">
        <h2 className="text-2xl mb-4">Verify OTP</h2>
        <input
          type="text"
          placeholder="Enter the OTP"
          className="input-box"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit" className="btn-primary mt-4">Verify</button>
      </form>
    </div>
  );
};

export default VerifyOtp;
