/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Input, Button, Select } from "../../../index";
import { useEffect, useState } from "react";
import Service from "../../../../config/Service";
import { useDispatch, useSelector } from "react-redux";
import { readPrompt } from "../../../../store/companySlice";

const AIForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [companyOptions, setCompanyOptions] = useState([]); // Stores company options
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  const prompt =useSelector((state) => state.company?.generatePrompt?.data);
  console.log(prompt);
  const fetchAllCompany = async () => {
    try {
      const response = await Service.fetchAllCompanies();
      const options = response.map((company) => ({
        value: company._id, // or use company.name, based on your data
        label: company.companyName, // Display name of the company
      }));
      setCompanyOptions(options);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  useEffect(() => {
    fetchAllCompany();
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const response = await Service.sendAI(data);
    dispatch(readPrompt(response));
    console.log(response);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <section className="h-fit w-full rounded-md p-5 bg-white/30">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Select
            label="Select a Company"
            placeholder="Select a Company"
            options={companyOptions}
            {...register("companyId")} // Field name to store the selected company's ID
            onChange={setValue}
          />
        </div>

        <div>
          <Input
            label="Prompt"
            type="textarea"
            placeholder="Prompt"
            {...register("prompt")}
          />
        </div>
        <div className="flex w-full justify-center flex-row gap-10 mt-5">
          <Button type="submit">Generate</Button>
        </div>
      </form>
    </section>
  );
};

export default AIForm;
