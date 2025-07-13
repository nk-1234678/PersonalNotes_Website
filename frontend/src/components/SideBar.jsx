import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdNotes,
  MdSettings,
  MdPerson,
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";

const SideBar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const linkClass = (path) =>
    `flex items-center gap-2 px-3 py-2 rounded transition-all duration-300 hover:bg-white hover:text-slate-900 font-medium ${
      location.pathname === path ? "bg-white text-slate-900" : "text-white"
    }`;

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gradient-to-tr from-blue-950 via-indigo-900 to-purple-900 text-white p-6 space-y-4 shadow-xl dark:bg-slate-900">
        <h2 className="text-xl font-medium text-black py-2">
          <span className="text-slate-500">Good</span>
          <span className="text-slate-900 dark:text-white">Notes</span>
        </h2>

        <nav className="flex flex-col space-y-2">
          <Link to="/user/dashboard" className={linkClass("/user/dashboard")}>
            <MdDashboard /> Dashboard
          </Link>

          <Link to="/user/allnotes" className={linkClass("/user/allnotes")}>
            <MdNotes /> All Notes
          </Link>

          <Link to="/user/userprofile" className={linkClass("/user/userprofile")}>
            <MdPerson /> Profile
          </Link>

          <Link to="/user/settings" className={linkClass("/user/settings")}>
            <MdSettings /> Settings
          </Link>
        </nav>

        {/* Theme Toggle */}
        <div
          onClick={() => setIsDark(!isDark)}
          className={linkClass("theme-toggle") + " cursor-pointer"}
        >
          {isDark ? <MdLightMode /> : <MdDarkMode />}
          {isDark ? "Light Mode" : "Dark Mode"}
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
