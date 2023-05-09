import React, { useEffect, useState } from "react";

const LastSalesPAge = () => {
  const [sales, setSales] = useState(false);
  const [isLoading, setISLoading] = useState(false);

  useEffect(() => {
    (async function fetchData(){
        try {
          setISLoading(true);
          const data = await fetch(
            "https://nextjs-basic-2b9dd-default-rtdb.firebaseio.com/sales.json"
          );
          const response = await data.json();
          const transformedSales = [];
          for (const key in response) {
            transformedSales.push({
              id: key,
              username: response[key].username,
              volume: response[key].volume,
            });
          }
          setSales(transformedSales);
          setISLoading(false);
        } catch (error) {}
    }())
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!sales) {
    return <p>No Data yet</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPAge;
