import { useState } from "react";
import { IoPrintOutline } from "react-icons/io5";
import EditFormModal from "./EditFormModal";
import ViewForm from "./ViewForm";

const AgroProduction = () => {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const data = {
    id: "001",
    f_year: "2025-26",
    crop_session: "robi",
    upazilaId: "Savar",
    crop_name: "Wheat",
    category: "seedbed",
    target: 1500,
    varieties: [
      {
        name: "BARI Gom-26",
        achievement: 500,
      },
      {
        name: "BARI Gom-28",
        achievement: 300,
      },
      {
        name: "BARI Gom-28",
        achievement: 300,
      },
      {
        name: "BARI Gom-28",
        achievement: 300,
      },
      {
        name: "BARI Gom-28",
        achievement: 300,
      },
      {
        name: "BARI Gom-28",
        achievement: 300,
      },
    ],
  };

  const handleClose = () => {
    setShowEdit(!showEdit);
  };
  const handleEdit = () => {
    setShow(false);
    setShowEdit(true);
  };

  return (
    <>
      {showEdit && <EditFormModal handleClose={handleClose} />}
      {show && (
        <ViewForm
          item={data}
          onClose={() => setShow(false)}
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
      <section class="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* <!-- Total Target --> */}
        <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Total Target
          </p>
          <h2 class="text-3xl font-bold text-cyan-500 mt-2">
            1,230 <span class="text-lg font-medium">ha</span>
          </h2>
          <p class="text-sm text-gray-500 mt-1">5 crop targets</p>
        </div>
        {/* <!-- Achievements --> */}
        <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Achievements
          </p>
          <h2 class="text-3xl font-bold text-yellow-500 mt-2">4</h2>
          <p class="text-sm text-gray-500 mt-1">3 sowing, 1 harvest</p>
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
        <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <div>
            <p class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Seedbed
            </p>
          </div>
          <h2 class="text-3xl font-bold text-green-500 mt-2">
            480 <span class="text-lg font-medium">MT</span>
          </h2>
          <p class="text-sm text-gray-500 mt-1">1 completed</p>
        </div>
        {/* <!-- Harvest --> */}
        <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Harvest Progress
          </p>
          <h2 class="text-3xl font-bold text-purple-500 mt-2">
            540 <span class="text-lg font-medium">ha</span>
          </h2>
          <p class="text-sm text-red-500 mt-1">44% of Sowing</p>
        </div>
        {/* <!-- Production --> */}
        <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Production
          </p>
          <h2 class="text-3xl font-bold text-green-500 mt-2">
            480 <span class="text-lg font-medium">MT</span>
          </h2>
          <p class="text-sm text-gray-500 mt-1">1 completed</p>
        </div>
        {/* <!-- Damage --> */}
        <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Damage Progress
          </p>
          <h2 class="text-3xl font-bold text-purple-500 mt-2">
            50 <span class="text-lg font-medium">ha</span>
          </h2>
          <p class="text-sm text-red-500 mt-1">44% of Sowing</p>
        </div>

        {/* <!-- Harvest --> */}
        <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Damage
          </p>
          <h2 class="text-3xl font-bold text-green-500 mt-2">
            480 <span class="text-lg font-medium">MT</span>
          </h2>
          <p class="text-sm text-gray-500 mt-1">1 completed</p>
        </div>
      </section>

      {/* Tables and Info */}
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-2 py-8">
        {/* <!-- Left Large Card --> */}
        <div className="lg:col-span-3">
          {/* Table-1 Seedbed Overview */}
          <div className="bg-white shadow-md rounded-lg px-4 py-4">
            {/* Table Header */}
            <div className="flex items-center justify-between pb-3">
              <h2 className="text-base font-semibold text-gray-800">
                Seedbed Overview
              </h2>
              <span className="text-sm text-gray-500">10 records</span>
            </div>
            {/* <!-- Table --> */}
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center space-x-1">
                        <span>SL</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center space-x-1">
                        <span>Fin. Year</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center space-x-1">
                        <span>Session</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center space-x-1">
                        <span>Crop Name</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span>Target</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span>Achivement</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span>Updated At</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <span>Actions</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                      101
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                      <div className="font-medium">2025-26</div>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                      <span className="px-3 py-1 text-xs font-medium bg-green-200 rounded-md">
                        Robi
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                      Boro
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center capitalize">
                      4500 <sup>hec</sup>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      4100{" "}
                      <sup className="px-2 py-1 font-medium bg-red-100 text-red-600 rounded-md">
                        90%
                      </sup>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      30 June 2026
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-center text-sm font-medium">
                      <button className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block cursor-pointer">
                        <FaEye className="text-[16px]" />
                      </button>
                      <button className="text-green-600 hover:text-green-900 px-2 py-1 inline-block cursor-pointer">
                        <FaPenToSquare className="text-[15px]" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 px-2 py-1 inline-block cursor-pointer">
                        <MdDelete className="text-[18px]" />
                      </button>
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
          {/* Table-2 Crops Overview */}
          <div className="bg-white shadow-md rounded-lg px-4 py-4 mt-5">
            {/* Table Header */}
            <div className="flex items-center justify-between pb-3">
              <h2 className="text-base font-semibold text-gray-800">
                Crops Overview
              </h2>
              <span className="text-sm text-gray-500">10 records</span>
            </div>
            {/* <!-- Table --> */}
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center space-x-1">
                        <span>SL</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center space-x-1">
                        <span>Fin. Year</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center space-x-1">
                        <span>Session</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center space-x-1">
                        <span>Crop Name</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span>Target</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span>Achivement</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span>Progress</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span>Updated At</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <span>Actions</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                      101
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                      <div className="font-medium">2025-26</div>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                      <span className="px-3 py-1 text-xs font-medium bg-green-200 rounded-md">
                        Robi
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                      Boro
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center capitalize">
                      4500 <sup>hec</sup>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center capitalize">
                      1.5 <sup>hec</sup>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-md">
                        90%
                      </span>
                    </td>

                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      30 June 2026
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-center text-sm font-medium">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block cursor-pointer"
                      >
                        <FaEye className="text-[16px]" />
                      </a>
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-900 px-2 py-1 inline-block cursor-pointer"
                      >
                        <FaPenToSquare className="text-[15px]" />
                      </a>
                      <a
                        href="#"
                        className="text-red-600 hover:text-red-900 px-2 py-1 inline-block cursor-pointer"
                      >
                        <MdDelete className="text-[18px]" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                      102
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                      <div className="font-medium">2025-26</div>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                      <span className="px-3 py-1 text-xs font-medium bg-green-200 rounded-md">
                        Robi
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                      Boro
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center capitalize">
                      4500 <sup>hec</sup>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center capitalize">
                      1.5 <sup>hec</sup>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-md">
                        90%
                      </span>
                    </td>

                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      30 June 2026
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-center text-sm font-medium">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block cursor-pointer"
                      >
                        <FaEye className="text-[16px]" />
                      </a>
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-900 px-2 py-1 inline-block cursor-pointer"
                      >
                        <FaPenToSquare className="text-[15px]" />
                      </a>
                      <a
                        href="#"
                        className="text-red-600 hover:text-red-900 px-2 py-1 inline-block cursor-pointer"
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

          {/* Table-3 Harvest Overview */}
          <div className="bg-white shadow-md rounded-lg px-4 py-4 mt-5">
            {/* Table Header */}
            <div className="flex items-center justify-between pb-3">
              <h2 className="text-base font-semibold text-gray-800">
                Harvest Overview
              </h2>
              <span className="text-sm text-gray-500">10 records</span>
            </div>
            {/* <!-- Table --> */}
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center space-x-1">
                        <span>SL</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center space-x-1">
                        <span>Fin. Year</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center space-x-1">
                        <span>Session</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center space-x-1">
                        <span>Crop Name</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span>Harvest</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span>Production</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span>Per Hec</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span>Updated At</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <span>Actions</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                      101
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                      <div className="font-medium">2025-26</div>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                      <span className="px-3 py-1 text-xs font-medium bg-green-200 rounded-md">
                        Robi
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                      Boro
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-md">
                        90%
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      4500 <sup>MT</sup>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      1.5 <sup>MT</sup>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      30 June 2026
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-center text-sm font-medium">
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
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                      102
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                      <div className="font-medium">2025-26</div>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                      <span className="px-3 py-1 text-xs font-medium bg-green-200 rounded-md">
                        Robi
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                      Boro
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-md capitalize">
                        pending
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      4500 <sup>MT</sup>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      1.5 <sup>MT</sup>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-center">
                      30 June 2026
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-center text-sm font-medium">
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
        {/* <!-- Right Side --> */}
        <div className="lg:col-span-1">
          <div class="flex flex-col gap-6">
            {/* <!-- System Status --> */}
            <div class="bg-white shadow-md rounded-lg p-5">
              <h3 class="font-semibold text-gray-800 mb-4">
                Category by Progress
              </h3>

              <div class="space-y-4 text-sm">
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Seedbed</span>
                  <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                    ✓ Good
                  </span>
                </div>

                <div class="flex justify-between items-center">
                  <span class="text-gray-600">License Status</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                    0 Active
                  </span>
                </div>

                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Employee Coverage</span>
                  <span class="font-semibold text-gray-800">100%</span>
                </div>
              </div>
            </div>

            {/* <!-- Available Resources --> */}
            <div class="bg-white shadow-md rounded-lg p-5">
              <h3 class="font-semibold text-gray-800 mb-4">
                Target by Category
              </h3>

              <div class="space-y-4 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Rice</span>
                  <span class="text-blue-600 font-semibold">500 hec</span>
                </div>

                <div class="flex justify-between">
                  <span class="text-gray-600">Pulse</span>
                  <span class="text-blue-600 font-semibold">155 hec</span>
                </div>

                <div class="flex justify-between">
                  <span class="text-gray-600">Vegitable</span>
                  <span class="text-red-500 font-semibold">100 hec</span>
                </div>
              </div>
            </div>

            {/* <!-- Available Resources --> */}
            <div class="bg-white shadow-md rounded-lg p-5">
              <h3 class="font-semibold text-gray-800 mb-4">
                Target by Category
              </h3>

              <div class="space-y-4 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Rice</span>
                  <span class="text-blue-600 font-semibold">500 hec</span>
                </div>

                <div class="flex justify-between">
                  <span class="text-gray-600">Pulse</span>
                  <span class="text-blue-600 font-semibold">155 hec</span>
                </div>

                <div class="flex justify-between">
                  <span class="text-gray-600">Vegitable</span>
                  <span class="text-red-500 font-semibold">100 hec</span>
                </div>
              </div>
            </div>

            {/* <!-- Info Box --> */}
            <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div class="flex gap-3">
                <div class="text-yellow-500 text-xl">💡</div>
                <div>
                  <h4 class="font-semibold text-blue-700 mb-1">
                    Review Data Accuracy
                  </h4>
                  <p class="text-sm text-blue-600 leading-relaxed">
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
