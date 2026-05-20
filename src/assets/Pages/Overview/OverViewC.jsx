import { useMemo, useState } from "react";
import { basicInfo } from "../../data/data.js";
import OverViewFilter from "./OverViewFilter";

const Overview = () => {
  const data = basicInfo;
  console.log(data);
  /* -------------------------------------------------------------------------- */
  /*                                  STATES                                    */
  /* -------------------------------------------------------------------------- */

  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");

  /* -------------------------------------------------------------------------- */
  /*                              FILTERED SOURCE                               */
  /* -------------------------------------------------------------------------- */

  const basicData = useMemo(() => {
    return data.filter((item) => item.category === "basicinfo");
  }, [data]);

  console.log(basicData);
  /* -------------------------------------------------------------------------- */
  /*                               FILTER OPTIONS                               */
  /* -------------------------------------------------------------------------- */

  const divisions = useMemo(() => {
    return [...new Set(basicData.map((item) => item.divisionId))];
  }, [basicData]);

  const districtList = useMemo(() => {
    if (!selectedDivision) return [];

    return [
      ...new Set(
        basicData
          .filter((item) => item.divisionId === selectedDivision)
          .map((item) => item.districtId),
      ),
    ];
  }, [basicData, selectedDivision]);

  const upazilaList = useMemo(() => {
    if (!selectedDistrict) return [];

    return [
      ...new Set(
        basicData
          .filter((item) => item.districtId === selectedDistrict)
          .map((item) => item.upazilaId),
      ),
    ];
  }, [basicData, selectedDistrict]);

  /* -------------------------------------------------------------------------- */
  /*                               FILTER HANDLER                               */
  /* -------------------------------------------------------------------------- */

  const handleDivision = (division) => {
    setSelectedDivision(division);
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

  /* -------------------------------------------------------------------------- */
  /*                               FILTERED DATA                                */
  /* -------------------------------------------------------------------------- */

  const filteredData = useMemo(() => {
    return basicData.filter((item) => {
      const matchDivision = selectedDivision
        ? item.divisionId === selectedDivision
        : true;

      const matchDistrict = selectedDistrict
        ? item.districtId === selectedDistrict
        : true;

      const matchUpazila = selectedUpazila
        ? item.upazilaId === selectedUpazila
        : true;

      return matchDivision && matchDistrict && matchUpazila;
    });
  }, [basicData, selectedDivision, selectedDistrict, selectedUpazila]);

  /* -------------------------------------------------------------------------- */
  /*                             OVERVIEW CALCULATION                           */
  /* -------------------------------------------------------------------------- */

  const statistics = useMemo(() => {
    return {
      totalUpazila: filteredData.length,

      totalUnion: filteredData.reduce(
        (sum, item) => sum + item.number_of_union,
        0,
      ),

      totalBlock: filteredData.reduce(
        (sum, item) => sum + item.number_of_block,
        0,
      ),

      totalPopulation: filteredData.reduce(
        (sum, item) => sum + item.population,
        0,
      ),

      totalLandArea: filteredData.reduce(
        (sum, item) => sum + item.land_area,
        0,
      ),

      totalFarmerFamily: filteredData.reduce(
        (sum, item) => sum + item?.family_of_farmers || 0,
        0,
      ),
      totalFoodGrainDemand: filteredData.reduce(
        (sum, item) => sum + item?.food_grain_demand || 0,
        0,
      ),
      totalFoodGrainProduction: filteredData.reduce(
        (sum, item) => sum + item?.food_grain_production || 0,
        0,
      ),
      totalOilDemand: filteredData.reduce(
        (sum, item) => sum + item?.oil_demand || 0,
        0,
      ),
      totalOilProduction: filteredData.reduce(
        (sum, item) => sum + item?.oil_production || 0,
        0,
      ),
      totalPulseDemand: filteredData.reduce(
        (sum, item) => sum + item?.pulse_demand || 0,
        0,
      ),
      totalPulseProduction: filteredData.reduce(
        (sum, item) => sum + item?.pulse_production || 0,
        0,
      ),
      totalSingleCroppedLand: filteredData.reduce(
        (sum, item) => sum + item?.single_cropped_land || 0,
        0,
      ),
      totalDoubleCroppedLand: filteredData.reduce(
        (sum, item) => sum + item?.double_cropped_land || 0,
        0,
      ),
      totalTripleCroppedLand: filteredData.reduce(
        (sum, item) => sum + item?.triple_cropped_land || 0,
        0,
      ),
      totalCroppedLand: filteredData.reduce(
        (sum, item) => sum + item?.total_cropped_land || 0,
        0,
      ),
      totalCanal: filteredData.reduce((sum, item) => sum + item?.canal || 0, 0),
      totalEredgeable: filteredData.reduce(
        (sum, item) => sum + item?.eredgeable || 0,
        0,
      ),
      totalEmbankment: filteredData.reduce(
        (sum, item) => sum + item?.embankment || 0,
        0,
      ),
      totalLengthOfEmbankment: filteredData.reduce(
        (sum, item) => sum + item?.length_of_embankment || 0,
        0,
      ),
      totalSluiceGate: filteredData.reduce(
        (sum, item) => sum + item?.sluice_gate || 0,
        0,
      ),
      totalRepairable: filteredData.reduce(
        (sum, item) => sum + item?.repairable || 0,
        0,
      ),
    };
  }, [filteredData]);

  console.log(statistics);
  /* -------------------------------------------------------------------------- */
  /*                                FILTER INFO                                 */
  /* -------------------------------------------------------------------------- */

  const filterInfo = {
    divisions,
    districtList,
    upazilaList,

    selectedDivision,
    selectedDistrict,
    selectedUpazila,

    handleDivision,
    handleDistrict,
    handleUpazila,
  };

  return (
    <div className="pb-6">
      {/* Filter */}
      <OverViewFilter filterInfo={filterInfo} />

      {/* Content */}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2">
        {/* District Information */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 border-b border-gray-200 pb-2 font-semibold capitalize">
            একনজরে
          </h3>

          <div className="space-y-3">
            <InfoItem label="উপজেলা" value={statistics.totalUpazila} />

            <InfoItem label="ইউনিয়ন" value={statistics.totalUnion} />

            <InfoItem label="ব্লক" value={statistics.totalBlock} />

            <InfoItem label="জনসংখ্যা" value={statistics.totalPopulation} />

            <InfoItem label="আয়তন" value={`${statistics.totalLandArea} km`} />

            <InfoItem
              label="কৃষক সংখ্যা"
              value={statistics.totalFarmerFamily}
            />
          </div>
        </div>

        {/* Food Crops */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 border-b border-gray-200 pb-2 font-semibold">
            খাদ্যশস্য
          </h3>

          <div className="space-y-3">
            <InfoItem
              label="খাদ্যশস্যের চাহিদা"
              value={`${statistics.totalFoodGrainDemand} mt`}
            />

            <InfoItem
              label="উৎপাদন"
              value={`${statistics.totalFoodGrainProduction} mt`}
            />

            <InfoItem
              label="তেলের চাহিদা"
              value={`${statistics.totalOilDemand} mt`}
            />

            <InfoItem
              label="তেলের উৎপাদন"
              value={`${statistics.totalOilProduction} mt`}
            />

            <InfoItem
              label="ডালের চাহিদা"
              value={`${statistics.totalPulseDemand} mt`}
            />

            <InfoItem
              label="ডালের উৎপাদন"
              value={`${statistics.totalPulseDemand} mt`}
            />
          </div>
        </div>
        {/* Crop-related Information */}

        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300">
          <h3 className="font-semibold mb-4 border-b border-gray-300">
            ফসলি জমি
          </h3>
          <div className="flex justify-between text-sm capitalize">
            <span className=" text-slate-600">শস্য নিবিরতা</span>
            <span>114%</span>
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

          <div className="mt-4 space-y-2 text-sm ">
            <div className="flex justify-between">
              <span className=" text-slate-600 capitalize">এক ফসলি জমি</span>
              <span>{`${statistics.totalSingleCroppedLand} hec`}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">দুই ফসলি জমি</span>
              <span>{`${statistics.totalDoubleCroppedLand} hec`}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">তিন ফসলি জমি</span>
              <span>{`${statistics.totalTripleCroppedLand} hec`}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 capitalize">মোট ফসলি জমি</span>
              <span>{`${statistics.totalCroppedLand} hec`}</span>
            </div>
          </div>
        </div>
        {/* Water Management Information */}
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300">
          <h3 className="font-semibold mb-4 border-b border-gray-300">
            পানি ব্যবস্থাপনা
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">খাল</span>
              <span>{`${statistics.totalCanal} km`}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">খননযোগ্য</span>
              <span>{`${statistics.totalEredgeable} km`}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">বাধ</span>
              <span>{`${statistics.totalEmbankment} km`}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">বাধের দৈর্য্য</span>
              <span>{`${statistics.totalLengthOfEmbankment} km`}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">স্লইজ গেট</span>
              <span>{statistics.totalSluiceGate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 capitalize">মেরামতযোগ্য</span>
              <span>{statistics.totalRepairable}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               REUSABLE ITEM                                */
/* -------------------------------------------------------------------------- */

const InfoItem = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="capitalize text-slate-600">{label}</span>
      <span className="font-medium text-slate-800">{value}</span>
    </div>
  );
};

export default Overview;
