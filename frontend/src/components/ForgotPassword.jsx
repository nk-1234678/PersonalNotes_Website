import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/auth/forgot-password", { email });
      toast.success(res.data.message);
      localStorage.setItem("resetEmail", email);
      navigate("/verify-otp");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error sending OTP");
    }
  };

  return (
    <div className="flex justify-center mt-28 mb-28">
      <form onSubmit={handleSubmit} className="border p-6 bg-white rounded w-96 shadow-md">
        <h2 className="text-2xl mb-4 font-semibold">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your registered email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
