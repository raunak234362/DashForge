/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Service from "../../../../config/Service";
import { AddCSV, Input, Button, ShowAllCSV } from "../../../index";
import RegisterCompany from "./RegisterCompany";
import ShowAllCompany from "./ShowAllCompany";
import { NavLink, Outlet } from "react-router-dom";

const GenerateData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const FetchAI = async () => {
    try {
      const response = await Service.fetchAI();
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error fetching AI data", error);
      return null;
    }
  };
  return (
    <div>
      <div className="h-[85vh] overflow-y-auto">
      <div className="flex w-full my-5 justify-center items-center">
            <div className="text-3xl font-bold text-white bg-cyan-500/50 shadow-xl px-5 py-1 mt-2 rounded-lg">
              Company Data
            </div>
          </div>
        <div className={` rounded-lg bg-white/20 md:text-lg text-sm`}>
          <div className="overflow-auto rounded-lg bg-blue-gray-800 drop-shadow-md md:w-full w-full">
            <nav className="px-5 drop-shadow-md text-center">
              <ul className=" flex items-center justify-evenly gap-10 py-1 text-center">
              <li className="px-2">
                  <NavLink
                    to="company-list"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-cyan-500/50 text-white drop-shadow-lg flex px-5 py-2 rounded-lg font-semibold"
                        : "hover:bg-teal-200 rounded-lg flex px-5 py-2 hover:text-white"
                    }
                  >
                    Company List
                  </NavLink>
                </li>
                <li className="px-2">
                  <NavLink
                    to="register-company"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-cyan-500/50 text-white drop-shadow-lg flex px-5 py-2 rounded-lg font-semibold"
                        : "hover:bg-teal-200 rounded-lg flex px-5 py-2 hover:text-white"
                    }
                  >
                    Registery Company
                  </NavLink>
                </li>
               
              </ul>
            </nav>
          </div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default GenerateData;
