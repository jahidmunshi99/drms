import { useState } from "react";
// import useFetchDistrict from "../FetchData/useFetchDistrict";
// import useFetchDivision from "../FetchData/useFetchDivision";
import useFetchSession from "../../FetchData/useFetchSession.js";
// import useFetchUpozila from "../FetchData/useFetchUpozila";
import Icon from "../../utils/Icons_ulits";

const OverViewFilter = ({ data }) => {
  const [allData, setAllData] = useState(data);
  const [selectedDivision, setSelectedDivision] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpozila, setSelectedUpozila] = useState("");
  const [selectedSession, setSelectedSession] = useState("");

  // const { divisions } = useFetchDivision();
  // const { districts } = useFetchDistrict(selectedDivision);
  // const { upozila } = useFetchUpozila(selectedDistrict);
  const { session } = useFetchSession();
  const divisions = [...new Set(allData.map((i) => i.divisionId))];
  //   const district = [...new Set(selectedDistrict.map((i) => i.districtId))];
  const upozilas = [...new Set(allData.map((i) => i.upazilaId))];
  // console.log(session);

  const handleDivision = (divis) => {
    const districtList = allData.filter((item) => item.divisionId === divis);
    setSelectedDivision(true);
    setSelectedDistrict([
      ...new Set(districtList.map((item) => item.districtId)),
    ]);
  };

  const handleDistrict = (dist) => {
    const upazilaList = allData.filter((item) => item.districtId === dist);
    setSelectedUpozila([...new Set(upazilaList.map((upz) => upz.upazilaId))]);
  };

  const handleUpazila = (upz) => {
    const upazilaList = allData.filter((item) => item.upazilaId === upz);
    setAllData(upazilaList);
  };

  return (
    <section className="bg-white px-4 py-2 rounded-lg shadow-sm mb-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-600">
          <select
            className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded capitalize"
            onChange={(e) => handleDivision(e.target.value)}
          >
            <option value="">division</option>
            {divisions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {selectedDivision && (
            <select
              className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded mx-3 capitalize"
              onChange={(e) => {
                handleDistrict(e.target.value);
              }}
            >
              <option value="">district</option>
              {selectedDistrict.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}

          {selectedUpozila && (
            <select
              className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded capitalize"
              onChange={(e) => handleUpazila(e.target.value)}
            >
              <option value="">upozila</option>
              {selectedUpozila.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
          <select className="text-sm text-slate-600 border border-gray-300 px-2 py-1 mx-2 rounded">
            <option value="">মৌসুম</option>
            {session.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
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

export default OverViewFilter;
