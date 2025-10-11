import { useEffect, useState } from "react";

const useFetchDivision = () => {
  const [divisions, setDivisions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const res = await fetch("https://bdapi.editboxpro.com/api/divisions");
        const data = await res.json();
        setDivisions(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDivisions();
  }, []);

  return { divisions, loading, error };
};

export default useFetchDivision;
