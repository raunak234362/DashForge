import { useCallback, useState } from "react";
import { Sidebar } from "../../index";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-screen h-screen overflow-hidden bg-gradient-to-t from-black to-blue-gray-800">
      {/* Sidebar */}
      <div
        className={`fixed z-20 inset-y-0 left-0 transform transition-transform duration-300 ease-in-out 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:inset-auto md:flex-shrink-0 w-60 bg-blue-gray-900`}
      >
        <div className="flex flex-col h-full">
          <button
            className="md:hidden p-4 text-white"
            onClick={toggleSidebar}
          >
            Close Sidebar
          </button>
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <header className="flex items-center justify-between bg-blue-gray-800 text-white p-4 shadow-lg">
          <button
            className="md:hidden text-white"
            onClick={toggleSidebar}
          >
            Menu
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </header>

        {/* Content */}
        <main
          className="flex-grow overflow-y-auto p-4 transition-all duration-300"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
