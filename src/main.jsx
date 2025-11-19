import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/Routes.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import ServiceProvider from "./context/ServiceProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ServiceProvider>
      <RouterProvider router={router} />
    </ServiceProvider>
  </AuthProvider>
);
