import { IoPrintOutline } from "react-icons/io5";
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

      <section className="grid grid-cols-2 gap-5">
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
    </div>
  );
};

export default Overview;
