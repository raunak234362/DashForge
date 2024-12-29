/* eslint-disable react/no-unescaped-entities */
import { BarChart3 } from "lucide-react";
import { Input, Button, DashboardLayout } from "../index";
import { useForm } from "react-hook-form";
import { SignedIn, SignedOut, useSignIn } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { isLoaded, signIn } = useSignIn();

  const onSubmit = async (data) => {
  if (!isLoaded) return; 
  
    const { emailAddress, password } = data;
  
    const identifier = emailAddress; 
  
    try {
      const signInAttempt = await signIn.create({
        identifier,  // Using the correct identifier (emailAddress or username)
        password,
      });
  
      if (signInAttempt.status === "complete") {
        toast.success("Sign in successful!");
        navigate("/dashboard");
      } else {
        console.log("Additional steps required:", signInAttempt);
      }
    } catch (error) {
      console.error("Error during sign-in:", error.message);
      toast.error("Either the email or password is incorrect. Please try again.");
      if (error.errors) {
        error.errors.forEach((err) => console.error(err.message)); 
      }
    }
  };
  

  return (
    <div className=" ">
      <SignedOut>
        <div className="min-h-screen flex items-center justify-center p-4  bg-gradient-to-t from-black to-blue-gray-800">
          <div className="w-full md:w-1/2 border-gray-400 border-2 md:p-10 p-4 rounded-2xl bg-white/30">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-400 text-white mb-4">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">DashForge</h1>
              <p className="text-gray-800 mt-2">
                Transform your data into dynamic dashboards
              </p>
            </div>

            <div className="w-full">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-center">
                  Sign in to your account
                </h2>
                <p className="text-sm text-gray-400 text-center pb-2">
                  Enter your credentials to access your dashboards
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      label="Mail ID:"
                      placeholder="Mail ID"
                      type="email"
                      {...register("emailAddress", {
                        required: "Mail ID is required",
                      })}
                    />
                    {errors.emailAddress && (
                      <p className="text-red-500">{errors.emailAddress.message}</p> 
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
                  <Button type="submit" className="w-full ">
                    Sign In
                  </Button>
                </form>
              </div>
              <div className="flex flex-col space-y-4 text-center mt-4">
                <div className="text-sm text-gray-500">
                  <a href="#" className="text-cyan-600 hover:text-cyan-800">
                    Forgot your password?
                  </a>
                </div>
                <div className="text-sm">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-cyan-600 hover:text-cyan-800 font-semibold"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <DashboardLayout />
      </SignedIn>
    </div>
  );
};

export default Login;
