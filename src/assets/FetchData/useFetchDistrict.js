import { useEffect, useState } from "react";

const useFetchDistrict = (divisionName) => {
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!divisionName) return;

    const fetchDistricts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://bdapi.editboxpro.com/api/districts/${divisionName.toLowerCase()}`
        );
        const data = await res.json();
        setDistricts(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDistricts();
  }, [divisionName]);

  return { districts, loading, error };
};

export default useFetchDistrict;
