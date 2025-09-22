import { FaEye } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
const InsentiveAndRehabilitation = () => {
  return (
    <div>
      <section className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center flex-wrap justify-between gap-3">
          {/* <!-- Filtering Option --> */}
          <div className="flex items-center flex-wrap gap-3">
            <div className="flex items-center gap-4">
              <select
                name=""
                id=""
                className="text-sm text-slate-600 border border-gray-200 px-2 py-1 rounded"
              >
                <option value="">অর্থবছর</option>
                <option value="">২০২৫-২৬</option>
                <option value="">২০২৪-২৫</option>
                <option value="">২০২৩-২৪</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <select
                name=""
                id=""
                className="text-sm text-slate-600 border border-gray-200 px-2 py-1 rounded"
              >
                <option value="">সিলেক্ট করুন</option>
                <option value="">রবি</option>
                <option value="">খরিপ-১</option>
                <option value="">খরিপ-২</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-slate-50 whitespace-nowrap">
              Export CSV
            </button>
            <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-slate-50 whitespace-nowrap">
              প্রিন্ট
            </button>
          </div>
        </div>
      </section>
      {/* <!-- Section --> */}
      <section className="mt-1 bg-white p-5 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4 border-b border-gray-200">
          একনজরে প্রণোদনা ও পুনর্বাসন কর্মসূচী
        </h3>
        <div className="mx-auto mt-6 rounded-lg shadow-sm overflow-hidden">
          {/* <!-- Header Row --> */}
          <div className="grid grid-cols-2 gap-5 font-semibold">
            <div className="border border-gray-200">
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  প্রণোদনা কর্মসূচী
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১০টি
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  পুনর্বাসন কর্মসূচী
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০টি
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  উপকারভোগী কৃষক সংখ্যা
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ জন
                </div>
              </div>
            </div>
            <div className="border border-gray-200">
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  প্রতিষ্ঠান সংখ্যা
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১০০ জন
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">-</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  -
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">-</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  -
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Table Section --> */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h3 className="font-semibold mb-4 border-b border-gray-200">
          কর্মসূচীর নাম ও অন্যান্য তথ্যাদী
        </h3>
        {/* <!-- Top bar --> */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3 text-sm">
          <div className="flex items-center flex-wrap gap-2">
            <span>Show</span>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>100</option>
            </select>

            <select
              name=""
              id=""
              className="text-sm text-slate-600 border border-gray-200 px-2 py-1 rounded"
            >
              <option value="">মৌসুম</option>
              <option value="">রবি</option>
              <option value="">খরিপ-১</option>
              <option value="">খরিপ-২</option>
            </select>

            <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm hover:bg-gray-300 transition-colors">
              + Add New
            </button>
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
          <table className="min-w-full divide-y divide-gray-200 text-xs md:text-sm table-auto border">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider w-[60px]"
                >
                  জিও নং
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider w-[160px]"
                >
                  তারিখ
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider w-[200px]"
                >
                  কর্মসূচীর নাম
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider w-[140px]"
                >
                  বরাদ্দের পরিমাণ
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider w-[140px]"
                >
                  কৃষক সংখ্যা
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-center font-medium text-gray-500 uppercase tracking-wider w-[100px]"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 text-sm text-gray-500 text-center">
                  101
                </td>
                <td className="px-4 py-2 text-sm text-gray-900">24-08-2023</td>
                <td className="px-4 py-2 text-sm text-black-600">
                  লেবু চারা বিতরণ কর্মসূচী
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">৫০.০০০</td>
                <td className="px-4 py-2 text-sm text-gray-500">১০০০০ জন</td>
                <td className="px-6 py-2 flex whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-900 px-2 py-1"
                  >
                    <FaEye className="text-[16px]" />
                  </a>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 px-2 py-1"
                  >
                    <FaPenToSquare className="text-[15px]" />
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 px-2 py-1"
                  >
                    <MdDelete className="text-[18px]" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Pagination --> */}
        <div className="mt-4 flex justify-between items-center text-sm text-gray-600 flex-wrap gap-3">
          <span>Showing 0 to 0 of 0 entries</span>
          <div className="flex space-x-2">
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

export default InsentiveAndRehabilitation;
