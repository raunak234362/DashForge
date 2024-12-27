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

  return (
    <div className="w-full flex justify-center my-2">
      <nav className="bg-white/30 text-lg shadow-md md:w-[95%] w-full md:rounded-xl md:top-2 z-50 overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          {/* Logo */}
          <div className="text-white font-bold">DashForge</div>

          {/* Hamburger Menu (for small screens) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#255db1] focus:outline-none"
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
            <ul className="flex flex-col md:flex-row text-center md:space-x-6 text-lg">
              {isLoggedIn && (
                <li className="py-2 md:py-0">
                  <NavLink
                    to="/registerCompany"
                    className="block text-white hover:text-[#EE0A73] transition-colors duration-200 tracking-wide"
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
                    className="block text-[12px] md:text-[6px] lg:text-[10px] xl:text-[14px] text-white hover:text-[#EE0A73] transition-colors duration-200 tracking-wide"
                    style={{
                      textShadow: "2px 2px 2px #228EFD",
                    }}
                  >
                    Profile
                  </NavLink>
                </li>
              )}

              {isLoggedIn ? (
                <li className="py-2 md:py-0">
                  <NavLink
                    to="/dashboard"
                    className="block text-[12px] md:text-[6px] lg:text-[10px] xl:text-[14px] text-white hover:text-[#EE0A73] transition-colors duration-200 tracking-wide"
                    style={{
                      textShadow: "2px 2px 2px #228EFD",
                    }}
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : (
                <li className="py-2 md:py-0">
                  <NavLink
                    to="/login"
                    className="block text-[12px] md:text-[6px] lg:text-[10px] xl:text-[14px] text-white hover:text-[#EE0A73] transition-colors duration-200 tracking-wide"
                    style={{
                      textShadow: "2px 2px 2px #228EFD",
                    }}
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
