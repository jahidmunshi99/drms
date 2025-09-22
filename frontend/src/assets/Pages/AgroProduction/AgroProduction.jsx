import { FaEye } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { IoPrintOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
const AgroProduction = () => {
  return (
    <div>
      {/* Top Header */}
      <section className="bg-white px-4 py-2 mb-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="text-sm text-slate-600">
              <select className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded">
                <option value="">অর্থবছর</option>
                <option value="">২০২৫-২৬</option>
                <option value="">২০২৪-২৫</option>
                <option value="">২০২৩-২৪</option>
                <option value="">২০২২-২৩</option>
                <option value="">২০২১-২২</option>
              </select>
            </div>
            <div className="text-sm text-slate-600">
              <select className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded">
                <option value="">মৌসুম</option>
                <option value="">রবি</option>
                <option value="">খরিপ-১</option>
                <option value="">খরিপ-২</option>
              </select>
            </div>
            <div className="text-sm text-slate-600">
              <select className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded">
                <option value="">উপজেলা নির্বাচন করুন</option>
                <option value="">পটুয়াখালী সদর</option>
                <option value="">বাউফল</option>
                <option value="">গলাচিপা</option>
                <option value="">কলাপাড়া</option>
                <option value="">দশমিনা</option>
                <option value="">মির্জাগঞ্জ</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-200 cursor-pointer">
              Export CSV
            </button>
            <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-200 cursor-pointer">
              <IoPrintOutline className="text-xl" />
            </button>
          </div>
        </div>
      </section>

      {/* <!-- Content Section --> */}
      <section className="mt-1 bg-white p-5 shadow-sm">
        <h3 className="font-semibold border-b border-gray-300">
          একনজরে ফসলের আবাদ (হেক্টরে)
        </h3>
        <div className="mx-auto mt-4 overflow-hidden">
          {/* <!-- Header Row --> */}
          <div className="grid grid-cols-2 gap-5 font-semibold">
            {/* <!-- Left Column --> */}
            <div className="border border-gray-200 shadow-sm">
              <div className="bg-gray-100 py-2 px-4">বীজতলা</div>
              <div className=" overflow-hidden">
                {/* <!-- Table Header --> */}
                <div className="grid grid-cols-[60%_20%_20%] bg-gray-50 border-b border-gray-200 font-semibold text-sm">
                  <div className="py-2 px-4">জাত</div>
                  <div className="py-2 px-4 text-center">লক্ষ্যমাত্রা</div>
                  <div className="py-2 px-4 text-center">অর্জন</div>
                </div>

                {/* <!-- Row 1 --> */}
                <div className="grid grid-cols-[60%_20%_20%] border-b border-gray-200 text-sm">
                  <div className="py-2 px-4 text-slate-700">হাইব্রিড</div>
                  <div className="py-2 px-4 text-center">১০০</div>
                  <div className="py-2 px-4 text-center">৮০</div>
                </div>

                {/* <!-- Row 2 --> */}
                <div className="grid grid-cols-[60%_20%_20%] border-b border-gray-200 text-sm">
                  <div className="py-2 px-4 text-slate-700">উফশী</div>
                  <div className="py-2 px-4 text-center">৫০০</div>
                  <div className="py-2 px-4 text-center">৪২০</div>
                </div>

                {/* <!-- Row 3 --> */}
                <div className="grid grid-cols-[60%_20%_20%] border-b border-gray-200 text-sm">
                  <div className="py-2 px-4">স্থানীয়</div>
                  <div className="py-2 px-4 text-center">১৫০০</div>
                  <div className="py-2 px-4 text-center">১২০০</div>
                </div>

                {/* <!-- Row 4 (Total) --> */}
                <div className="grid grid-cols-[60%_20%_20%] font-family text-sm">
                  <div className="py-2 px-4">মোট</div>
                  <div className="py-2 px-4 text-center">৩০০০</div>
                  <div className="py-2 px-4 text-center">২৫০০</div>
                </div>
              </div>
            </div>
            {/* <!-- Right Column --> */}
            <div className="border border-gray-200 shadow-sm">
              <div className="bg-gray-100 py-2 px-4">চুড়ান্ত আবাদ</div>
              <div className="overflow-hidden">
                {/* <!-- Table Header --> */}
                <div className="grid grid-cols-[60%_20%_20%] bg-gray-50 border-b border-gray-200 font-semibold text-sm">
                  <div className="py-2 px-4">জাত</div>
                  <div className="py-2 px-4 text-center">লক্ষ্যমাত্রা</div>
                  <div className="py-2 px-4 text-center">অর্জন</div>
                </div>

                {/* <!-- Row 1 --> */}
                <div className="grid grid-cols-[60%_20%_20%] border-b border-gray-200 text-sm">
                  <div className="py-2 px-4 text-slate-700">হাইব্রিড</div>
                  <div className="py-2 px-4 text-center">১০০</div>
                  <div className="py-2 px-4 text-center">৮০</div>
                </div>

                {/* <!-- Row 2 --> */}
                <div className="grid grid-cols-[60%_20%_20%] border-b border-gray-200 text-sm">
                  <div className="py-2 px-4 text-slate-700">উফশী</div>
                  <div className="py-2 px-4 text-center">৫০০</div>
                  <div className="py-2 px-4 text-center">৪২০</div>
                </div>

                {/* <!-- Row 3 --> */}
                <div className="grid grid-cols-[60%_20%_20%] border-b border-gray-200 text-sm">
                  <div className="py-2 px-4">স্থানীয়</div>
                  <div className="py-2 px-4 text-center">১৫০০</div>
                  <div className="py-2 px-4 text-center">১২০০</div>
                </div>

                {/* <!-- Row 4 (Total) --> */}
                <div className="grid grid-cols-[60%_20%_20%] font-family text-sm">
                  <div className="py-2 px-4">মোট</div>
                  <div className="py-2 px-4 text-center">৩০০০</div>
                  <div className="py-2 px-4 text-center">২৫০০</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Content Section --> */}
      <section className="mt-5 bg-white p-5 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4 border-b border-gray-300">
          কর্তন ও উৎপাদন
        </h3>
        <div className="mx-auto mt-4 overflow-hidden">
          {/* <!-- Header Row --> */}
          <div className="grid grid-cols-2 gap-5 font-semibold">
            {/* <!-- Left Column --> */}
            <div className="border border-gray-200 shadow-sm">
              <div className="bg-gray-100 py-2 px-4">কর্তন</div>
              <div className=" overflow-hidden">
                {/* <!-- Table Header --> */}
                <div className="grid grid-cols-[60%_20%_20%] bg-gray-50 border-b border-gray-200 font-semibold text-sm">
                  <div className="py-2 px-4">জাত</div>
                  <div className="py-2 px-4 text-center">লক্ষ্যমাত্রা</div>
                  <div className="py-2 px-4 text-center">অর্জন</div>
                </div>

                {/* <!-- Row 1 --> */}
                <div className="grid grid-cols-[60%_20%_20%] border-b border-gray-200 text-sm">
                  <div className="py-2 px-4 text-slate-700">হাইব্রিড</div>
                  <div className="py-2 px-4 text-center">১০০</div>
                  <div className="py-2 px-4 text-center">৮০</div>
                </div>

                {/* <!-- Row 2 --> */}
                <div className="grid grid-cols-[60%_20%_20%] border-b border-gray-200 text-sm">
                  <div className="py-2 px-4 text-slate-700">উফশী</div>
                  <div className="py-2 px-4 text-center">৫০০</div>
                  <div className="py-2 px-4 text-center">৪২০</div>
                </div>

                {/* <!-- Row 3 --> */}
                <div className="grid grid-cols-[60%_20%_20%] border-b border-gray-200 text-sm">
                  <div className="py-2 px-4">স্থানীয়</div>
                  <div className="py-2 px-4 text-center">১৫০০</div>
                  <div className="py-2 px-4 text-center">১২০০</div>
                </div>

                {/* <!-- Row 4 (Total) --> */}
                <div className="grid grid-cols-[60%_20%_20%] font-family text-sm">
                  <div className="py-2 px-4">মোট</div>
                  <div className="py-2 px-4 text-center">৩০০০</div>
                  <div className="py-2 px-4 text-center">২৫০০</div>
                </div>
              </div>
            </div>
            {/* <!-- Right Column --> */}
            <div className="border border-gray-200 shadow-sm">
              <div className="bg-gray-100 py-2 px-4">উৎপাদন</div>
              <div className="overflow-hidden">
                {/* <!-- Table Header --> */}
                <div className="grid grid-cols-[60%_20%_20%] bg-gray-50 border-b border-gray-200 font-semibold text-sm">
                  <div className="py-2 px-4">জাত</div>
                  <div className="py-2 px-4 text-center">লক্ষ্যমাত্রা</div>
                  <div className="py-2 px-4 text-center">অর্জন</div>
                </div>

                {/* <!-- Row 1 --> */}
                <div className="grid grid-cols-[60%_20%_20%] border-b border-gray-200 text-sm">
                  <div className="py-2 px-4 text-slate-700">হাইব্রিড</div>
                  <div className="py-2 px-4 text-center">১০০</div>
                  <div className="py-2 px-4 text-center">৮০</div>
                </div>

                {/* <!-- Row 2 --> */}
                <div className="grid grid-cols-[60%_20%_20%] border-b border-gray-200 text-sm">
                  <div className="py-2 px-4 text-slate-700">উফশী</div>
                  <div className="py-2 px-4 text-center">৫০০</div>
                  <div className="py-2 px-4 text-center">৪২০</div>
                </div>

                {/* <!-- Row 3 --> */}
                <div className="grid grid-cols-[60%_20%_20%] border-b border-gray-200 text-sm">
                  <div className="py-2 px-4">স্থানীয়</div>
                  <div className="py-2 px-4 text-center">১৫০০</div>
                  <div className="py-2 px-4 text-center">১২০০</div>
                </div>

                {/* <!-- Row 4 (Total) --> */}
                <div className="grid grid-cols-[60%_20%_20%] font-family text-sm">
                  <div className="py-2 px-4">মোট</div>
                  <div className="py-2 px-4 text-center">৩০০০</div>
                  <div className="py-2 px-4 text-center">২৫০০</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Content Section --> */}
      <section className="mt-5 mb-1 bg-white px-5 py-3 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          {/* Left Side Title */}
          <h3 className="font-semibold border-b border-gray-200">
            উপজেলা ভিত্তিক ফসলের আবাদের ও উৎপাদন
          </h3>

          {/* Right Side Buttons (hidden on small screens) */}
          <div className="items-center space-x-3 sm:flex">
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-200 cursor-pointer">
                Export CSV
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-200 cursor-pointer">
                <IoPrintOutline className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Close the flex container */}

      <div className="bg-white shadow-md rounded-lg px-6 py-4">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <div className="flex items-center space-x-3 text-sm mb-3 md:mb-0">
            <span>অর্থবছর</span>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>২০২৫-২৬</option>
              <option>২০২৪-২৫</option>
              <option>২০২৩-২৪</option>
            </select>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>মৌসুম</option>
              <option>রবি</option>
              <option>খরিপ-১</option>
              <option>খরিপ-২</option>
            </select>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>ফসল</option>
              <option>আউশ</option>
              <option>আমন</option>
              <option>বোরো</option>
            </select>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>জাত</option>
              <option>ব্রি ধান-৮৯</option>
              <option>ব্রি ধান-৫২</option>
              <option>হাইসান-৩৩</option>
              <option>বারি মুগ-৬</option>
            </select>
            <div className="flex space-x-2 flex-wrap mt-2 sm:mt-0">
              <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm hover:bg-gray-300 transition-colors cursor-pointer">
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
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>উপজেলার নাম</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>লক্ষ্যমাত্রা</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>আবাদ</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center justify-center space-x-1">
                    <span>উৎপাদন</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center justify-center space-x-1">
                    <span>ফলন/হে.</span>
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
                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                  <div className="font-medium">পটুয়াখালী সদর</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                  <span>১৫০০০ হেক্টর</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ২০০ হেক্টর
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১০৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১.৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block"
                  >
                    <FaEye className="text-[16px]" />
                  </a>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 px-2 py-1 inline-block"
                  >
                    <FaPenToSquare className="text-[15px]" />
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 px-2 py-1 inline-block"
                  >
                    <MdDelete className="text-[18px]" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  102
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-left">
                  <div className="font-medium">পটুয়াখালী সদর</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                  <span>১৫০০০ হেক্টর</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ২০০ হেক্টর
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১০৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১.৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block"
                  >
                    <FaEye className="text-[16px]" />
                  </a>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 px-2 py-1 inline-block"
                  >
                    <FaPenToSquare className="text-[15px]" />
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 px-2 py-1 inline-block"
                  >
                    <MdDelete className="text-[18px]" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  103
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-left">
                  <div className="font-medium">পটুয়াখালী সদর</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                  <span>১৫০০০ হেক্টর</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ২০০ হেক্টর
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১০৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১.৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block"
                  >
                    <FaEye className="text-[16px]" />
                  </a>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 px-2 py-1 inline-block"
                  >
                    <FaPenToSquare className="text-[15px]" />
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 px-2 py-1 inline-block"
                  >
                    <MdDelete className="text-[18px]" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  104
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-left">
                  <div className="font-medium">পটুয়াখালী সদর</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                  <span>১৫০০০ হেক্টর</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ২০০ হেক্টর
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১০৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১.৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block"
                  >
                    <FaEye className="text-[16px]" />
                  </a>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 px-2 py-1 inline-block"
                  >
                    <FaPenToSquare className="text-[15px]" />
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 px-2 py-1 inline-block"
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
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Content Section --> */}
      <section className="mt-5 mb-1 bg-white px-5 py-3 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          {/* Left Side Title */}
          <h3 className="font-semibold border-b border-gray-300">
            জাতভিত্তিক চুড়ান্ত আবাদ ও উৎপাদন
          </h3>

          {/* Right Side Buttons (hidden on small screens) */}
          <div className="flex items-center space-x-3 hidden sm:flex">
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-200 cursor-pointer">
                Export CSV
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-200 cursor-pointer">
                <IoPrintOutline className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        {/* Close flex container */}
      </section>

      <div className="bg-white shadow-md rounded-lg px-6 py-4">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <div className="flex items-center space-x-3 text-sm mb-3 md:mb-0">
            <span>Show</span>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>10</option>
            </select>
            <span>অর্থবছর</span>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>২০২৫-২৬</option>
              <option>২০২৪-২৫</option>
              <option>২০২৩-২৪</option>
            </select>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>মৌসুম</option>
              <option>রবি</option>
              <option>খরিপ-১</option>
              <option>খরিপ-২</option>
            </select>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>ফসল</option>
              <option>আউশ</option>
              <option>আমন</option>
              <option>বোরো</option>
            </select>
            <div className="flex space-x-2 flex-wrap mt-2 sm:mt-0">
              <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm hover:bg-gray-300 transition-colors cursor-pointer">
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
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>ফসলের নাম</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>জাত</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>আবাদ</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center justify-center space-x-1">
                    <span>উৎপাদন</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center justify-center space-x-1">
                    <span>ফলন/হে.</span>
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
                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                  <div className="font-medium">বোরো</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                  <span>ব্রি ধান-৮৯</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ২০০ হেক্টর
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১০৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১.৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block"
                  >
                    <FaEye className="text-[16px]" />
                  </a>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 px-2 py-1 inline-block"
                  >
                    <FaPenToSquare className="text-[15px]" />
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 px-2 py-1 inline-block"
                  >
                    <MdDelete className="text-[18px]" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  102
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-left">
                  <div className="font-medium">বোরো</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                  <span>ব্রি ধান-২৯</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ২০০ হেক্টর
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১০৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১.৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block"
                  >
                    <FaEye className="text-[16px]" />
                  </a>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 px-2 py-1 inline-block"
                  >
                    <FaPenToSquare className="text-[15px]" />
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 px-2 py-1 inline-block"
                  >
                    <MdDelete className="text-[18px]" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  103
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-left">
                  <div className="font-medium">বোরো</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                  <span>ব্রি ধান-২৮</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ২০০ হেক্টর
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১০৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                  ১.৪০ মে.টন
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block"
                  >
                    <FaEye className="text-[16px]" />
                  </a>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-900 px-2 py-1 inline-block"
                  >
                    <FaPenToSquare className="text-[15px]" />
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 px-2 py-1 inline-block"
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
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroProduction;
