import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout, Layout, Login, Signup } from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // Main app component with header
    children: [
      {
        path: "",
        element: <Layout />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path:"signup",
        element: <Signup />,
      },
      {
        path:"dashboard",
        element: <DashboardLayout />,
        children: []
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
