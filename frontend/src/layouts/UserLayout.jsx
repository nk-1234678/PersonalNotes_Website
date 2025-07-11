// src/layouts/UserLayout.jsx

import { Outlet, Link, useLocation } from "react-router-dom";

const UserLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar with diagonal gradient */}
      <aside className="w-64 bg-gradient-to-tr from-blue-950 via-indigo-900 to-purple-900  text-white p-6 space-y-4 shadow-xl">
        <h1 className="text-2xl font-bold mb-6">Notes Dashboard</h1>
        <nav className="flex flex-col space-y-2">
          <Link
            to="/user/dashboard"
            className={`px-3 py-2 rounded transition-all duration-300 hover:bg-white hover:text-slate-900 font-medium ${
              location.pathname === "/user/dashboard"
                ? "bg-white text-slate-900"
                : "text-white"
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/user/dashboard"
            className={`px-3 py-2 rounded transition-all duration-300 hover:bg-white hover:text-slate-900 font-medium ${
              location.pathname === "/user/notes"
                ? "bg-white text-slate-900"
                : "text-white"
            }`}
          >
            All Notes
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
