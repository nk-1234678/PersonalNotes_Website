// Example: src/layouts/UserLayout.jsx

import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Fixed and Non-scrollable */}
      <SideBar />

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
