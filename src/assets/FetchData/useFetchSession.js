import { useEffect, useState } from "react";
import { commonFields } from "../data/data";
const useFetchSession = () => {
  const [session, setSession] = useState([""]);
  useEffect(() => {
    const getSession = commonFields
      .flatMap((item) => item.season)
      .map((item) => item);
    setSession(getSession || []);
  }, []);
  return { session };
};

export default useFetchSession;
