// src/routes/UserRoutes.jsx


import { Navigate } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";

import ProfileInfo from "../components/Cards/ProfileInfo";
import AllNotesPage from "../pages/UserPages/AllNotesPage"; // if needed
import DashboardPage from "../pages/UserPages/DashboardPage";
import UserProfilePage from "../pages/UserPages/UserProfilePage";

const UserRoutes = [
  {
    path: "/user", // base path for all user routes
    element: <UserLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> }, // default redirect
      { path: "dashboard", element: <DashboardPage /> },
      { path: "profile", element: <ProfileInfo /> },
      {path: "allnotes" , element: <AllNotesPage/>} ,
       {path: "userprofile" , element: <UserProfilePage/>} ,// optional
    ],
  },
];

export default UserRoutes;
