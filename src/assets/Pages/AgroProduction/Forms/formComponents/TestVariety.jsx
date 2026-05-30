const TestVariety = ({ item, onRemove, onUpdate }) => {
  return (
    <>
      {item.map((vrt) => {
        return (
          <div
            key={vrt.name}
            className="grid items-center gap-2 px-3 py-2 border border-gray-200 bg-[#f9f9f9] rounded animate-slideIn"
            style={{ gridTemplateColumns: "1fr 120px 32px" }}
          >
            <select
              value={vrt?.name || ""}
              onChange={(e) => onUpdate(vrt.name, e.target.value)}
              className="w-full rounded border border-gray-200 bg-white px-2.5 py-1.5 text-[13px] text-gray-800 focus:border-blue-400 outline-none cursor-pointer capitalize"
            >
              <option value="">— select variety —</option>

              {item.map((vname) => (
                <option
                  key={vname.name}
                  value={vname?.name || ""}
                  disabled={item.some((vitem) => vitem.name === vname.name)}
                >
                  {vname.name}
                </option>
              ))}
            </select>

            <input
              type="number"
              value={vrt?.achievement || ""}
              onChange={(e) => onUpdate(vrt.name, e.target.value)}
              placeholder="0.00"
              className="w-full rounded border border-gray-200 bg-white px-2.5 py-1.5 text-[13px] text-gray-800 focus:border-blue-400 outline-none"
            />

            <button
              onClick={() => onRemove(vrt)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-red-300 hover:text-red-500 hover:bg-red-50 transition-all text-[13px] cursor-pointer"
            >
              ✕
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TestVariety;
