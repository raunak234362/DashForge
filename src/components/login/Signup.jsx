/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Input, Button } from "../index";
// import AuthService from "../../config/AuthService";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // const response = await AuthService.register(data);
    // console.log(response);
    console.log(data);
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
              type="text"
              {...register("gmail")}
            />
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