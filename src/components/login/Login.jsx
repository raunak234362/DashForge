/* eslint-disable react/no-unescaped-entities */

import { BarChart3 } from "lucide-react";
import { Button, Input } from "../index";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import AuthService from "../../config/AuthService";
// import { useDispatch, useSelector } from "react-redux";
// import { setUserData } from "../../store/userSlice";
const Login = () => {
//   const dispatch =useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   const userData = useSelector((state) => state.userData?.userData);
//   console.log("Session Record:----", userData);

  const onSubmit = async (data) => {
    try {
    //   const session = await AuthService.login(data);
    //   if (session?.status === 200) {
    //     const token = session?.data?.token;
    //     sessionStorage.setItem("token", token);
    //     dispatch(setUserData(session?.data?.user));
    //   }
    console.log("data",data);
    } catch (error) {
      console.error(error);
    }
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-400 text-white mb-4">
            <BarChart3 className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">DashForge</h1>
          <p className="text-gray-600 mt-2">
            Transform your data into dynamic dashboards
          </p>
        </div>

        <div className="w-full">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-center">
              Sign in to your account
            </h2>
            <p className="text-sm text-gray-500 text-center">
              Enter your credentials to access your dashboards
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Input
                  label="Mail ID:"
                  placeholder="Mail ID"
                  type="text"
                  {...register("gmail", {
                    required: "Mail ID is required",
                  })}
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Input
                  label="Password:"
                  placeholder="PASSWORD"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                Sign In
              </Button>
            </form>
          </div>
          <div className="flex flex-col space-y-4 text-center">
            <div className="text-sm text-gray-500">
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
            <div className="text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-indigo-600 hover:text-indigo-500 font-semibold"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;