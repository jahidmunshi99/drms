import { useState } from "react";
// import useFetchDistrict from "../FetchData/useFetchDistrict";
// import useFetchDivision from "../FetchData/useFetchDivision";
import useFetchSession from "../FetchData/useFetchSession";
// import useFetchUpozila from "../FetchData/useFetchUpozila";
import Icon from "../utils/Icons_ulits";

const Topbar = ({data}) => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpozila, setSelectedUpozila] = useState("");
  const [selectedSession, setSelectedSession] = useState("");

  // const { divisions } = useFetchDivision();
  // const { districts } = useFetchDistrict(selectedDivision);
  // const { upozila } = useFetchUpozila(selectedDistrict);
  const { session } = useFetchSession();
  const divisions = [... new Set(data.map((i)=> i.divisionId))]
  const districts = [... new Set(data.map((i)=> i.districtId))]
  const upozilas = [... new Set(data.map((i)=> i.upazilaId))]
console.log(divisions)
  // console.log(session);

  return (
    <section className="bg-white px-4 py-2 rounded-lg shadow-sm mb-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-600">
          <select
            className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded capitalize"
            onChange={(e) => setSelectedDivision(e.target.value)}
          >
            <option value="">division</option>
            {divisions.map((item) => (
              <option value={item}>
                {item}
              </option>
            ))}
          </select>
          {selectedDivision && (
            <select
              className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded mx-3 capitalize"
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">district</option>
              {districts.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}

          {selectedDistrict && (
            <select
              className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded capitalize"
              onChange={(e) => setSelectedUpozila(e.target.value)}
            >
              <option value="">upozila</option>
              {upozilas.map((item, index) => (
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

export default Topbar;
