// src/routes/UserRoutes.jsx


import { Navigate } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/DashboardPage/Dashboard";
import ProfileInfo from "../components/Cards/ProfileInfo"; // if needed

const UserRoutes = [
  {
    path: "/user", // base path for all user routes
    element: <UserLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> }, // default redirect
      { path: "dashboard", element: <Home /> },
      { path: "profile", element: <ProfileInfo /> }, // optional
    ],
  },
];

export default UserRoutes;
