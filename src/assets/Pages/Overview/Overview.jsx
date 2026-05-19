import OverViewFilter from "./OverViewFilter";
const Overview = () => {
  const data = [
    {
      id: "1",
      divisionId: "barisal",
      districtId: "patuakhali",
      upazilaId: "sadar",
      category: "basicinfo",
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
      category: "basicinfo",
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
      category: "basicinfo",
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
      category: "basicinfo",
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
      category: "basicinfo",
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
      upazilaId: "mirjagonj",
      category: "basicinfo",
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
      category: "basicinfo",
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
      category: "basicinfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 12,
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
      districtId: "perojpur",
      upazilaId: "rangabali",
      category: "productioninfo",
      population: 2000,
      land_area: 3500,
      number_of_union: 12,
      number_of_block: 36,
      family_of_farmers: 12500,
      createAt: "25-june-2026",
    },
  ];

  const basicInfo = data.filter(
    (item) =>
      item?.divisionId === "barisal" && item?.districtId === "patuakhali",
  );

  return (
    <div className="pb-6">
      {/* Top Header */}
      <OverViewFilter data={data} />
      {/* <!-- Content Section --> */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
        <div className=" bg-white p-5 rounded-lg shadow-sm border-gray-300">
          <h3 className="font-semibold mb-4 border-b border-gray-300 capitalize">
            District Information
          </h3>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm capitalize">
              <span className="text-slate-600">upazila</span>
              <span>{basicInfo.length}</span>
            </div>
            <div className="flex justify-between text-sm capitalize">
              <span className="text-slate-600">union</span>
              <span>
                {basicInfo.reduce((sum, item) => sum + item.number_of_union, 0)}
              </span>
            </div>
            <div className="flex justify-between text-sm capitalize">
              <span className=" text-slate-600">block</span>
              <span>
                {basicInfo.reduce((sum, item) => sum + item.number_of_block, 0)}
              </span>
            </div>
            <div className="flex justify-between text-sm capitalize">
              <span className=" text-slate-600">population</span>
              <span>
                {basicInfo.reduce((sum, item) => sum + item.population, 0)}
              </span>
            </div>
            <div className="flex justify-between text-sm capitalize">
              <span className=" text-slate-600">land area</span>
              <span>
                {" "}
                {basicInfo.reduce((sum, item) => sum + item.land_area, 0)} k.m
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">Farmer Families</span>
              <span>
                {" "}
                {basicInfo.reduce(
                  (sum, item) => sum + item.family_of_farmers,
                  0,
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300">
          <h3 className="font-semibold mb-4 border-b border-gray-300">
            Food Crops Data
          </h3>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Food Grain Demand</span>
              <span>
                1000<sup>mt</sup>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">Food Grain Production</span>
              <span>
                200 <sup>mt</sup>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">Oil Demand</span>
              <span>
                34500 <sup>lit</sup>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">Oil Production</span>
              <span>
                2300 <sup>lit</sup>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">Pulse Demand</span>
              <span>
                35000 <sup>mt</sup>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Pulse Production</span>
              <span>
                35000 <sup>mt</sup>
              </span>
            </div>
          </div>
        </div>
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

export default Overview;
