/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Input } from "../index";
import { useForm } from "react-hook-form";
import Service from "../../config/Service";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AddCSV = (company) => {
  const companyID = company.company._id;
  

  console.log(companyID, 12, "csv.jsx");

  const [formData, setFormData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleFileChange = (e) => {
    const file = e.target.files;

    setFormData((prevState) => ({
      ...prevState,
      csv_upload: file,
    }));
  };
  // console.log(companyID);
  const handleCSV = async (csvData ) => {
    console.log(csvData,"-------");
    try {
      if (!csvData) {
        console.error("No file selected");
        return;
      }
      // console.log("id----------------", companyID);
      
      const updateData ={ ...csvData, organizationId: companyID};
      console.log("Updated CSV with file----------",updateData);
      const data = await Service.csvUpload(updateData);
      console.log(data);
      toast.success("Successfully added users from CSV");
      return data;
    } catch (error) {
      console.error("Error adding CSV", error);
    }
  };

  return (
    <div className="rounded-lg shadow-lg bg-white px-5 py-2 mt-8">
      <form onSubmit={handleSubmit(handleCSV)}>
        <input
          type="file"
          id="csv"
          accept=".xls,.xlsx,.csv"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...register("csv_file", { required: "Please select a CSV file" })}
        />
        <div className="flex flex-row gap-10 mt-5">
          <Button type="submit">Upload</Button>
        </div>
      </form>
    </div>
  );
};

export default AddCSV;
