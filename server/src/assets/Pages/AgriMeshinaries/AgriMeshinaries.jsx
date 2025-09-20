const AgriMeshinaries = () => {
  return (
    <div>
      <section className="bg-white px-4 py-2 rounded-lg border shadow-sm">
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
      <section className="mt-1 bg-white p-5 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4 border-b border-gray-200">
          এক নজরে কৃষি যন্ত্রপাতি
        </h3>
        <div className="mx-auto mt-6 rounded-lg shadow-sm overflow-hidden">
          {/* <!-- Header Row --> */}
          <div className="grid grid-cols-2 gap-5 font-semibold">
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">
                চাষ ও প্রস্তুত করার যন্ত্র
              </div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">ট্রাক্টর</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১০০ টি
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  পাওয়ার টিলার
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ টি
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">স্থানীয়</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ টি
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
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">বীজ বপন ও রোপণ যন্ত্র</div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">সীডার</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১০০ টি
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  রাইস ট্রান্সপ্লান্টার
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ টি
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  সরিষা ও ভুট্টা বীজ বপন যন্ত্র
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ টি
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
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">ফসল পরিচর্যার যন্ত্র</div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  আগাছা দমন যন্ত্র (Weeder)
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১০০ টি
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  সার ছিটানো যন্ত্র
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ টি
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  হ্যান্ড স্প্রেয়ার মেশিন
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ টি
                </div>
              </div>
              {/* <!-- Row 4 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  পাওয়ার স্প্রেয়ার মেশিন
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৩০০০ টি
                </div>
              </div>
            </div>
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">
                সেচ ও পানি ব্যবস্থাপনা
              </div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  ডীপ টিউবওয়েল
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১০০ টি
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  লো-লিফট পাম্প
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ টি
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  সেন্ট্রিফিউগাল পাম্প
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ টি
                </div>
              </div>
              {/* <!-- Row 4 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  সোলার পাম্প
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৩০০০ টি
                </div>
              </div>
            </div>
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">
                ফসল কাটাই ও মাড়াইয়ের যন্ত্র
              </div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  ধান কাটা যন্ত্র (Reaper)
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১০০ টি
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  কম্বাইন হারভেস্টার
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ টি
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  থ্রেসার মেশিন
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ টি
                </div>
              </div>
              {/* <!-- Row 4 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">উইনোয়ার</div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৩০০০ টি
                </div>
              </div>
            </div>
            <div className="border border-gray-200">
              <div className="bg-gray-100 py-2 px-4">
                সংরক্ষণ ও পরিবহনের যন্ত্র
              </div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  ধান শুকানোর যন্ত্র
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১০০ টি
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  শস্য মজুতের সাইলো
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৫০০ টি
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  হ্যান্ড ট্রলি
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ১৫০০ টি
                </div>
              </div>
              {/* <!-- Row 4 --> */}
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-2 px-4 text-sm text-slate-700">
                  ভ্যান/ট্রাক
                </div>
                <div className="py-2 px-4 text-sm font-medium text-right">
                  ৩০০০ টি
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgriMeshinaries;
