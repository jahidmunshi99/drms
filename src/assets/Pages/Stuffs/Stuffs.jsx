const Stuffs = () => {
  return (
    <div>
      <section className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-3">
          {/* <!-- Filtering Option --> */}
          <div className="flex items-center gap-4">
            <select
              name=""
              id=""
              className="text-sm text-slate-600 border border-gray-200 px-2 py-1 rounded"
            >
              <option value="">সিলেক্ট করুন</option>
              <option value="">ডিডি অফিস</option>
              <option value="">পটুয়াখালী সদর</option>
              <option value="">বাউফল</option>
              <option value="">গলাচিপা</option>
              <option value="">কলাপাড়া</option>
              <option value="">দশমিনা</option>
              <option value="">মির্জাগঞ্জ</option>
            </select>
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
          একনজরে সকল কর্মকর্তা ও কর্মচারী
        </h3>
        <div className="mx-auto mt-6 rounded-lg shadow-sm overflow-hidden">
          {/* <!-- Header Row --> */}
          <div className="grid grid-cols-2 gap-5 font-semibold">
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">কর্মরত</div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  বিসিএস ক্যাডার কর্মকর্তা
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১০০ জন
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  ১ম শ্রেনীর নন ক্যাডার কর্মকর্তা
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ জন
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  ২য় শ্রেনীর নন ক্যাডার কর্মকর্তা
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ জন
                </div>
              </div>
              {/* <!-- Row 4 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  ৩য় শ্রেনীর কর্মচারী
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ জন
                </div>
              </div>
              {/* <!-- Row 5 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  ৪র্থ শ্রেনীর কর্মচারী
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ জন
                </div>
              </div>
              {/* <!-- Row 6 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">মোট</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৩০০০ জন
                </div>
              </div>
            </div>
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">শূন্যপদ</div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  বিসিএস ক্যাডার কর্মকর্তা
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১০০ জন
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  ১ম শ্রেনীর নন ক্যাডার কর্মকর্তা
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ জন
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  ২য় শ্রেনীর নন ক্যাডার কর্মকর্তা
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ জন
                </div>
              </div>
              {/* <!-- Row 4 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  ৩য় শ্রেনীর কর্মচারী
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ জন
                </div>
              </div>
              {/* <!-- Row 5 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  ৪র্থ শ্রেনীর কর্মচারী
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ জন
                </div>
              </div>
              {/* <!-- Row 6 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">মোট</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৩০০০ জন
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Content Section --> */}
      <section className="mt-2 mb-2 bg-white p-5 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4 border-b border-gray-200">
          মঞ্জুরীকৃত, কর্মরত ও শুন্য পদের বিবরণ
        </h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">
                  ক্রঃ নং
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">
                  পদের নাম
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">
                  গ্রেড
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">
                  মঞ্জুরীকৃত পদ
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">
                  কর্মরত
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">
                  শুন্য পদ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 text-gray-700">1</td>
                <td className="px-4 py-2 text-gray-900">উপপরিচালক</td>
                <td className="px-4 py-2 text-gray-700">৫ম</td>
                <td className="px-4 py-2 text-gray-700">১</td>
                <td className="px-4 py-2 text-gray-700">১</td>
                <td className="px-4 py-2 text-gray-700">০</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">2</td>
                <td className="px-4 py-2 text-gray-900">কৃষি কর্মকর্তা</td>
                <td className="px-4 py-2 text-gray-700">৯ম</td>
                <td className="px-4 py-2 text-gray-700">৫</td>
                <td className="px-4 py-2 text-gray-700">৪</td>
                <td className="px-4 py-2 text-gray-700">১</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">3</td>
                <td className="px-4 py-2 text-gray-900">
                  উপসহকারী কৃষি কর্মকর্তা
                </td>
                <td className="px-4 py-2 text-gray-700">১১শ</td>
                <td className="px-4 py-2 text-gray-700">২৫</td>
                <td className="px-4 py-2 text-gray-700">২২</td>
                <td className="px-4 py-2 text-gray-700">৩</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">4</td>
                <td className="px-4 py-2 text-gray-900">কর্মচারী</td>
                <td className="px-4 py-2 text-gray-700">১৬শ</td>
                <td className="px-4 py-2 text-gray-700">১০</td>
                <td className="px-4 py-2 text-gray-700">৮</td>
                <td className="px-4 py-2 text-gray-700">২</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* <!-- Table Section --> */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* <!-- Top bar --> */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3 text-sm">
          <div className="flex items-center flex-wrap gap-2">
            <span>Show</span>
            <select className="border border-gray-300 rounded-md py-1 px-2">
              <option>100</option>
            </select>
            <span>entries</span>

            <select
              name=""
              id=""
              className="text-sm text-slate-600 border border-gray-200 px-2 py-1 rounded"
            >
              <option value="">সিলেক্ট করুন</option>
              <option value="">উপজেলা কৃষি অফিসার</option>
              <option value="">কৃষি সম্প্রসারণ কর্মকর্তা</option>
              <option value="">উপসহকারী কৃষি কর্মকর্তা</option>
              <option value="">আফিস সহকারী</option>
              <option value="">নিরাপত্তা প্রহরী</option>
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
          <table className="min-w-full divide-y divide-gray-200 text-xs md:text-sm table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider w-[60px]"
                >
                  SL
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider min-w-[160px]"
                >
                  নাম
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider w-[120px]"
                >
                  যোগাযোগ
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  পদবী
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  কর্মস্থল
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
                <td className="px-4 py-2 text-sm text-gray-500">101</td>
                <td className="px-4 py-2 text-sm text-gray-900">
                  মোঃ মশিউর রহমান
                </td>
                <td className="px-4 py-2 text-sm text-black-600">
                  01717010101
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  উপজেলা কৃষি অফিসার
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  উপজেলা কৃষি অফিস, রাঙ্গামাটি
                </td>
                <td className="px-4 py-2 text-center text-sm font-medium space-x-2">
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    <i className="fa-solid fa-eye"></i>
                  </a>
                  <a href="#" className="text-green-600 hover:text-green-900">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-900">
                    <i className="fa-solid fa-trash"></i>
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

export default Stuffs;
