/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Replace with actual login check logic
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("nav");
      if (window.scrollY > 50) {
        header.style.opacity = "0.9";
      } else {
        header.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex justify-center md:py-2">
      <nav className=" bg-blue-gray-900 text-lg shadow-md md:w-[95%] w-full md:rounded-xl md:top-2 z-50 overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-3 md:px-6 lg:px-8">
          {/* Logo */}
          <div className="text-white font-bold cursor-pointer"  onClick={() => navigate("/")}>DashForge</div>

          {/* Hamburger Menu (for small screens) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#ffffff] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`absolute md:relative z-50 w-full md:w-auto left-0 top-16 md:top-auto md:left-auto md:flex items-center md:space-x-6 transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col md:bg-transparent md:flex-row bg-blue-gray-900 text-center md:space-x-16 md:text-base lg:text-lg">
              {isLoggedIn && (
                <li className="py-2 md:py-0">
                  <NavLink
                    to="/registerCompany"
                    className={({ isActive }) =>
                      isActive
                    ? "block text-xl text-white transition-colors duration-200 tracking-wide bg-cyan-500 hover:bg-cyan-500/50 px-3 py-1 rounded-lg "  
                    : "block text-xl text-white transition-colors duration-200 tracking-wide hover:bg-cyan-500/50 px-3 py-1 rounded-lg "
                    }
                    style={{
                      textShadow: "2px 2px 2px #228EFD",
                    }}
                  >
                    Register Company
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className="py-2 md:py-0">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-xl text-white transition-colors duration-200 tracking-wide bg-cyan hover:bg-cyan-500/50 px-3 py-1 rounded-lg "
                        : "block text-xl text-white transition-colors duration-200 tracking-wide hover:bg-cyan-500/50 px-3 py-1 rounded-lg "
                    }
                    style={{
                      textShadow: "2px 2px 2px #228EFD",
                    }}
                  >
                    Profile
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className="py-2 md:py-0">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-xl text-white transition-colors duration-200 tracking-wide bg-cyan-500 hover:bg-cyan-500/50 px-3 py-1 rounded-lg "
                        : "block text-xl text-white transition-colors duration-200 tracking-wide hover:bg-cyan-500/50 px-3 py-1 rounded-lg "
                    }
                    style={{
                      textShadow: "2px 2px 2px #228EFD",
                    }}
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}

              <li className="py-2 md:py-0">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block text-xl text-white transition-colors duration-200 tracking-wide bg-cyan-500 hover:bg-cyan-500/50 px-3 py-1 rounded-lg "
                      : "block text-xl text-white transition-colors duration-200 tracking-wide hover:bg-cyan-500/50 px-3 py-1 rounded-lg "
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="py-2 md:py-0">
                <NavLink
                  to="/Home"
                  className={({ isActive }) =>
                    isActive
                      ? "block text-xl text-white transition-colors duration-200 tracking-wide bg-cyan-500 hover:bg-cyan-500/50 px-3 py-1 rounded-lg "
                      : "block text-xl text-white transition-colors duration-200 tracking-wide hover:bg-cyan-500/50 px-3 py-1 rounded-lg "
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="py-2 md:py-0">
                <NavLink
                  to="/Home"
                  className={({ isActive }) =>
                    isActive
                      ? "block text-xl text-white transition-colors duration-200 tracking-wide bg-cyan-500 hover:bg-cyan-500/50 px-3 py-1 rounded-lg "
                      : "block text-xl text-white transition-colors duration-200 tracking-wide hover:bg-cyan-500/50 px-3 py-1 rounded-lg "
                  }
                >
                  Features
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
