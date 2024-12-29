/* eslint-disable no-unused-vars */
import axios from "axios";
// import { BASE_URL } from "./constant";
const baseUrl = import.meta.env.VITE_API_URL;
class AuthService {
  static async login(data) {
    try {
      const formData = { ...data };
      const response = await axios.post(`${baseUrl}/auth/login/`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 400) {
        throw new Error("Invalid Credentials");
      }
      console.log("Current User",response)
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        throw new Error("Invalid Credentials");
      } else {
        console.error("Error in login:", error);
        throw new Error("Could not connect to server");
      }
    }
  }

  static async register(data) {
    // console.log(data)
    try {
      const formData = { ...data };
      // console.log(formData)
      const response = await axios.post(`${baseUrl}/auth/signup/`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response)
      return response.data;
    } catch (error) {
      console.error("Error in register:", error);
      throw new Error("Could not connect to server");
    }
  }
}
export default AuthService;