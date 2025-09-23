import { getData } from "../FetchData/FetchData";
import Icon from "../utils/Icons_ulits";

const Topbar = () => {
  console.log(getData);
  return (
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
            <Icon.print className="text-xl" />
            {/* <IoPrintOutline className="text-xl" /> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
