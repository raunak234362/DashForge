import { useCallback, useState } from "react";
import { Sidebar } from "../../index";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, [setSidebarOpen]);

  // const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-screen h-screen overflow-hidden bg-gradient-to-t from-black to-blue-gray-800">
      {/* Sidebar */}

     

      <div className="flex flex-col w-full">
        <div className="mx-5 my-2 shadow-2xl drop-shadow-lg">
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        {/* Header */}
        <div className="flex flex-row">
          <div
            className={`fixed md:static flex flex-col md:bg-opacity-0 bg-white w-64 z-20 transition-transform duration-300 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:w-64`}
          >
            <div className="flex justify-between items-center p-4">
              <Sidebar />
            </div>
          </div>
          {/* Main Content */}
          <div
            className={`flex h-[89vh] overflow-y-auto flex-grow transition-all duration-300 ${
              sidebarOpen ? "md:ml-64 ml-0 bg-black/50" : "md:ml-0 ml-0"
            }`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
