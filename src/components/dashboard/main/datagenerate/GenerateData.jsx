/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Service from "../../../../config/Service";
import { AddCSV, Input, Button, ShowAllCSV } from "../../../index";
import RegisterCompany from "./RegisterCompany";

const GenerateData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const FetchAI = async () => {
    try {
      const response = await Service.fetchAI();
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error fetching AI data", error);
      return null;
    }
  };
  return (
    <div>
      {/* <div>
        <AddCSV />
        <ShowAllCSV />
      </div>
      <div>
        <form onSubmit={handleSubmit(FetchAI)} className="flex flex-row gap-4">
          <Input
            label="Generate AI Data"
            type="text"
            placeholder="Generate AI Data"
            {...register}
          />
          <Button type="submit">Search</Button>
        </form>
      </div> */}
      <RegisterCompany/>
    </div>
  );
};

export default GenerateData;
