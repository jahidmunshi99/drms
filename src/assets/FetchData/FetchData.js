import { allData } from "../data/data";

const getData = async () => {
  const data = allData();
  return data;
};

export { getData };
