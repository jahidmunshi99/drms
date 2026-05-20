
import Icon from "../../utils/Icons_ulits";

const OverViewFilter = ({ filterInfo}) => {
 const { divisions,
    districtList,
    upazilaList,

    selectedDivision,
    selectedDistrict,
    selectedUpazila,

    handleDivision,
    handleDistrict,
    handleUpazila,}= filterInfo


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
              {districtList.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}

          {selectedDistrict && (
            <select
              className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded capitalize"
              onChange={(e) => handleUpazila(e.target.value)}
            >
              <option value="">upozila</option>
              {upazilaList.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
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
