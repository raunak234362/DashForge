import { useCallback, useState } from "react";
import Header from "./header/Header";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, [setSidebarOpen]);

  return (
    <div className="flex w-full h-screen bg-gradient-to-t from-black to-blue-gray-800">
      <div className="w-full">
        <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default Layout;
