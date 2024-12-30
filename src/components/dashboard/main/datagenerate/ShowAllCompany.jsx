import { useState } from "react";
import FetchCompany from "./FetchCompany";
import { Button } from "../../../index";
import { useSelector } from "react-redux";

const ShowAllCompany = () => {
  
const[selectedCompany, setSelectedCompany] = useState(null);
const[isModalOpen, setIsModalOpen] = useState(false);
const company =useSelector((state) => state.company?.companyData);

console.log(company);

  const handleViewClick = async (company) => {
    console.log(company)
    setSelectedCompany(company);
    setIsModalOpen(true);
  };
  const handleModalClose = async () => {
    setIsModalOpen(false);
    setSelectedCompany(null);
  }

  return (
    <div className="mt-5 h-[50vh] overflow-auto px-0 md:px-5">
      <table className="h-fit md:w-full w-[90vw] border-collapse text-center md:text-lg text-xs rounded-xl">
        <thead>
            <tr className="bg-teal-200/30">
                <th className="px-2 py-1 cursor-pointer">Company Name</th>
                <th className="px-2 py-1 cursor-pointer">Type</th>
                <th className="px-2 py-1 cursor-pointer">Location</th>
                <th className="px-2 py-1 cursor-pointer">Website</th>
                <th className="px-2 py-1 cursor-pointer">Actions</th>
            </tr>
        </thead>
        <tbody>
            {company?.map((company) => (
              <tr key={company._id} className="bg-teal-200/20">
                <td className="border px-2 py-1">{company.companyName}</td>
                <td className="border px-2 py-1">{company.typeOrganisation}</td>
                <td className="border px-2 py-1">{company.location}</td>
                <td className="border px-2 py-1">{company.website}</td>
                <td className="border px-2 py-1">
                  <Button onClick={() => handleViewClick(company)}>
                    View
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {selectedCompany && (
        <FetchCompany 
        Company = {selectedCompany}
        isModalOpen = {isModalOpen}
        onClose = {handleModalClose}
        />
      )}
    </div>
  )
}

export default ShowAllCompany
