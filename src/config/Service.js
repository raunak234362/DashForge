// Use ES module import for axios
import axios from "axios";

// Access environment variable properly
const baseUrl = import.meta.env.VITE_API_URL;
console.log("API URL:", baseUrl);

class Service {
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
    }
    catch (error) {
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
    // Check if the file is provided
    const file = csv_file[0];
    if (!file) {
      console.error("No file selected");
      return;
    }
    console.log("File details:", file);

    try {
      const formData = new FormData();
      // Append the file to the formData
      formData.append("file", file, file.name);
      console.log("FormData created:", formData);

      // Use the correct endpoint to upload the file
      const response = await fetch(`${baseUrl}/upload-csv`, {
        method: "POST",
        body: formData, // Send the formData with the file
        // Do NOT manually set the 'Content-Type', as FormData will handle it
      });

      // Log the response for debugging
      console.log("Response object:", response);

      if (!response.ok) {
        // Handle unsuccessful responses
        console.error(`HTTP error! Status: ${response.status}`);
        return;
      }

      // Handle the response data (could be JSON, text, or any format depending on the backend)
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
