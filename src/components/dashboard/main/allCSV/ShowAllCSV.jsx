/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Service from "../../../../config/Service";
import { Button } from "../../../index";
import DisplayCSV from "../addCSV/DisplayCSV";

const ShowAllCSV = () => {
  const [csv, setCSV] = useState([]);
  const [selectedCSV, setSelectedCSV] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fetchAllCSV = async () => {
    const response = await Service.fetchAllCSVData();
    console.log(response);
    setCSV(response);
    return response;
  };
  useEffect(() => {
    fetchAllCSV();
  }, []);

  const handleViewClick = async (CSVId) => {
    setSelectedCSV(CSVId);
    setIsModalOpen(true);
  };
  const handleModalClose = async () => {
    setSelectedCSV(null);
    setIsModalOpen(false);
  };

  console.log(csv);
  return (
    <div className="mt-5 bg-white/30 h-[50vh] overflow-auto">
      <table className="h-fit md:w-full w-[90vw] border-collapse text-center md:text-lg text-xs rounded-xl">
        <thead>
          <tr className="bg-teal-200/30">
            <th
              className="px-2 py-1 text-left cursor-pointer"
              // onClick={() => handleSort("name")}
            >
              File Name{" "}
              {/* {sortConfig.key === "name" &&
              (sortConfig.direction === "ascending" ? "▲" : "▼")} */}
            </th>
            <th
              className="px-2 py-1 cursor-pointer"
              // onClick={() => handleSort("fabricator")}
            >
              Date{" "}
              {/* {sortConfig.key === "fabricator" &&
              (sortConfig.direction === "ascending" ? "▲" : "▼")} */}
            </th>

            <th
              className="px-2 py-1 cursor-pointer"
              // onClick={() => handleSort("approval_date")}
            >
              Size{" "}
              {/* {sortConfig.key === "approval_date" &&
              (sortConfig.direction === "ascending" ? "▲" : "▼")} */}
            </th>
            <th className="px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {csv?.length === 0 ? (
            <tr className="bg-white">
              <td colSpan="6" className="text-center">
                No Projects Found
              </td>
            </tr>
          ) : (
            csv?.map((CSVData, index) => (
              <tr key={CSVData.id} className="hover:bg-blue-gray-100 border">
                <td className="border px-2 py-1 text-left">
                  {CSVData.filename}
                </td>
                <td className="border px-2 py-1">
                  {new Date(CSVData.uploadDate).toLocaleDateString()}
                </td>
                <td className="border px-2 py-1">{CSVData.size} KBs</td>
                <td className="border px-2 py-1">
                  <Button onClick={() => handleViewClick(CSVData.id)}>
                    View
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {selectedCSV && (
        <DisplayCSV
          CSVId={selectedCSV}
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default ShowAllCSV;
