import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout, Layout, Login } from "./components/index.js";

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
          children:[{
            path: "signup",
            element: <Login />,
          }]
        },
      ],
    },
  ]);

  export default router;