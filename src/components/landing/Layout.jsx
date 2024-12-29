import { useCallback, useState } from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Features from "./feature/Features";
import { HowItWorks } from "./howItWorks/HowItWorks";
import { AIDashboardSection } from "./AiDashboard/AiDashboardSection";
import Footer from "./footer/Footer"
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
          <AIDashboardSection/>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
