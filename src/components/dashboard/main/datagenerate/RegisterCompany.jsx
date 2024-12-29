import { useForm } from "react-hook-form";
import { Input, Button, Select } from "../../../index";
import Service from "../../../../config/Service";
import { useState } from "react";

const RegisterCompany = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const companyData = await Service.registerCompany(data);
    console.log(companyData);
    setIsSubmitting(true);

    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    // Redirect to a success page or dashboard
  };

  return (
    <>
      <section className="h-fit w-full  rounded-md p-5">
       
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              label="Company Name"
              type="text"
              placeholder="Company Name"
              {...register("companyName", { required: true })}
            />
            {errors.companyName && <div>This field is required</div>}
          </div>
          <div>
            <Input
              label="Location"
              type="text"
              placeholder="Location"
              {...register("location", { required: true })}
            />
            {errors.location && <div>This field is required</div>}
          </div>

          <div>
            <Select
              label="Type of Organization"
              placeholder="Type of Organization"
              options={[
                { value: "technology", label: "Technology" },
                { value: "finance", label: "Finance" },
                { value: "healthcare", label: "Healthcare" },
                { value: "education", label: "Education" },
                { value: "other", label: "Other" },
              ]}
              {...register("typeOrganisation")}
              onChange={setValue}
            />
          </div>
          <div>
            <Select
              label="Number of Employees"
              placeholder="Number of Employees"
              options={[
                { value: "1-10", label: "1-10" },
                { value: "11-50", label: "11-50" },
                { value: "51-200", label: "51-200" },
                { value: "201-500", label: "201-500" },
                { value: "500+", label: "500+" },
              ]}
              {...register("teamSize")}
              onChange={setValue}
            />
          </div>
          <div>
            <Input
              label="Website"
              type="text"
              placeholder="Website"
              {...register("website", { required: true })}
            />
            {errors.website && <div>This field is required</div>}
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register Company"}
          </Button>
        </form>
      </section>
    </>
  );
};

export default RegisterCompany;
