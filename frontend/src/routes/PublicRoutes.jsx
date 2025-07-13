// src/routes/PublicRoutes.jsx
import PublicLayout from "../layouts/PublicLayout";
import HomePage from "../pages/PublicPages/HomePage";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ProfileInfo from "../components/Cards/ProfileInfo";
import FeaturesPage from "../pages/PublicPages/FeaturesPage";  // 🔹 Import FeaturesPage
import ContactPage from "../pages/PublicPages/ContactPage";    // 🔹 Import ContactPage
import ForgotPassword from "../components/ForgotPassword";
import VerifyOtp from "../components/VerifyOtp.jsx";
import ResetPassword from "../components/ResetPassword.jsx";

const PublicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "", element: <HomePage /> },             // homepage by default
      { path: "login", element: <Login /> },           // login route
      { path: "signup", element: <Signup /> },         // signup route
      { path: "profile", element: <ProfileInfo /> },   // profile route
      { path: "features", element: <FeaturesPage /> }, // 🔹 new features route
      { path: "contact", element: <ContactPage /> }, 
      {path:"/forgot-password", element:<ForgotPassword/>},
      {path: "/verify-otp", element: <VerifyOtp/>} ,
      {path: "/reset-password", element: <ResetPassword/>}// 🔹 new contact route
    ],
  },
];

export default PublicRoutes;
