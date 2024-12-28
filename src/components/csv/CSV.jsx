/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Input } from "../index";
import { useForm } from "react-hook-form";
import Service from "../../config/Service";

const AddCSV = () => {
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

  const handleCSV = async (csvData) => {
    try {
      if (!csvData) {
        console.error("No file selected");
        return;
      }
      const data = await Service.csvUpload(csvData);
      console.log(data);
      alert("Successfully added users from CSV");
      return data;
    } catch (error) {
      console.error("Error adding users from CSV", error);
    }
  };

  return (
    <div className="rounded-lg shadow-lg shadow-black/15 p-8 mt-8">
      <form onSubmit={handleSubmit(handleCSV)}>
        <input
          type="file"
          id="csv"
          required
          accept=".xls,.xlsx,.csv"
          // onChange={async (e) => {
          //   handleFileChange(e, "csv_upload");
          //   await setFormData((prevState) => ({
          //     ...prevState,
          //     csv_upload: e?.target?.files,
          //   }));
          // }}
          {...register("csv_file")}
        />
        <div className="flex flex-row gap-10 mt-5">
          <Button type="submit" onClick={handleCSV}>
            Upload
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCSV;