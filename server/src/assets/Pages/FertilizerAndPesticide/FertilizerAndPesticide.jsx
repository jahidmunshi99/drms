import { FaEye } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
const FertilizerAndPesticide = () => {
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
          একনজরে সার ও কীটনাশক
        </h3>
        <div className="mx-auto mt-6 rounded-lg shadow-sm overflow-hidden">
          {/* <!-- Header Row --> */}
          <div className="grid grid-cols-2 gap-5 font-semibold">
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">চাহিদা</div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">রবি</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ মে. টন
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">খরিপ-১</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ মে. টন
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">খরিপ-২</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ মে. টন
                </div>
              </div>
              {/* <!-- Row 4 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">মোট</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৩০০০ মে. টন
                </div>
              </div>
            </div>
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">বরাদ্দ</div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">রবি</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ মে. টন
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">খরিপ-১</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ মে. টন
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">খরিপ-২</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ মে. টন
                </div>
              </div>
              {/* <!-- Row 4 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">মোট</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৩০০০ টি
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Content Section --> */}
      <section className="mt-1 bg-white p-5 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4 border-b border-gray-200">
          সার ও কীটনাশক ডিলার
        </h3>
        <div className="mx-auto mt-6 rounded-lg shadow-sm overflow-hidden">
          {/* <!-- Header Row --> */}
          <div className="grid grid-cols-2 gap-5 font-semibold">
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">সার</div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  বিসিআইসি ডিলার
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০ জন
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  খুচরা সার বিক্রেতা
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ জন
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  বিএডিসি ডিলার
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ জন
                </div>
              </div>
              {/* <!-- Row 4 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">মোট</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৩০০০ জন
                </div>
              </div>
            </div>
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">কীটনাশক</div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  কীটনাশক ডিলার
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০ জন
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  খুচরা বিক্রেতা
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ জন
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">-</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  -
                </div>
              </div>
              {/* <!-- Row 4 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">মোট</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৩০০০ টি
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Content Section --> */}
      <section className="mt-5 mb-2 bg-white px-5 py-3 rounded-lg shadow-sm">
        <h3 className="font-semibold border-b border-gray-200">
          সার ও কীটনাশক ডিলারদের তথ্য
        </h3>
      </section>
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* <!-- Top Controls --> */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span>Show</span>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>100</option>
            </select>
            <span>entries</span>

            {/* <!-- Filter --> */}
            <select className="text-sm text-slate-600 border border-gray-200 px-2 py-1 rounded">
              <option value="">সিলেক্ট করুন</option>
              <option value="">বিসিআইসি</option>
              <option value="">খুচরা সার বিক্রেতা</option>
              <option value="">বিএডিসি ডিলার</option>
              <option value="">কীটনাশক ডিলার</option>
              <option value="">খুচরা কীটনাশক বিক্রেতা</option>
            </select>

            <button className="px-3 py-1 bg-gray-200 border border-gray-300 flex items-center justify-between rounded-md text-sm hover:bg-gray-300 transition-colors cursor-pointer">
              <IoMdAdd className="mr-1" /> Add New
            </button>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <span>Search:</span>
            <input
              type="text"
              className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* <!-- Table --> */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  <div className="flex items-center gap-1">
                    SL <i className="fas fa-sort text-gray-400"></i>
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  <div className="flex items-center gap-1">
                    Name of Dealer <i className="fas fa-sort text-gray-400"></i>
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  <div className="flex items-center gap-1">
                    Mobile <i className="fas fa-sort text-gray-400"></i>
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  <div className="flex items-center gap-1">
                    Name of Regist.{" "}
                    <i className="fas fa-sort text-gray-400"></i>
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  <div className="flex items-center gap-1">
                    Category <i className="fas fa-sort text-gray-400"></i>
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  <div className="flex items-center gap-1">
                    Issue Date <i className="fas fa-sort text-gray-400"></i>
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  <div className="flex items-center gap-1">
                    Exp. Date <i className="fas fa-sort text-gray-400"></i>
                  </div>
                </th>
                <th className="px-4 py-3 text-center font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {/* <!-- Row Example --> */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 text-gray-500">101</td>
                <td className="px-4 py-2 font-medium text-gray-900">
                  মোঃ মশিউর রহমান
                </td>
                <td className="px-4 py-2 text-gray-700">01717010101</td>
                <td className="px-4 py-2 text-gray-600">সততা এন্টার প্রাইজ</td>
                <td className="px-4 py-2 text-gray-600">বিসিআইসি ডিলার</td>
                <td className="px-4 py-2 text-gray-600">12.01.1995</td>
                <td className="px-4 py-2 text-gray-600">12.01.2025</td>
                <td className="px-4 py-2 text-center flex justify-center gap-2">
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

              {/* <!-- Duplicate row kept (you can loop dynamically in backend) --> */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 text-gray-500">102</td>
                <td className="px-4 py-2 font-medium text-gray-900">
                  মোঃ রাশেদুল ইসলাম
                </td>
                <td className="px-4 py-2 text-gray-700">01819020202</td>
                <td className="px-4 py-2 text-gray-600">আলিফ ট্রেডার্স</td>
                <td className="px-4 py-2 text-gray-600">বিএডিসি ডিলার</td>
                <td className="px-4 py-2 text-gray-600">05.03.2000</td>
                <td className="px-4 py-2 text-gray-600">05.03.2030</td>
                <td className="px-4 py-2 text-center flex justify-center gap-2">
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
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-2">
          <span>Showing 1 to 2 of 2 entries</span>
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

export default FertilizerAndPesticide;
