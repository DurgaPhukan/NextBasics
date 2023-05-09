import React, { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalesPageSwr = (props) => {
  const [sales, setSales] = useState(props.sales);

  const { data, error } = useSWR(
    "https://nextjs-basic-2b9dd-default-rtdb.firebaseio.com/sales.json"
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  //   useEffect(() => {
  //     (async function fetchData(){
  //         try {
  //           setISLoading(true);
  //           const data = await fetch(
  //             "https://nextjs-basic-2b9dd-default-rtdb.firebaseio.com/sales.json"
  //           );
  //           const response = await data.json();
  //           const transformedSales = [];
  //           for (const key in response) {
  //             transformedSales.push({
  //               id: key,
  //               username: response[key].username,
  //               volume: response[key].volume,
  //             });
  //           }
  //           setSales(transformedSales);
  //           setISLoading(false);
  //         } catch (error) {}
  //     }())
  //   }, []);

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
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

export async function getStaticProps() {
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
  return {
    props: {
      sales: transformedSales,
    },
    revalidate: 10,
  };
}

export default LastSalesPageSwr;
