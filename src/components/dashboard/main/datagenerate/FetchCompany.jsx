/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, AddCSV } from "../../../index";

const FetchCompany = ({ Company, onClose }) => {
  const handleClose = async () => {
    onClose(true);
  };
  console.log(Company);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white md:h-7/12 md:p-5 rounded-lg shadow-lg md:w-7/12 ">
        <div className="flex justify-between bg-blue-gray-900 px-3 py-3 rounded-lg items-center mb-4">
          <h2 className="text-2xl font-bold text-white">
            Company name: {Company.companyName}
          </h2>
          <Button onClick={onClose}>Close</Button>
        </div>
        <div>
          <div className="px-3">
            <h1>
              Location: <strong>{Company.location}</strong>
            </h1>
          </div>
          <div className="px-3">
            <h1>
              Organisation Type: <strong>{Company.typeOrganisation}</strong>
            </h1>
          </div>
          <div className="px-3">
            <h1>
              Team Size: <strong>{Company.teamSize}</strong>
            </h1>
          </div>
          <div className="px-3">
            <h1>
              Website:{" "}
              <strong>
                <a
                  href={Company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Company.website}
                </a>
              </strong>
            </h1>
          </div>
        </div>

        <div className="bg-blue-gray-800 p-5 m-3 rounded-lg">
          <div className="text-xl text-white font-bold">Add CSV Data</div>
          <AddCSV company={Company}/>
        </div>
      </div>
    </div>
  );
};

export default FetchCompany;
