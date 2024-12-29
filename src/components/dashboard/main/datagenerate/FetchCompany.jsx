/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "../../../index";

const FetchCompany = ({ Company, onClose }) => {
  const handleClose = async () => {
    onClose(true);
  };
  console.log(Company);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white h-[93%] md:p-5 rounded-lg shadow-lg w-11/12 ">
        <div className="flex flex-row justify-between">
          <Button className="bg-red-500" onClick={handleClose}>
            Close
          </Button>
        </div>
        <div>
            <h1>Company ID: {Company._id}</h1>
        </div>
      </div>
    </div>
  );
};

export default FetchCompany;
