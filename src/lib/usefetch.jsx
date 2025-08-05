import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  async function fetchdata() {
    setLoading(true);
    const res = await fetch(url);
    const result = await res.json();
    setTimeout(() => {
      setData(result);
      setLoading(false);
    }, 3000);
  }
  useEffect(() => {
    fetchdata();
  }, [url]);

  return { data, loading };
}
