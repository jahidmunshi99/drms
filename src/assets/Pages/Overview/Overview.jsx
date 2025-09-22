import { FaEye } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { IoPrintOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
const Overview = () => {
  return (
    <div>
      {/* Top Header */}
      <section className="bg-white px-4 py-2 rounded-lg shadow-sm">
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

      <section className="grid grid-cols-2 ‍sm:grid-col-1 gap-5">
        <div className="mt-4 bg-white p-5 rounded-lg shadow-sm border-gray-300">
          <h3 className="font-semibold mb-4 border-b border-gray-300">
            জেলার তথ্য
          </h3>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">উপজেলা</span>
              <span className="font-medium">৮টি</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">ইউনিয়ন</span>
              <span className="font-medium">৩২টি</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">ব্লক</span>
              <span className="font-medium">৯০টি</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">জনসংখ্যা</span>
              <span className="font-medium">২০০০৮০ জন</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">আয়তন</span>
              <span className="font-medium">৩৫০০০ বর্গ কি.মি</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">কৃষক পরিবার</span>
              <span className="font-medium">১২৫০০ জন</span>
            </div>
            <div className="flex justify-end">
              <span className="text-sm text-slate-600 hover:text-sky-700 border px-2 py-1 rounded bg-gray-50 mt-4">
                <a href="">বিস্তারিত</a>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white p-5 rounded-lg shadow-sm border border-gray-300">
          <h3 className="font-semibold mb-4 border-b border-gray-300">
            খাদ্য শস্য
          </h3>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">
                খাদ্য শস্যের চাহিদা
              </span>
              <span className="font-medium">১০০০ মে. টন</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">উৎপাদন</span>
              <span className="font-medium">২০০ মে. টন</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">তেলের চাহিদা</span>
              <span className="font-medium">৩৫০০০ লি.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">উৎপাদন</span>
              <span className="font-medium">৩৫০০০ লি.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">ডালের চাহিদা</span>
              <span className="font-medium">৩৫০০০ মে.টন</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">উৎপাদন</span>
              <span className="font-medium">৩৫০০০ মে.টন</span>
            </div>
            <div className="flex justify-end">
              <span className="text-sm text-slate-600 hover:text-sky-700 border px-2 py-1 rounded bg-gray-50 mt-4">
                <a href="">বিস্তারিত</a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-5">
        <div className="mt-4 bg-white p-5 rounded-lg shadow-sm border border-gray-300">
          <h3 className="font-semibold mb-4 border-b border-gray-300">
            ফসল সংক্রান্ত তথ্য
          </h3>
          <div className="flex justify-between">
            <span className="text-sm text-slate-600">শস্য নিবিরতা</span>
            <span className="font-medium">১১৪%</span>
          </div>
          <div className="mt-2 h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: "90%",
                background: "linear-gradient(90deg, #06b6d4, #7c3aed)",
              }}
            ></div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">এক ফসলি জমি</span>
              <span className="font-medium">১০০০ হেক্টর</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">দুই ফসলি জমি</span>
              <span className="font-medium">২০০০০ হেক্টর</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">তিন ফসলি জমি</span>
              <span className="font-medium">৩৫০০০ হেক্টর</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">মোট ফসলি জমি</span>
              <span className="font-medium">৩৫০০০ হেক্টর</span>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white p-5 rounded-lg shadow-sm border border-gray-300">
          <h3 className="font-semibold mb-4 border-b border-gray-300">
            পানি ব্যবস্থাপনা
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">খাল</span>
              <span className="font-medium">১২০০ কি.মি</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">খনন যোগ্য</span>
              <span className="font-medium">১০০০০ কি.মি</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">বেড়ী বাধ</span>
              <span className="font-medium">৫০টি</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">বেড়ী বাধ দৈর্য্য</span>
              <span className="font-medium">১৩০০০ কি.মি</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">স্লুইজ গেট</span>
              <span className="font-medium">১৫০০০ টি</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">মেরামত যোগ্য</span>
              <span className="font-medium">২৩০০ টি</span>
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

      <div className="bg-white shadow-md rounded-lg px-6 py-4">
        <div className="flex justify-between items-center mb-4 flex-wrap">
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
      </div>
    </div>
  );
};

export default Overview;
