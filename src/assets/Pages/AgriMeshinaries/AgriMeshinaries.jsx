import { FaEye } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { IoPrintOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
const AgriMeshinaries = () => {
  return (
    <div>
      {/* Top Header */}
      <section className="bg-white px-4 py-2 rounded-lg shadow-sm mb-4">
        <div className="flex items-center justify-between">
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
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-50 cursor-pointer">
              Export CSV
            </button>
            <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-50 cursor-pointer">
              <IoPrintOutline className="text-xl" />
            </button>
          </div>
        </div>
      </section>
      {/* <!-- Content Section --> */}
      <section className="mt-1 bg-white p-5 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4 border-b border-gray-200">
          এক নজরে কৃষি যন্ত্রপাতি
        </h3>
        <div className="mx-auto mt-6 rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
            <div className=" bg-white p-5 rounded-lg shadow-sm border border-gray-300">
              <h3 className="font-semibold mb-4 border-b border-gray-300">
                চাষ ও প্রস্তুত করার যন্ত্র
              </h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">ট্রাক্টর</span>
                  <span>১০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">পাওয়ার টিলার</span>
                  <span>৫০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">স্থানীয়</span>
                  <span>১৫০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">মোট</span>
                  <span>৩০০০ টি</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300">
              <h3 className="font-semibold mb-4 border-b border-gray-300">
                বীজ বপন ও রোপণ যন্ত্র
              </h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">সীডার</span>
                  <span>১০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">রাইস ট্রান্সপ্লান্টার</span>
                  <span>৫০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">
                    সরিষা ও ভুট্টা বীজ বপন যন্ত্র
                  </span>
                  <span>১৫০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">মোট</span>
                  <span>৩০০০ টি</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300">
              <h3 className="font-semibold mb-4 border-b border-gray-300">
                ফসল কাটাই ও মাড়াইয়ের যন্ত্র
              </h3>
              <div className="flex justify-between text-sm">
                <span className=" text-slate-600">
                  ধান কাটা যন্ত্র (Reaper)
                </span>
                <span>১০০ টি</span>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className=" text-slate-600">কম্বাইন হারভেস্টার</span>
                  <span>৫০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">থ্রেসার মেশিন</span>
                  <span>১৫০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">উইনোয়ার</span>
                  <span>৩০০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">মোট</span>
                  <span>৩০০০ টি</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300">
              <h3 className="font-semibold mb-4 border-b border-gray-300">
                সেচ ও পানি ব্যবস্থাপনা
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">ডীপ টিউবওয়েল</span>
                  <span>১০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">লো-লিফট পাম্প</span>
                  <span>৫০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">সেন্ট্রিফিউগাল পাম্প</span>
                  <span>১৫০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">সোলার পাম্প</span>
                  <span>৩০০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">মোট</span>
                  <span>৩০০০ টি</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300">
              <h3 className="font-semibold mb-4 border-b border-gray-300">
                ফসল পরিচর্যার যন্ত্র
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">
                    আগাছা দমন যন্ত্র (Weeder)
                  </span>
                  <span>১০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">সার ছিটানো যন্ত্র</span>
                  <span>৫০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">
                    হ্যান্ড স্প্রেয়ার মেশিন
                  </span>
                  <span>১৫০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">
                    পাওয়ার স্প্রেয়ার মেশিন
                  </span>
                  <span>৩০০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">মোট</span>
                  <span>৩০০০ টি</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300">
              <h3 className="font-semibold mb-4 border-b border-gray-300">
                সংরক্ষণ ও পরিবহনের যন্ত্র
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">ধান শুকানোর যন্ত্র</span>
                  <span>১০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">শস্য মজুতের সাইলো</span>
                  <span>৫০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">হ্যান্ড ট্রলি</span>
                  <span>১৫০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">ভ্যান/ট্রাক</span>
                  <span>৩০০০ টি</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className=" text-slate-600">মোট</span>
                  <span>৩০০০ টি</span>
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
          <h3 className="font-semibold border-b border-gray-300">
            উপজেলা ভিত্তিক বিবরণ
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

      <section className="bg-white shadow-md rounded-lg px-6 py-4">
        <div className="flex justify-between items-center mb-5 flex-wrap">
          <div className="flex items-center space-x-3 text-sm mb-3 md:mb-0">
            <span>Show</span>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>8</option>
            </select>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>উপজেলা</option>
              <option>পটুয়াখালী সদর</option>
              <option>বাউফল</option>
              <option>গলাচিপা</option>
              <option>কলাপাড়া</option>
              <option>দশমিনা</option>
              <option>মির্জাগঞ্জ</option>
              <option>দুমকী</option>
              <option>রাঙ্গাবালী</option>
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
                    <span>ইউনিয়ন</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>ব্লক</span>
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
                  <span>১০ টি</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  ৩০ টি
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
      </section>
    </div>
  );
};

export default AgriMeshinaries;
