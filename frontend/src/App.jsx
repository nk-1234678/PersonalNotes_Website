// src/App.jsx
import  { useEffect } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import UserRoutes from "./routes/UserRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const AppRoutes = () => {
  const routes = useRoutes([...PublicRoutes, ...UserRoutes]);
  return routes;
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // default animation duration in ms
      once: true, // animate only once
      offset: 100, // offset from the original trigger point
    });
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
