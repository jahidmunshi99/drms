import { IoPrintOutline } from "react-icons/io5";
const Weather = () => {
  return (
    <>
      {/* Top Section */}
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

      {/* Full Page Weather Detail */}
      <section className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-center text-white overflow-hidden mt-4">
        <div className="relative flex flex-col items-center justify-center p-6 w-full max-w-3xl">
          {/* Sun */}
          <div className="relative w-40 h-40 rounded-full bg-yellow-400 flex items-center justify-center mb-6 shadow-lg">
            <i className="fas fa-sun text-yellow-300 text-6xl animate-pulse"></i>

            {/* Sun rays */}
            <div className="absolute w-1 h-6 bg-yellow-300 top-0 left-1/2 -translate-x-1/2 animate-spinSlow origin-bottom"></div>
            <div className="absolute w-1 h-6 bg-yellow-300 top-0 left-1/2 -translate-x-1/2 rotate-45 animate-spinSlow origin-bottom"></div>
            <div className="absolute w-1 h-6 bg-yellow-300 top-0 left-1/2 -translate-x-1/2 rotate-90 animate-spinSlow origin-bottom"></div>
            <div className="absolute w-1 h-6 bg-yellow-300 top-0 left-1/2 -translate-x-1/2 rotate-135 animate-spinSlow origin-bottom"></div>
            <div className="absolute w-1 h-6 bg-yellow-300 top-0 left-1/2 -translate-x-1/2 rotate-180 animate-spinSlow origin-bottom"></div>
            <div className="absolute w-1 h-6 bg-yellow-300 top-0 left-1/2 -translate-x-1/2 rotate-225 animate-spinSlow origin-bottom"></div>
            <div className="absolute w-1 h-6 bg-yellow-300 top-0 left-1/2 -translate-x-1/2 rotate-270 animate-spinSlow origin-bottom"></div>
            <div className="absolute w-1 h-6 bg-yellow-300 top-0 left-1/2 -translate-x-1/2 rotate-315 animate-spinSlow origin-bottom"></div>
          </div>

          {/* Temperature */}
          <p className="text-6xl font-extrabold mb-2">32°C</p>
          <p className="text-xl text-white/80 mb-6">স্পষ্ট রৌদ্র</p>

          {/* Clouds */}
          <div className="absolute top-10 left-10 w-32 h-16 bg-white/50 rounded-full animate-float"></div>
          <div className="absolute top-20 right-16 w-48 h-20 bg-white/40 rounded-full animate-float"></div>

          {/* Raindrops */}
          <div className="absolute bottom-40 left-1/3 space-y-1">
            <div className="w-1 h-3 bg-white/70 animate-fall"></div>
            <div className="w-1 h-3 bg-white/70 animate-fall delay-150"></div>
            <div className="w-1 h-3 bg-white/70 animate-fall delay-300"></div>
          </div>

          {/* Weather Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full mt-12">
            <div className="bg-white/20 p-4 rounded-xl flex justify-between items-center">
              <span>বৃষ্টিপাত</span>
              <span>30%</span>
            </div>
            <div className="bg-white/20 p-4 rounded-xl flex justify-between items-center">
              <span>আর্দ্রতা</span>
              <span>75%</span>
            </div>
            <div className="bg-white/20 p-4 rounded-xl flex justify-between items-center">
              <span>বাতাসের গতি</span>
              <span>12 km/h</span>
            </div>
            <div className="bg-white/20 p-4 rounded-xl flex justify-between items-center">
              <span>চাপ</span>
              <span>1015 hPa</span>
            </div>
            <div className="bg-white/20 p-4 rounded-xl flex justify-between items-center">
              <span>দৃষ্টি</span>
              <span>10 km</span>
            </div>
            <div className="bg-white/20 p-4 rounded-xl flex justify-between items-center">
              <span>দিক</span>
              <span>পূর্ব</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Weather;
