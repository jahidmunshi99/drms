import { useMemo, useState } from "react";
import OverViewFilter from "./OverViewFilter";

const Overview = () => {
  const data = [{
      id: "1",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "sadar",
      category: "basicinfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 1,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "2",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "bauphal",
      category: "basicinfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 1,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "3",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "golachipa",
      category: "basicinfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 1,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "4",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "kolapara",
      category: "basicinfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 1,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "5",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "dashmina",
      category: "basicinfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 1,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "6",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "mirjagonj",
      category: "basicinfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 1,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "7",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "dumki",
      category: "basicinfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 1,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "8",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "rangabali",
      category: "basicinfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 1,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "8",
      divisionId: "khulna",
      districtId: "perojpur",
      upazilaId: "sadar",
      category: "basicinfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 1,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "8",
      divisionId: "khulna",
      districtId: "bagerhat",
      upazilaId: "boyra",
      category: "basicinfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 1,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "8",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "rangabali",
      category: "basicinfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 1,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "1",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "sadar",
      category: "productioninfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 12,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "2",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "bauphal",
      category: "productioninfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 12,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "3",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "golachipa",
      category: "productioninfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 12,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "4",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "kolapara",
      category: "productioninfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 12,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "5",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "dashmina",
      category: "productioninfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 12,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "6",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "mirzagonj",
      category: "productioninfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 12,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "7",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "dumki",
      category: "productioninfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 12,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "8",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "rangabali",
      category: "productioninfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 12,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "8",
      divisionId: "barisal",
      districtId: "barguna",
      upazilaId: "rangabali",
      category: "productioninfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 12,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "8",
      divisionId: "khulna",
      districtId: "jalokhati",
      upazilaId: "rangabali",
      category: "productioninfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 12,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
    {
      id: "8",
      divisionId: "khulna",
      districtId: "bagerhat",
      upazilaId: "sadar",
      category: "productioninfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 12,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
  ];

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
  }, [
    basicData,
    selectedDivision,
    selectedDistrict,
    selectedUpazila,
  ]);

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
        (sum, item) => sum + item.family_of_farmers,
        0,
      ),
    };
  }, [filteredData]);

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
            District Information
          </h3>

          <div className="space-y-3">
            <InfoItem
              label="Upazila"
              value={statistics.totalUpazila}
            />

            <InfoItem
              label="Union"
              value={statistics.totalUnion}
            />

            <InfoItem
              label="Block"
              value={statistics.totalBlock}
            />

            <InfoItem
              label="Population"
              value={statistics.totalPopulation}
            />

            <InfoItem
              label="Land Area"
              value={`${statistics.totalLandArea} km`}
            />

            <InfoItem
              label="Farmer Families"
              value={statistics.totalFarmerFamily}
            />
          </div>
        </div>

        {/* Food Crops */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 border-b border-gray-200 pb-2 font-semibold">
            Food Crops Data
          </h3>

          <div className="space-y-3">
            <InfoItem
              label="Food Grain Demand"
              value={
                <>
                  1000 <sup>mt</sup>
                </>
              }
            />

            <InfoItem
              label="Food Grain Production"
              value={
                <>
                  200 <sup>mt</sup>
                </>
              }
            />

            <InfoItem
              label="Oil Demand"
              value={
                <>
                  34500 <sup>lit</sup>
                </>
              }
            />

            <InfoItem
              label="Oil Production"
              value={
                <>
                  2300 <sup>lit</sup>
                </>
              }
            />

            <InfoItem
              label="Pulse Demand"
              value={
                <>
                  35000 <sup>mt</sup>
                </>
              }
            />

            <InfoItem
              label="Pulse Production"
              value={
                <>
                  35000 <sup>mt</sup>
                </>
              }
            />
          </div>
        </div>
        {/* Crop-related Information */}

        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300">
          <h3 className="font-semibold mb-4 border-b border-gray-300">
            Crop-related Information
          </h3>
          <div className="flex justify-between text-sm capitalize">
            <span className=" text-slate-600">cropping intensity</span>
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
              <span className=" text-slate-600 capitalize">
                single-cropped land
              </span>
              <span>
                1000<sup>hec</sup>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">
                double-cropped land
              </span>
              <span>
                20000 <sup>hec</sup>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">
                triple-cropped land
              </span>
              <span>
                35000<sup>hec</sup>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 capitalize">
                total cropped land
              </span>
              <span>
                35000<sup>hec</sup>
              </span>
            </div>
          </div>
        </div>
        {/* Water Management Information */}
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300">
          <h3 className="font-semibold mb-4 border-b border-gray-300">
            Water Management
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">canal</span>
              <span>
                12000<sup>km</sup>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">eredgeable</span>
              <span>
                10000<sup>km</sup>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">embankment</span>
              <span>50</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">
                length of embankment
              </span>
              <span>
                13000<sup>km</sup>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600 capitalize">Sluice Gate</span>
              <span>15000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 capitalize">repairable</span>
              <span>2300</span>
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