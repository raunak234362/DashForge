// Use ES module import for axios
import axios from "axios";

// Access environment variable properly
const baseUrl = import.meta.env.VITE_API_URL;
console.log("API URL:", baseUrl);

class Service {
  static async addCompany(data) {
    try {
      const response = await axios.post(`${baseUrl}/createCompany`, data);
      console.log("Response Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding company", error);
      return null;
    }
  }

  static async fetchAllCompanies() {
    try {
      const response = await axios.get(`${baseUrl}/fetchAllCompanies`);
      console.log("Response Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching all companies", error);
      return null;
    }
  }

  static async fetchCompany(companyId) {
    try {
      const response = await axios.get(`${baseUrl}/fetchCompany/${companyId}`);
      console.log("Response Data:", response.data);
      return response.data.company;
    } catch (error) {
      console.error("Error fetching company", error);
      return null;
    }
  }

  static async fetchAI() {
    try {
      const response = await axios.post(`${baseUrl}/parse-csv`);
      console.log("Response Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching AI data", error);
      return null;
    }
  }

  static async fetchAllCSVData() {
    try {
      const response = await axios.get(`${baseUrl}/files`);
      console.log("Response Data:", response.data);
      return response.data.files;
    } catch (error) {
      console.error("Error fetching all CSV data", error);
      return null;
    }
  }

  static async fetchCSVData(CSVId) {
    console.log("ID:", CSVId);
    try {
      const response = await axios.get(`${baseUrl}/data/${CSVId}`);
      console.log("Response Data:", response.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching CSV data", error);
      return null;
    }
  }

  static async csvUpload({ csv_file }) {
    const file = csv_file[0];
    if (!file) {
      return;
    }
    try {
      const formData = new FormData();
      // Append the file to the formData
      formData.append("file", file, file.name);
      const response = await fetch(`${baseUrl}/upload-csv`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        return;
      }

      const responseData = await response.json(); // Assuming the server responds with JSON
      console.log("Response Data:", responseData);

      return responseData;
    } catch (error) {
      console.error("Error uploading CSV:", error);
      return error;
    }
  }
}

export default Service;
