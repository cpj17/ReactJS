import React, { useState, useEffect } from 'react';
import fetchData from './getData'; // Import the fetchData function

const T1Component1 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAsync = async (apiURL) => {
      try {
        const result = await fetchData(apiURL);
        setData(result);
        console.log(result);
        console.log("after data fetched");
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync('https://jsonplaceholder.typicode.com/todos/1');
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Data: {data ? JSON.stringify(data) : 'No data available.'}</p>
      )}
    </div>
  );
};

export default T1Component1;
