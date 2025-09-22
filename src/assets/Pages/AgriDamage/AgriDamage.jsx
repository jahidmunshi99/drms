import { FaEye } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
const AgriDamage = () => {
  return (
    <div>
      <section className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between">
          {/* <!-- Filtering Option --> */}
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
            <select
              name=""
              id=""
              className="text-sm text-slate-600 border border-gray-200 px-2 py-1 rounded"
            >
              <option value="">মৌসুম</option>
              <option value="">খরিপ-১</option>
              <option value="">খরিপ-২</option>
              <option value="">রবি</option>
            </select>
            <select
              name=""
              id=""
              className="text-sm text-slate-600 border border-gray-200 px-2 py-1 rounded"
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
            <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-slate-50">
              Export CSV
            </button>
            <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-slate-50">
              প্রিন্ট
            </button>
          </div>
        </div>
      </section>
      {/* <!-- Content Section --> */}
      <section className="mt-1 bg-white p-5 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4 border-b border-gray-200">
          একনজরে ক্ষয়ক্ষতির রিপোর্ট
        </h3>
        <div className="mx-auto mt-6 rounded-lg shadow-sm overflow-hidden">
          {/* <!-- Header Row --> */}
          <div className="grid grid-cols-2 gap-5 font-semibold">
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">বীজতলা</div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">হাইব্রিড</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১০০ হেক্টর
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">উফশী</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ হেক্টর
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">স্থানীয়</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ হেক্টর
                </div>
              </div>
              {/* <!-- Row 4 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">মোট</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৩০০০ হেক্টর
                </div>
              </div>
            </div>
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">দন্ডায়মান ফসল</div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">হাইব্রিড</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১০০ হেক্টর
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">উফশী</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ হেক্টর
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">স্থানীয়</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ হেক্টর
                </div>
              </div>
              {/* <!-- Row 4 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">মোট</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৩০০০ হেক্টর
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-1 bg-white px-5 py-3 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          {/* Left Side Title */}
          <h3 className="font-semibold border-b">
            উপজেলা ভিক্তিক ক্ষয়ক্ষতির বিবরণ
          </h3>

          {/* Right Side Buttons (hidden on small screens) */}
          <div className="flex items-center space-x-3 hidden sm:flex">
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-sm border rounded hover:bg-slate-50">
                Export CSV
              </button>
              <button className="px-3 py-1 text-sm border rounded hover:bg-slate-50">
                প্রিন্ট
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <div className="flex items-center space-x-3 text-sm mb-2 md:mb-0">
            <span>অর্থবছর</span>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>২০২৫-২৬</option>
              <option>২০২৪-২৫</option>
              <option>২০২৩-২৪</option>
            </select>
            <span>মৌসুম</span>
            <select className="border border-gray-300 rounded-md py-1 px-2">
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

        {/* Table */}
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
                    <span>উপজেলার নাম</span>
                    <i className="fas fa-sort"></i>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>মোট আবাদ</span>
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
                    <span>ফসলের স্তর</span>
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
                  <div className="font-medium">পটুয়াখালী সদর</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                  <span>১৫০০০ হেক্টর</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ২ হেক্টর
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  বীজতলা
                </td>
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
              {/* Repeat rows here */}
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
      <section className="mt-5 mb-1 bg-white px-5 py-3 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          {/* Left Side Title */}
          <h3 className="font-semibold border-b">
            ফসলের জাতভিত্তিক চুড়ান্ত ক্ষয়ক্ষতি
          </h3>

          {/* Right Side Buttons (hidden on small screens) */}
          <div className="flex items-center space-x-3 hidden sm:flex">
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-sm border rounded hover:bg-slate-50">
                Export CSV
              </button>
              <button className="px-3 py-1 text-sm border rounded hover:bg-slate-50">
                প্রিন্ট
              </button>
            </div>
          </div>
        </div>
      </section>
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

export default AgriDamage;
