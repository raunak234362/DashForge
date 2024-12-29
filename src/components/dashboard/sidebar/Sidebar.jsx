/* eslint-disable no-unused-vars */
import { NavLink, useNavigate } from "react-router-dom";
// import LOGO from "../../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "../../index";
import { toast } from "react-toastify";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBuilding, FaUser } from "react-icons/fa";
import { BsFillClipboard2DataFill } from "react-icons/bs";

// import AuthService from "../../../frappeConfig/AuthService";
const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = sessionStorage.getItem("token");
  const [currentUser, setCurrentUser] = useState();

  const clearCookies = () => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  };

  const fetchLogout = async () => {
    try {
      clearCookies();
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout Failed")
    }
  };


  useEffect(() => {
    // fetchLogout()
  }, []);

  const userType = sessionStorage.getItem("userType");
  return (
    <div className="flex flex-col justify-between h-full w-60 bg-white/30 md:border-2 text-black">
      <nav className="p-5 flex flex-col gap-10">
        <h1 className="text-2xl font-bold text-gray-900 cursor-pointer" onClick={() => navigate("/")}>
          Dashforge 
          </h1>
        <ul className="flex flex-col gap-5">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive
                 ? "flex justify-center items-center text-white bg-cyan-500/50 rounded-md w-full py-2 font-semibold  delay-150 transition-all ease-in-out"
                  : "text-black hover:text-white hover:flex hover:justify-center py-2 hover:items-center hover:bg-teal-200 transition-all rounded-md"
              }
            >
              <div className="flex gap-2 items-center"><BiSolidDashboard /> Dashboard</div>
            </NavLink>
          </li>

          <li className="w-full">
            <NavLink
              to="company/company-list"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center items-center text-white bg-cyan-500/50 rounded-md w-full py-2 font-semibold  delay-150 transition-all ease-in-out"
                  : "text-black hover:text-white hover:flex hover:justify-center hover:items-center py-2 hover:bg-teal-200 transition-ease-in rounded-md"
              }
            >
              <div className="flex gap-2 items-center"><FaBuilding />Company</div>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="data"
              className={({ isActive }) =>
                isActive
                 ? "flex justify-center items-center text-white bg-cyan-500/50 rounded-md w-full py-2 font-semibold  delay-150 transition-all ease-in-out"
                  : "text-black hover:text-white hover:flex hover:justify-center hover:items-center py-2 hover:bg-teal-200 transition-ease-in rounded-md"
              }
            >
              <div className="flex gap-2 items-center"><BsFillClipboard2DataFill />Data</div>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive
                 ? "flex justify-center items-center text-white bg-cyan-500/50 rounded-md w-full py-2 font-semibold  delay-150 transition-all ease-in-out"
                  : "text-black hover:text-white hover:flex hover:justify-center hover:items-center py-2 hover:bg-teal-200 transition-ease-in rounded-md"
              }
            >
              <div className="flex gap-2 items-center"><FaUser />Profile</div>
            </NavLink>
          </li>
          <li></li>
        </ul>
      </nav>
      <div className="md:flex md:justify-right mb-5">
        <Button className=" mx-4 w-full" onClick={fetchLogout}>
          Logout
        </Button>
        <div className="text-lg text-black md:hidden block">
          {currentUser?.username}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
