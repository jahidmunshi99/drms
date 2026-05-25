import { FaEye } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const SeedbedTable = ({ onSeedbedInfo, bedData }) => {
  const filterCrop = bedData.map((item) => {
    const totals = item.varieties.reduce(
      (sum, varity) => {
        sum.totalTarget += varity.target;
        sum.totalAchivement += varity.achievement;
        sum.progress = Math.round(
          (sum.totalAchivement / sum.totalTarget) * 100,
        );
        return sum;
      },
      { totalTarget: 0, totalAchivement: 0 },
    );
    return {
      crop_name: item.crop_name,
      crop_session: item.crop_session,
      f_year: item.f_year,
      crop_type: item.crop_type,
      varieties: item.varieties,
      ...totals,
    };
  });

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
                  <span>progress</span>
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
            {filterCrop?.length > 0 ? (
              filterCrop.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                    {item?.id}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                    <div className="font-medium">{item?.f_year}</div>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                    <span className="px-3 py-1 text-xs font-medium bg-green-200 rounded-md capitalize">
                      {item?.crop_session}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                    {item?.crop_name}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center capitalize">
                    {item?.totalTarget} <sub>hec</sub>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                    {item?.totalAchivement} <sub>hec</sub>
                  </td>
                  <td className="p-2 whitespace-nowrap text-sm text-gray-500 text-center capitalize">
                    <span className="px-2 py-1 font-medium bg-red-100 text-red-600 rounded-md">
                      {item?.progress}%
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center capitalize">
                    {item?.varieties[item.varieties.length - 1]?.createAt}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-center text-sm font-medium">
                    <button
                      className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block cursor-pointer"
                      onClick={() => {
                        onSeedbedInfo(item);
                      }}
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
              ))
            ) : (
              <td colSpan="8" className="text-center py-4">
                No Data Found
              </td>
            )}
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
