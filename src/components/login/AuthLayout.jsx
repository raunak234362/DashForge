
import { BarChart3 } from "lucide-react";
import { Input, Button, DashboardLayout } from "../index";
import { useForm } from "react-hook-form";
import { SignedIn, SignedOut, useSignIn } from "@clerk/clerk-react";

const AuthLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoaded, signIn } = useSignIn();

  const onSubmit = async (data) => {
    if (!isLoaded) return; // Ensure Clerk is loaded

    const { gmail, password } = data;

    try {
      const signInAttempt = await signIn.create({
        identifier: gmail, // Email address or username
        password,
      });

      console.log(signInAttempt)
      if (signInAttempt.status === "complete") {
        console.log("Sign in successful!");
      } else {
        console.log("Additional steps required:", signInAttempt);
      }
    } catch (error) {
      console.error("Error during sign-in:", error.errors);
    }
  };

  return (
    <div>
      <SignedOut>
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
                      type="email"
                      {...register("gmail", {
                        required: "Mail ID is required",
                      })}
                    />
                    {errors.gmail && (
                      <p className="text-red-500">{errors.gmail.message}</p>
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
                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Sign In
                  </Button>
                </form>
              </div>
              <div className="flex flex-col space-y-4 text-center mt-4">
                <div className="text-sm text-gray-500">
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
                <div className="text-sm">
                  Don’t have an account?{" "}
                  <a
                    href="/signup"
                    className="text-indigo-600 hover:text-indigo-500 font-semibold"
                  >
                    Sign up
                  </a>
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

export default AuthLayout;
