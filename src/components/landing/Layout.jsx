import { useCallback, useState } from "react";
import {Features, Footer, Header, Hero, HowItWorks} from "../index" 
import { ADashboard } from "./aidash/ADashboard";
// import { ADashboard } from "./aidashboard/ADashboard";

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
      <div className="mt-5 md:mt-10 lg:mt-10">
        <div>
          <Hero />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <HowItWorks />
        </div>
        <div>
          <ADashboard />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
