export const text = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <div className="flex items-center space-x-3 text-sm mb-2 md:mb-0">
            <span>Show</span>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>100</option>
            </select>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>অর্থবছর</option>
              <option>২০২৪-২৫</option>
            </select>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>মৌসুম</option>
              <option>রবি</option>
              <option>খরিপ-১</option>
              <option>খরিপ-২</option>
            </select>
            <div className="flex space-x-2 flex-wrap mt-2 sm:mt-0">
              <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm hover:bg-gray-300 transition-colors">
                + Add New
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span>Search:</span>
            <input
              type="text"
              className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* <!-- Table --> */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>ক্র. নং</span>
                    <i className="fas fa-sort"></i>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>ফসলের নাম</span>
                    <i className="fas fa-sort"></i>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>জাত</span>
                    <i className="fas fa-sort"></i>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>আবাদ</span>
                    <i className="fas fa-sort"></i>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>ক্ষয়ক্ষতির পরিমান</span>
                    <i className="fas fa-sort"></i>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center justify-center space-x-1">
                    <span>ক্ষয়ক্ষতির স্তর</span>
                    <i className="fas fa-sort"></i>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <span>Actions</span>
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  101
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-left">
                  <div className="font-medium">বোরো</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                  <span>ব্রি ধান-৮৯</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ২০০০ হেক্টর
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ৪.৬ মে.ট
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ৪.৩৫ মে.ট
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-center">
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 px-2 py-1"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 px-2 py-1"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  101
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-left">
                  <div className="font-medium">বোরো</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                  <span>ব্রি ধান-৮৯</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ২০০০ হেক্টর
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ৪.৬ মে.ট
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ৪.৩৫ মে.ট
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-center">
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 px-2 py-1"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 px-2 py-1"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  101
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-left">
                  <div className="font-medium">বোরো</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                  <span>ব্রি ধান-৮৯</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ২০০০ হেক্টর
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ৪.৬ মে.ট
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ৪.৩৫ মে.ট
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-center">
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 px-2 py-1"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 px-2 py-1"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  101
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-left">
                  <div className="font-medium">বোরো</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                  <span>ব্রি ধান-৮৯</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ২০০০ হেক্টর
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ৪.৬ মে.ট
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ৪.৩৫ মে.ট
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-center">
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 px-2 py-1"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 px-2 py-1"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center text-sm text-gray-600 flex-wrap">
          <span>Showing 0 to 0 of 0 entries</span>
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
