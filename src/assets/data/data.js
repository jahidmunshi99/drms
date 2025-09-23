const commonFields = {
  fiscalYear: ["2025-26", "2024-25", "2023-24", "2022-23"],
  district: [
    { name: "পটুয়াখালী" },
    {
      upazila: [
        "পটুয়াখালী সদর",
        "বাউফল",
        "গলাচিপা",
        "কলাপাড়া",
        "দশমিনা",
        "মির্জাগঞ্জ",
        "দুমকী",
        "রাঙ্গাবালী",
      ],
    },
  ],
  eason: ["রবি", "খরিপ-১", "খরিপ-২"],
};

const overviewData = {
  fiscalYear: "2024-25",
  district: "পটুয়াখালী",
  upazila: "পটুয়াখালী সদর",
  union: "Shimulia",
  season: "Rabi",
  generalInfo: {
    upazilaCount: 12,
    unionCount: 80,
    block: 150,
    population: 500000,
    area: 2000,
    farmerGroups: 320,
  },
  foodGrain: { demand: 45000, production: 42000 },
  oilSeed: { demand: 12000, production: 11000 },
  pulses: { demand: 8000, production: 7500 },
  crops: {
    cropIntensity: 190,
    singleCropLand: 300,
    doubleCropLand: 1200,
    tripleCropLand: 500,
    totalCropLand: 2000,
  },
  waterManagement: {
    khal: 25,
    excavatable: 12,
    embankment: 15,
    embankmentLength: 45,
    sluiceGate: 8,
    repairable: 3,
  },
};

const productionData = {
  fiscalYear: "2024-25",
  district: "Dhaka",
  upazila: "Savar",
  union: "Shimulia",
  season: "Kharif-1",
  seedbed: [
    { variety: "BR-28", target: 120, achievement: 110 },
    { variety: "BR-29", target: 100, achievement: 95 },
  ],
  cultivation: [
    { variety: "BR-28", target: 200, achievement: 180 },
    { variety: "BR-29", target: 150, achievement: 140 },
  ],
  harvest: [
    { variety: "BR-28", yieldPerHectare: 4.5, totalYield: 810 },
    { variety: "BR-29", yieldPerHectare: 5.0, totalYield: 700 },
  ],
};

const allData = () => {
  return { commonFields, overviewData, productionData };
};

export { allData };
