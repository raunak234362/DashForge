/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Input, Button } from "../index";
import { useSignUp } from "@clerk/clerk-react";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoaded, signUp } = useSignUp();

  const onSubmit = async (data) => {
    if (!isLoaded) return; // Ensure Clerk is loaded before making calls

    try {
      // Create a new user with Clerk
      const signUpAttempt = await signUp.create(data);
      console.log("signUpAttempt", signUpAttempt);
      // Prepare email verification if needed
      if (signUpAttempt.status === "needs_verification") {
        await signUpAttempt.prepareEmailAddressVerification();
        console.log("Sign-up successful! Please verify your email.");
      } else {
        console.log("Sign-up complete!", signUpAttempt);
      }
    } catch (error) {
      console.error("Error during sign-up:", error.errors);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">
            Create an Account
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div>
            <Input
              label="First Name:"
              placeholder="First Name"
              type="text"
              {...register("firstName", {
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
              {...register("lastName")}
            />
          </div>
          <div>
            <Input
              label="Mail ID:"
              placeholder="Mail ID"
              type="email"
              {...register("emailAddress", {
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
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
