import { FaEye } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const SeedbedTable = ({ onCropInfo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg px-4 py-4">
      {/* Table Header */}
      <div className="flex items-center justify-between pb-3">
        <h2 className="text-base font-semibold text-gray-800">
          Seedbed Overview
        </h2>
        <span className="text-sm text-gray-500">10 records</span>
      </div>
      {/* <!-- Table --> */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center space-x-1">
                  <span>SL</span>
                </div>
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center space-x-1">
                  <span>Fin. Year</span>
                </div>
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center space-x-1">
                  <span>Session</span>
                </div>
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center space-x-1">
                  <span>Crop Name</span>
                </div>
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center justify-center space-x-1">
                  <span>Target</span>
                </div>
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center justify-center space-x-1">
                  <span>Achivement</span>
                </div>
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center justify-center space-x-1">
                  <span>Updated At</span>
                </div>
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <span>Actions</span>
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                101
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                <div className="font-medium">2025-26</div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                <span className="px-3 py-1 text-xs font-medium bg-green-200 rounded-md">
                  Robi
                </span>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                Boro
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center capitalize">
                4500 <sup>hec</sup>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                4100{" "}
                <sup className="px-2 py-1 font-medium bg-red-100 text-red-600 rounded-md">
                  90%
                </sup>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                30 June 2026
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-center text-sm font-medium">
                <button
                  className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block cursor-pointer"
                  onClick={onCropInfo}
                >
                  <FaEye className="text-[16px]" />
                </button>
                <button className="text-green-600 hover:text-green-900 px-2 py-1 inline-block cursor-pointer">
                  <FaPenToSquare className="text-[15px]" />
                </button>
                <button className="text-red-600 hover:text-red-900 px-2 py-1 inline-block cursor-pointer">
                  <MdDelete className="text-[18px]" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center text-sm text-gray-600 flex-wrap">
        <span>Showing 0 to 0 of 0 entries</span>
        <div className="flex space-x-2 mt-2 sm:mt-0">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
            Previous
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeedbedTable;
