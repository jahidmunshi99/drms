import { useEffect, useState } from "react";

const useFetchUpozila = (district_name) => {
  const [upozila, setUpozila] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!district_name) return;
    const getAllUpozila = async () => {
      try {
        const response = await fetch(
          `https://bdapi.editboxpro.com/api/upazilas/${district_name}`
        );
        const data = await response.json();
        setUpozila(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getAllUpozila();
  }, [district_name]);
  return { upozila, loading, error };
};

export default useFetchUpozila;
