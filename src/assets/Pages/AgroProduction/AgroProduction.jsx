import { useState } from "react";
import { IoPrintOutline } from "react-icons/io5";
import EditFormModal from "./EditFormModal";
import HarvestForm from "./Forms/HarvestForm";
import SowingForm from "./Forms/SowingForm";
import CropsTable from "./Tables/CropsTable";
import HarvestTable from "./Tables/HarvestTable";
import SeedbedTable from "./Tables/SeedbedTable";

const AgroProduction = () => {
  const [show, setShow] = useState(false);
  const [showHarvest, setShowHarvest] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [cropInfo, setCropInfo] = useState(null);
  const [harvestInfo, setHarvesInfo] = useState(null);
  const data = [
    {
      id: "1",
      f_year: "2025-26",
      crop_session: "robi",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "sadar",
      crop_name: "Wheat",
      category: "sowing",
      target: 1500,
      createAt: "25-june-2026",
      varieties: [
        {
          name: "BARI Gom-26",
          achievement: 50,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 30,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 20,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 100,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 80,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 20,
          createAt: "25-june-2026",
        },
      ],
    },
    {
      id: "2",
      f_year: "2025-26",
      crop_session: "robi",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "sadar",
      crop_name: "masterd",
      category: "sowing",
      target: 1500,
      createAt: "25-june-2026",
      varieties: [
        {
          name: "BARI Gom-26",
          achievement: 500,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
      ],
    },
    {
      id: "3",
      f_year: "2025-26",
      crop_session: "robi",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "sadar",
      crop_name: "watermelon",
      category: "sowing",
      target: 1500,
      createAt: "25-june-2026",
      varieties: [
        {
          name: "BARI Gom-26",
          achievement: 500,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
      ],
    },
    {
      id: "4",
      f_year: "2025-26",
      crop_session: "robi",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "sadar",
      crop_name: "sunflowar",
      category: "sowing",
      target: 1500,
      createAt: "25-june-2026",
      varieties: [
        {
          name: "BARI-16",
          achievement: 500,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Gom-28",
          achievement: 300,
          createAt: "25-june-2026",
        },
      ],
    },
    {
      id: "1",
      f_year: "2025-26",
      crop_session: "robi",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "sadar",
      crop_name: "sunflowar",
      category: "harvest",
      achievement: 245,
      createAt: "25-june-2026",
      varieties: [
        {
          name: "Hysun-33",
          cultivated: 55,
          harvest: 50,
          production_per_hector: 1.3,
          production: 65,
          createAt: "25-june-2026",
        },
        {
          name: "Hysun-36",
          cultivated: 55,
          harvest: 25,
          production_per_hector: 1.3,
          production: 130,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Surjamukhi-2",
          cultivated: 30,
          harvest: 29,
          production_per_hector: 1.3,
          production: 390,
          createAt: "25-june-2026",
        },
        {
          name: "BARI Surjamukhi-3",
          cultivated: 55,
          harvest: 50,
          production_per_hector: 1.3,
          production: 390,
          createAt: "25-june-2026",
        },
        {
          name: "Kironi (DS-1)",
          cultivated: 30,
          harvest: 27,
          production_per_hector: 1.3,
          production: 390,
          createAt: "25-june-2026",
        },
        {
          name: "DS 275",
          cultivated: 20,
          harvest: 18,
          production_per_hector: 1.3,
          production: 390,
          createAt: "25-june-2026",
        },
      ],
    },
  ];

  const handleClose = () => {
    setShowEdit(!showEdit);
  };
  const handleEdit = () => {
    setShow(false);
    setShowHarvest(false);
    setShowEdit(true);
  };

  const onCropInfo = (item) => {
    setCropInfo(item);

    setShow(!show);
  };
  const onHarvestInfo = (item) => {
    setHarvesInfo(item);
    setShowHarvest(!showHarvest);
  };

  return (
    <>
      {showEdit && <EditFormModal handleClose={handleClose} />}
      {show && (
        <SowingForm
          item={cropInfo}
          onClose={() => setShow(false)}
          handleEdit={handleEdit}
        />
      )}
      {showHarvest && (
        <HarvestForm
          item={harvestInfo}
          onClose={() => setShowHarvest(false)}
          handleEdit={handleEdit}
        />
      )}
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

      {/* ---------------New Overview Cards---------------------------------- */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* <!-- Total Target --> */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Total Target
          </p>
          <h2 className="text-3xl font-bold text-cyan-500 mt-2">
            1,230 <span className="text-lg font-medium">ha</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">5 crop targets</p>
        </div>
        {/* <!-- Achievements --> */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Achievements
          </p>
          <h2 className="text-3xl font-bold text-yellow-500 mt-2">4</h2>
          <p className="text-sm text-gray-500 mt-1">3 sowing, 1 harvest</p>
        </div>
        {/* <!-- Sowing Progress --> */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Sowing Progress
            </p>
          </div>

          <h2 className="text-3xl font-bold text-purple-600 mt-4">
            540 <span className="text-base font-medium text-gray-500">ha</span>
          </h2>

          {/* <!-- Progress Bar --> */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-purple-500 h-2 rounded-full w-[44%]"></div>
          </div>

          <p className="text-sm text-red-500 mt-2 font-medium">44% of target</p>
        </div>

        {/* <!-- Seedbed --> */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <div>
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Seedbed
            </p>
          </div>
          <h2 className="text-3xl font-bold text-green-500 mt-2">
            480 <span className="text-lg font-medium">MT</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">1 completed</p>
        </div>
        {/* <!-- Harvest --> */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Harvest Progress
          </p>
          <h2 className="text-3xl font-bold text-purple-500 mt-2">
            540 <span className="text-lg font-medium">ha</span>
          </h2>
          <p className="text-sm text-red-500 mt-1">44% of Sowing</p>
        </div>
        {/* <!-- Production --> */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Production
          </p>
          <h2 className="text-3xl font-bold text-green-500 mt-2">
            480 <span className="text-lg font-medium">MT</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">1 completed</p>
        </div>
        {/* <!-- Damage --> */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Damage Progress
          </p>
          <h2 className="text-3xl font-bold text-purple-500 mt-2">
            50 <span className="text-lg font-medium">ha</span>
          </h2>
          <p className="text-sm text-red-500 mt-1">44% of Sowing</p>
        </div>

        {/* <!-- Harvest --> */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Damage
          </p>
          <h2 className="text-3xl font-bold text-green-500 mt-2">
            480 <span className="text-lg font-medium">MT</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">1 completed</p>
        </div>
      </section>

      {/* Tables and Info */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-2 py-8">
        {/* <!-- Left Large Card --> */}
        <div className="lg:col-span-3">
          {/* Table-1 Seedbed Overview */}
          <SeedbedTable onCropInfo={onCropInfo} data={data} />
          {/* Table-2 Crops Overview */}
          <CropsTable onCropInfo={onCropInfo} data={data} />
          {/* Table-3 Harvest Overview */}
          <HarvestTable onCropInfo={onHarvestInfo} data={data} />
        </div>
        {/* <!-- Right Side --> */}
        <div className="lg:col-span-1">
          <div className="flex flex-col gap-6">
            {/* <!-- System Status --> */}
            <div className="bg-white shadow-md rounded-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-4">
                Category by Progress
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Seedbed</span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                    ✓ Good
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">License Status</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                    0 Active
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Employee Coverage</span>
                  <span className="font-semibold text-gray-800">100%</span>
                </div>
              </div>
            </div>

            {/* <!-- Available Resources --> */}
            <div className="bg-white shadow-md rounded-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-4">
                Target by Category
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Rice</span>
                  <span className="text-blue-600 font-semibold">500 hec</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Pulse</span>
                  <span className="text-blue-600 font-semibold">155 hec</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Vegitable</span>
                  <span className="text-red-500 font-semibold">100 hec</span>
                </div>
              </div>
            </div>

            {/* <!-- Available Resources --> */}
            <div className="bg-white shadow-md rounded-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-4">
                Target by Category
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Rice</span>
                  <span className="text-blue-600 font-semibold">500 hec</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Pulse</span>
                  <span className="text-blue-600 font-semibold">155 hec</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Vegitable</span>
                  <span className="text-red-500 font-semibold">100 hec</span>
                </div>
              </div>
            </div>

            {/* <!-- Info Box --> */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex gap-3">
                <div className="text-yellow-500 text-xl">💡</div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-1">
                    Review Data Accuracy
                  </h4>
                  <p className="text-sm text-blue-600 leading-relaxed">
                    Please verify employee details, license expiry dates, and
                    asset conditions regularly to ensure all information is
                    current and accurate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgroProduction;
