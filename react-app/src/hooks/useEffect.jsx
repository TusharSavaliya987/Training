// useEffect example
import { useState, useEffect } from 'react';

export function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(result => setData(result));
  }, []); // Runs only once after the first render

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
