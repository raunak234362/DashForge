import { useCallback, useState } from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Features from "./feature/Features";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, [setSidebarOpen]);

  return (
    <div className="flex w-full h-screen overflow-y-auto flex-col bg-gradient-to-t from-black to-blue-gray-800">
      <div className="w-full sticky top-0 z-50">
        <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div>
        <div>
          <Hero />
        </div>
        <div>
          <Features />
        </div>
      </div>
    </div>
  );
};

export default Layout;
