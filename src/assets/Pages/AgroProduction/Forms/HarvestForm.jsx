export default function HarvestForm({ item, onClose, handleEdit }) {
  if (!item) return null;

  const total =
    item?.varieties?.reduce(
      (sum, v) => sum + (parseFloat(v.production) || 0),
      0,
    ) || 0;

  // total harvest
  const hvr =
    item?.varieties?.reduce(
      (sum, e) => sum + (parseFloat(e.harvest) || 0),
      0,
    ) || 0;

  // Progress Parsentage
  const pct = item?.achievement
    ? Math.round((hvr / item.achievement) * 100)
    : 0;

  const color =
    pct >= 100 ? "bg-emerald-600" : pct >= 60 ? "bg-amber-500" : "bg-red-500";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 capitalize">
              harverst crop : {item?.crop_name}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {item?.f_year} • {item?.crop_session} • ID: {item?.id}
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-gray-500 transition hover:bg-gray-100 hover:text-red-600 hover:border-red-600 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6">
          {/* Summary */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Card */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-xs uppercase tracking-wider text-blue-500">
                Total Harvest
              </p>

              <h3 className="mt-2 text-3xl font-bold text-blue-700">
                {/* {(item?.target || 0).toLocaleString()} */}
                {hvr}
              </h3>

              <p className="mt-1 text-sm text-blue-500">Hectare</p>
            </div>
            {/* Card */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-xs uppercase tracking-wider text-emerald-500">
                Production
              </p>

              <h3 className="mt-2 text-3xl font-bold text-emerald-700">
                {total.toLocaleString()}
              </h3>

              <p className="mt-1 text-sm text-emerald-500 capitalize">mt</p>
            </div>
            {/* Card */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-xs uppercase tracking-wider text-amber-500">
                Progress
              </p>

              <h3 className="mt-2 text-3xl font-bold text-amber-700">{pct}%</h3>

              <p className="mt-1 text-sm text-amber-500">Completion Rate</p>
            </div>
            {/* Card */}
            <div className="rounded-2xl border border-purple-200 bg-purple-50 p-5">
              <p className="text-xs uppercase tracking-wider text-purple-500">
                Total Variety
              </p>

              <h3 className="mt-2 text-3xl font-bold text-purple-700">5</h3>

              <p className="mt-1 text-sm text-purple-500">Completion Rate</p>
            </div>
          </div>

          {/* Variety Table */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200">
            <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Variety Wise Breakdown
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      SL
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Variety Name
                    </th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      cultivated
                    </th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Harvest
                    </th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Production/Hec
                    </th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Total Production
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Progress
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* {item?.varieties?.length > 0 ? (item.varieties.map((v, i) => {
                      const share = item?.target? Math.round(((v?.achievement || 0) / item.target) * 100,): 0; */}

                  {item.varieties?.length > 0 ? (
                    item.varieties.map((v, i) => {
                      const share = v?.cultivated
                        ? Math.round(((v?.harvest || 0) / v.cultivated) * 100)
                        : 0;

                      return (
                        <tr key={i} className="transition hover:bg-gray-50">
                          <td className="border-b border-gray-100 px-4 py-3 text-sm text-gray-600">
                            {i + 1}
                          </td>

                          <td className="border-b border-gray-100 px-4 py-3 text-sm font-medium text-gray-800">
                            {v?.name}
                          </td>
                          <td className="border-b border-gray-100 px-4 py-3 text-sm text-gray-700">
                            {(v?.cultivated || 0).toLocaleString()}{" "}
                            <sup>ha</sup>
                          </td>
                          <td className="border-b border-gray-100 px-4 py-3 text-sm text-gray-700">
                            {(v?.harvest || 0).toLocaleString()} <sup>ha</sup>
                          </td>
                          <td className="border-b border-gray-100 px-4 py-3 text-sm text-gray-700 capitalize">
                            {(v?.production_per_hector || 0).toLocaleString()}{" "}
                            <sup>mt</sup>
                          </td>
                          <td className="border-b border-gray-100 px-4 py-3 text-sm text-gray-700 capitalize">
                            {(
                              v?.production_per_hector * v?.harvest || 0
                            ).toLocaleString()}{" "}
                            <sup>mt</sup>
                          </td>

                          <td className="border-b border-gray-100 px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                                <div
                                  className="h-full rounded-full bg-emerald-500"
                                  style={{
                                    width: `${Math.min(share, 100)}%`,
                                  }}
                                />
                              </div>

                              <span className="min-w-[40px] text-sm font-medium text-gray-600">
                                {share}%
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-4 py-10 text-center text-gray-400"
                      >
                        No variety data found
                      </td>
                    </tr>
                  )}
                </tbody>

                {item?.harvest?.length > 0 && (
                  <tfoot>
                    <tr className="bg-emerald-50">
                      <td
                        colSpan={2}
                        className="border-t border-emerald-100 px-4 py-4 text-sm font-semibold text-emerald-700"
                      >
                        Total
                      </td>

                      <td className="border-t border-emerald-100 px-4 py-4 text-sm font-semibold text-emerald-700">
                        {total.toLocaleString()} ha
                      </td>

                      <td className="border-t border-emerald-100 px-4 py-4 text-sm font-semibold text-emerald-700">
                        {pct}%
                      </td>
                    </tr>
                  </tfoot>
                )}
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-gray-50 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded border border-gray-300 bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={handleEdit}
            className="rounded border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 cursor-pointer"
          >
            Edit
          </button>

          <button
            onClick={() => window.print()}
            className="rounded bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
}
