import Topbar from "../../components/Topbar";
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
  ];

  const basicInfo = data.filter(
    (item) =>
      item?.divisionId === "barisal" && item?.districtId === "patuakhali",
  );

  const info = basicInfo.map((item) => item);

  console.log(info);
  return (
    <div>
      {/* Top Header */}
      <Topbar />
      {/* <!-- Content Section --> */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
        <div className=" bg-white p-5 rounded-lg shadow-sm border-gray-300">
          <h3 className="font-semibold mb-4 border-b border-gray-300">
            জেলার তথ্য
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
            খাদ্য শস্য
          </h3>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">খাদ্য শস্যের চাহিদা</span>
              <span>১০০০ মে. টন</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">উৎপাদন</span>
              <span>২০০ মে. টন</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">তেলের চাহিদা</span>
              <span>৩৫০০০ লি.</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">উৎপাদন</span>
              <span>৩৫০০০ লি.</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">ডালের চাহিদা</span>
              <span>৩৫০০০ মে.টন</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">উৎপাদন</span>
              <span>৩৫০০০ মে.টন</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300">
          <h3 className="font-semibold mb-4 border-b border-gray-300">
            ফসল সংক্রান্ত তথ্য
          </h3>
          <div className="flex justify-between text-sm">
            <span className=" text-slate-600">শস্য নিবিরতা</span>
            <span>১১৪%</span>
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

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className=" text-slate-600">এক ফসলি জমি</span>
              <span>১০০০ হেক্টর</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">দুই ফসলি জমি</span>
              <span>২০০০০ হেক্টর</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">তিন ফসলি জমি</span>
              <span>৩৫০০০ হেক্টর</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">মোট ফসলি জমি</span>
              <span>৩৫০০০ হেক্টর</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300">
          <h3 className="font-semibold mb-4 border-b border-gray-300">
            পানি ব্যবস্থাপনা
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">খাল</span>
              <span>১২০০ কি.মি</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">খনন যোগ্য</span>
              <span>১০০০০ কি.মি</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">বেড়ী বাধ</span>
              <span>৫০টি</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">বেড়ী বাধ দৈর্য্য</span>
              <span>১৩০০০ কি.মি</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-600">স্লুইজ গেট</span>
              <span>১৫০০০ টি</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">মেরামত যোগ্য</span>
              <span>২৩০০ টি</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
