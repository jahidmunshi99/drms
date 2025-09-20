const AgriProjects = () => {
  return (
    <div>
      <section className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between">
          {/* <!-- Filtering Option --> */}
          <div className="flex items-center gap-4">
            <select
              name=""
              id=""
              className="text-sm text-slate-600 border px-2 py-1 rounded"
            >
              <option value="">অর্থবছর</option>
              <option value="">২০২৫-২৬</option>
              <option value="">২০২৪-২৫</option>
              <option value="">২০২৩-২৪</option>
            </select>
            <select
              name=""
              id=""
              className="text-sm text-slate-600 border px-2 py-1 rounded"
            >
              <option value="">মৌসুম</option>
              <option value="">খরিপ-১</option>
              <option value="">খরিপ-২</option>
              <option value="">রবি</option>
            </select>
            <select
              name=""
              id=""
              className="text-sm text-slate-600 border px-2 py-1 rounded"
            >
              <option value="">উপজেলা নির্বাচন করুন</option>
              <option value="">পটুয়াখালী সদর</option>
              <option value="">বাউফল</option>
              <option value="">গলাচিপা</option>
              <option value="">কলাপাড়া</option>
              <option value="">দশমিনা</option>
              <option value="">মির্জাগঞ্জ</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm border rounded hover:bg-slate-50">
              Export CSV
            </button>
            <button className="px-3 py-1 text-sm border rounded hover:bg-slate-50">
              প্রিন্ট
            </button>
          </div>
        </div>
      </section>
      {/* <!-- Content Section --> */}
      <section className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm mt-5">
        <div className="flex justify-between items-center mb-3 flex-wrap bg-white">
          <div className="flex items-center space-x-2 text-sm mb-2 md:mb-0">
            <span>Show</span>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>100</option>
            </select>
            <div className="flex space-x-2 flex-wrap mt-2 sm:mt-0">
              <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm hover:bg-gray-300 transition-colors">
                + Add New Project
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
                  <div className="flex items-center">
                    <span>SL</span>
                    <i className="fas fa-sort ml-1"></i>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    <span>Project Name</span>
                    <i className="fas fa-sort ml-1"></i>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    <span>Donor</span>
                    <i className="fas fa-sort ml-1"></i>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    <span>Project Duration</span>
                    <i className="fas fa-sort ml-1"></i>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  101
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                  <div className="font-medium">
                    Smallholder Agricultural Competitiveness Project (SACP)
                  </div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-black-600">
                  <span>IFAD</span>
                  <br />
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                  30 June 2026
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-900 mr-2 border border-blue-600 rounded-md px-2 py-1"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 mr-2 border border-green-600 rounded-md px-2 py-1"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 border border-red-600 rounded-md px-2 py-1"
                  >
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  102
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                  <div className="font-medium">
                    Smallholder Agricultural Competitiveness Project (SACP)
                  </div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-black-600">
                  <span>IFAD</span>
                  <br />
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                  30 June 2026
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-900 mr-2 border border-blue-600 rounded-md px-2 py-1"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 mr-2 border border-green-600 rounded-md px-2 py-1"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 border border-red-600 rounded-md px-2 py-1"
                  >
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  103
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                  <div className="font-medium">
                    Smallholder Agricultural Competitiveness Project (SACP)
                  </div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-black-600">
                  <span>IFAD</span>
                  <br />
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                  30 June 2026
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-900 mr-2 border border-blue-600 rounded-md px-2 py-1"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 mr-2 border border-green-600 rounded-md px-2 py-1"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 border border-red-600 rounded-md px-2 py-1"
                  >
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  104
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                  <div className="font-medium">
                    Smallholder Agricultural Competitiveness Project (SACP)
                  </div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-black-600">
                  <span>IFAD</span>
                  <br />
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                  30 June 2026
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-900 mr-2 border border-blue-600 rounded-md px-2 py-1"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 mr-2 border border-green-600 rounded-md px-2 py-1"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 border border-red-600 rounded-md px-2 py-1"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AgriProjects;
