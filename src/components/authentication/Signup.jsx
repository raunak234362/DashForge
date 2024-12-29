/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Input, Button } from "../index";
import { useSignUp } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { BarChart3 } from "lucide-react";
import { toast } from "react-toastify";
import AuthService from "../../config/AuthService";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = AuthService.register(data);
      toast.success("Sign up successful");
      navigate("/login");
    } catch (error) {
      console.error("Error during sign-up:", error.errors);
      toast.error("Sign up failed. Please try again.");
    }
  };

  return (
    <div className=" ">
      <div className="min-h-screen flex items-center justify-center p-4  bg-gradient-to-t from-black to-blue-gray-800">
        <div className="w-full md:w-1/2 border-gray-400 border-2 md:p-10 p-4 rounded-2xl bg-white/30 ">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-400 text-white mb-4">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">DashForge</h1>
            <p className="text-gray-800 mt-2">
              Unlock Your Personalized Dashboard!
            </p>
          </div>

          <div className=" w-full">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-center">
                Sign up your account
              </h2>
              <p className="text-sm text-gray-400 text-center pb-2">
                Sign up now to create your custom dashboard and track what
                matters most to you in real-time.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <div>
                <Input
                  label="First Name:"
                  placeholder="First Name"
                  type="text"
                  {...register("f_name", {
                    required: "First name is required",
                  })}
                />
                {errors.f_name && (
                  <p className="text-red-500">{errors.f_name.message}</p>
                )}
              </div>
              <div>
                <Input
                  label="Last Name:"
                  placeholder="Last Name"
                  type="text"
                  {...register("l_name")}
                />
              </div>
              <div>
                <Input
                  label="Mail ID:"
                  placeholder="Mail ID"
                  type="email"
                  {...register("gmail", {
                    required: "Email is required",
                  })}
                />
                {errors.gmail && (
                  <p className="text-red-500">{errors.gmail.message}</p>
                )}
              </div>
              <div>
                <Input
                  label="Username:"
                  placeholder="Username"
                  type="text"
                  {...register("username")}
                />
              </div>
              <div>
                <Input
                  label="Password:"
                  placeholder="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div>
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
          <div className="flex flex-col space-y-4 text-center mt-4">
            <div className="text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-cyan-600 hover:text-cyan-800 font-semibold"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
