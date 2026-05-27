import { useState } from "react";

const TestVariety = ({ item }) => {
  const [itemData, setItemData] = useState(item);

  const handleRemove = (removeItem) => {
    console.log(removeItem);
    const updateVaritys = itemData.varieties.filter(
      (e) => e.name !== removeItem,
    );
    console.log(updateVaritys);
    setItemData({ ...itemData, varieties: updateVaritys });
  };

  return (
    <>
      {itemData.varieties.map((e) => {
        return (
          <div
            key={e.name}
            className="grid items-center gap-2 px-3 py-2 border border-gray-200 bg-[#f9f9f9] rounded animate-slideIn"
            style={{ gridTemplateColumns: "1fr 120px 32px" }}
          >
            <select
              value={e?.name || ""}
              // onChange={(e) => updateRow(i, "name", e.target.value)}
              className="w-full rounded border border-gray-200 bg-white px-2.5 py-1.5 text-[13px] text-gray-800 focus:border-blue-400 outline-none cursor-pointer capitalize"
            >
              <option value="">— select variety —</option>

              {item?.varieties?.map((vrt) => (
                <option
                  key={vrt.name}
                  value={vrt?.name || ""}
                  disabled={itemData.varieties.some(
                    (vitem) => vitem.name === vrt.name,
                  )}
                >
                  {vrt.name}
                </option>
              ))}
            </select>

            <input
              type="number"
              value={e?.achievement || ""}
              // onChange={(e) => updateRow(i, "achievement", e.target.value)}
              placeholder="0.00"
              className="w-full rounded border border-gray-200 bg-white px-2.5 py-1.5 text-[13px] text-gray-800 focus:border-blue-400 outline-none"
            />

            <button
              onClick={() => handleRemove(e.name)}
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
