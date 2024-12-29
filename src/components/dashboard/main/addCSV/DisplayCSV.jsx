/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Service from "../../../../config/Service";

import { useEffect, useState } from "react";

const DisplayCSV = ({ CSVId }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      console.log("CSVId:", CSVId);
      const response = await Service.fetchCSVData(CSVId);
      console.log(response);
      setData(response);
    } catch (error) {
      console.error("Error fetching AI data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

//   if (!data?.length) {
//     return (
//       <div className="text-gray-500 text-center">
//         No data available to display.
//       </div>
//     );
//   }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white h-[93%] md:p-5 rounded-lg shadow-lg w-11/12 ">
      <h1>Hello BSDK</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                {data?.map((header, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-300"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.slice(1)?.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  {row?.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-4 py-2 text-sm text-gray-600 border-b border-gray-300"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayCSV;
