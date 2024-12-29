/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthLayout, DashboardLayout, Data, GenerateData, Layout, Login, MainDashboard, RegisterCompany, ShowAllCompany, Signup } from "./components/index.js";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

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
        children:[
          {
            path:"",
            element:<MainDashboard/>
          },
          {
            path:"company",
            element:<GenerateData/>,
            children:[
              {
                path:"company-list",
                element:<ShowAllCompany/>
              },
              {
                path:"register-company",
                element:<RegisterCompany/>
              }
            ]
          },
          {
            path:"data",
            element:<Data/>
          }
        ]
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
