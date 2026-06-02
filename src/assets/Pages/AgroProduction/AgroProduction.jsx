import { pdf } from "@react-pdf/renderer";
import { useMemo, useState } from "react";
import { cultivationData, sessionInfo, yearsInfo } from "../../data/data.js";
import { CreatePDF } from "../../utils/createPDF_utlis.jsx";
import FilterHeader from "./FilterHeader.jsx";
import EditFormModal from "./Forms/EditFormModal.jsx";
import HarvestForm from "./Forms/HarvestForm";
import SeedbedFrom from "./Forms/SeedbedFrom";
import SowingForm from "./Forms/SowingForm";
import CropsTable from "./Tables/CropsTable";
import HarvestTable from "./Tables/HarvestTable";
import SeedbedTable from "./Tables/SeedbedTable";

const AgroProduction = () => {
  const data = cultivationData;
  const years = yearsInfo;
  const sessions = sessionInfo;
  const [itemToUpdate, setItemToUpdate] = useState("");
  const [show, setShow] = useState(false);
  const [showHarvest, setShowHarvest] = useState(false);
  const [showSeedbed, setShowSeedbed] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [cropInfo, setCropInfo] = useState(null);
  const [seedbedInfo, setSeedbedInfo] = useState(null);
  const [harvestInfo, setHarvesInfo] = useState(null);

  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedFYear, setSelectedFYear] = useState("");

  /* -------------------------------------------------------------------------- */
  /*                               PDF Creation Handler                               */
  /* -------------------------------------------------------------------------- */

  const onDownload = async (bedData) => {
    console.log(bedData);
    const blob = await pdf(<CreatePDF data={bedData} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${bedData[0].category}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  /* -------------------------------------------------------------------------- */
  /*                               FILTER OPTIONS                               */
  /* -------------------------------------------------------------------------- */

  const division = useMemo(() => {
    return [...new Set(data.map((item) => item?.divisionId))];
  }, [data]);

  const districtList = useMemo(() => {
    if (!selectedDivision) return [];
    return [
      ...new Set(
        data
          .filter((divinfo) => divinfo?.divisionId === selectedDivision)
          .map((item) => item?.districtId),
      ),
    ];
  }, [data, selectedDivision]);

  const upazilaList = useMemo(() => {
    if (!selectedDistrict) return [];
    return [
      ...new Set(
        data
          .filter((dists) => dists?.districtId === selectedDistrict)
          .map((item) => item?.upazilaId),
      ),
    ];
  }, [data, selectedDistrict]);

  const sessionList = useMemo(() => {
    return [...new Set(data.map((sess) => sess?.crop_session))];
  }, [data]);

  const fYearList = useMemo(() => {
    return [...new Set(data.map((fyear) => fyear?.f_year))];
  }, [data]);

  const seedBed = [
    ...new Set(
      data.filter((bed) => bed.category === "seedbed").map((item) => item),
    ),
  ];

  const sowing = [
    ...new Set(
      data.filter((bed) => bed.category === "sowing").map((item) => item),
    ),
  ];

  const harvest = [
    ...new Set(
      data.filter((item) => item.category === "harvest").map((i) => i),
    ),
  ];

  /* -------------------------------------------------------------------------- */
  /*                               FILTER HANDLER                               */
  /* -------------------------------------------------------------------------- */
  const handleDivision = (item) => {
    setSelectedDivision(item);
    setSelectedDistrict("");
    setSelectedUpazila("");
  };

  const handleDistrict = (district) => {
    setSelectedDistrict(district);
    setSelectedUpazila("");
  };

  const handleUpazila = (upazila) => {
    setSelectedUpazila(upazila);
  };

  const handleSession = (session) => {
    setSelectedSession(session);
  };

  const handleFYear = (fyear) => {
    setSelectedFYear(fyear);
  };

  const filterInfo = {
    division,
    districtList,
    upazilaList,
    sessionList,
    fYearList,

    handleDivision,
    handleDistrict,
    handleUpazila,
    handleSession,
    handleFYear,
  };

  const handleClose = () => {
    setShowEdit(!showEdit);
  };
  const handleEdit = (item) => {
    setItemToUpdate(item);
    setShow(false);
    setShowSeedbed(false);
    setShowHarvest(false);
    setShowEdit(true);
  };

  const onSeedBedInfo = (item) => {
    setSeedbedInfo(item);
    setShowSeedbed(!showSeedbed);
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
      {showEdit && (
        <EditFormModal itemToUpdate={itemToUpdate} handleClose={handleClose} />
      )}
      {showSeedbed && (
        <SeedbedFrom
          item={seedbedInfo}
          onClose={() => setShowSeedbed(!showSeedbed)}
          handleEdit={handleEdit}
        />
      )}
      {show && (
        <SowingForm
          item={cropInfo}
          onClose={() => setShow(!show)}
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
      <FilterHeader filterInfo={filterInfo} />

      {/* ---------------New Overview Cards---------------------------------- */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* <!-- Total Target --> */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {/* Total Target */}
            লক্ষ্যমাত্রা
          </p>
          <div>
            <div className="flex justify-between gap-4 border-b-1 py-2 font-bold text-cyan-500 mt-2">
              <span>বীজতলা</span>
              <span>২৮০ হেক্টর</span>
            </div>
            <div className="flex justify-between gap-4 border-b-1 py-2 font-bold text-cyan-500 mt-2">
              <span>আবাদ</span>
              <span>১২৮০ হেক্টর</span>
            </div>
          </div>
          <div>
            <div className="grid gap-2 grid-cols-2 mt-4">
              <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px] text-cyan-600">
                <span>হাইব্রিড</span>
                <span>১২৮০ হে.</span>
              </div>
              <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px]  text-cyan-600">
                <span>উফশী</span>
                <span>১২৮০ হে.</span>
              </div>
              <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px] text-cyan-600">
                <span>স্থানীয়</span>
                <span>১২৮০ হে.</span>
              </div>
            </div>
          </div>
          {/* <h2 className="text-3xl font-bold text-cyan-500 mt-2">
            1,230 <span className="text-lg font-medium">ha</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">5 crop targets</p> */}
        </div>

        {/* <!-- Achivement Swing --> */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {/* Achievements Seedbed */}
            অর্জন
          </p>{" "}
          <div className="grid gap-2">
            <div>
              <div className="flex justify-between gap-4 py-2 font-bold text-yellow-500 mt-2">
                <span>বীজতলা</span>
                <span>৮০ হেক্টর</span>
              </div>
              {/* <!-- Progress Bar --> */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full w-[44%]"></div>
              </div>
              <p className="text-sm text-yellow-500 mt-2 font-medium">
                44% of target
              </p>
            </div>
            <div>
              <div className="grid gap-2 grid-cols-2 mt-4">
                <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px] text-yellow-600">
                  <span>হাইব্রিড</span>
                  <span>১২৮০ হে.</span>
                </div>
                <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px]  text-yellow-600">
                  <span>উফশী</span>
                  <span>১২৮০ হে.</span>
                </div>
                <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px] text-yellow-600">
                  <span>স্থানীয়</span>
                  <span>১২৮০ হে.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Crop swing --> */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {/* Achievements */}
            আবাদ
          </p>{" "}
          <div className="grid gap-2">
            <div>
              <div className="flex justify-between gap-4 py-2 font-bold text-purple-500 mt-2">
                <span>মোট আবাদ</span>
                <span>২৮০ হেক্টর</span>
              </div>
              {/* <!-- Progress Bar --> */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-[44%]"></div>
              </div>
              <p className="text-sm text-purple-500 mt-2 font-medium">
                44% of target
              </p>
            </div>
            <div>
              <div className="grid gap-2 grid-cols-2 mt-4">
                <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px] text-purple-600">
                  <span>হাইব্রিড</span>
                  <span>১২৮০ হে.</span>
                </div>
                <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px]  text-purple-600">
                  <span>উফশী</span>
                  <span>১২৮০ হে.</span>
                </div>
                <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px] text-purple-600">
                  <span>স্থানীয়</span>
                  <span>১২৮০ হে.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Crop Cutting --> */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {/* Achievements */}
            কর্তন
          </p>{" "}
          <div className="grid gap-2">
            <div>
              <div className="flex justify-between gap-4 py-2 font-bold text-green-500 mt-2">
                <span>মোট কর্তন</span>
                <span>২৮০ হেক্টর</span>
              </div>
              {/* <!-- Progress Bar --> */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-[44%]"></div>
              </div>
              <p className="text-sm text-green-500 mt-2 font-medium">
                44% of target
              </p>
            </div>
            <div>
              <div className="grid gap-2 grid-cols-2 mt-4">
                <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px] text-green-600">
                  <span>হাইব্রিড</span>
                  <span>১২৮০ হে.</span>
                </div>
                <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px]  text-green-600">
                  <span>উফশী</span>
                  <span>১২৮০ হে.</span>
                </div>
                <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px] text-green-600">
                  <span>স্থানীয়</span>
                  <span>১২৮০ হে.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Harvest --> */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {/* Achievements */}
            উৎপাদন
          </p>{" "}
          <div className="grid gap-2">
            <div>
              <div className="flex justify-between gap-4 py-2 font-bold text-cyan-500 mt-2">
                <span>মোট উৎপাদন</span>
                <span>২৮০ মে. টন</span>
              </div>
            </div>
            <div>
              <div className="grid gap-2 grid-cols-2 mt-4">
                <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px] text-cyan-600">
                  <span>হাইব্রিড</span>
                  <span>১২৮০ হে.</span>
                </div>
                <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px]  text-cyan-600">
                  <span>উফশী</span>
                  <span>১২৮০ হে.</span>
                </div>
                <div className="flex justify-between gap-2 bg-gray-100 rounded-full px-3 py-1 font-medium text-[11px] text-cyan-600">
                  <span>স্থানীয়</span>
                  <span>১২৮০ হে.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tables and Info */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-2 py-8">
        {/* <!-- Left Large Card --> */}
        <div className="lg:col-span-3">
          {/* Table-1 Seedbed Overview */}
          <SeedbedTable
            onSeedbedInfo={onSeedBedInfo}
            bedData={seedBed}
            onDownload={onDownload}
          />
          {/* Table-2 Crops Overview */}
          <CropsTable onCropInfo={onCropInfo} sowingData={sowing} />
          {/* Table-3 Harvest Overview */}
          <HarvestTable onCropInfo={onHarvestInfo} data={harvest} />
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
