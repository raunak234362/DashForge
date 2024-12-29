/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout, Data, GenerateData, Layout, MainDashboard, RegisterCompany, ShowAllCompany, Profile } from "./components/index.js";
// import { ClerkProvider } from "@clerk/clerk-react";
import Login from "./components/authentication/Login.jsx";
import Signup from "./components/authentication/Signup.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
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
            path:"profile",
            element:<Profile/>
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
            element:<Data/>,
            
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
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}
      <RouterProvider router={router} />
    {/* </ClerkProvider> */}
  </StrictMode>
);
