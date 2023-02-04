import React from "react";
import TableItem from "./TableItem";
import { useParams } from "react-router-dom";
import useFetchGeo from "../hooks/useFetchGeo";
const Table = () => {
  const { country } = useParams();
  const { data } = useFetchGeo(country);

  return (
    <table className="w-full mx-2 sm:mx-0 text-sm text-left text-gray-500 dark:text-gray-400">
      <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Current Weather in :{" "}
        {`${
          country
            ? country.charAt(0).toUpperCase() + country.slice(1)
            : "Philippines"
        }`}
      </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th></th>
          <th scope="col" className="px-6 py-3">
            Date
          </th>
          <th scope="col" className="px-6 py-3">
            Temp
          </th>
          <th scope="col" className="px-6 py-3 hidden sm:table-cell">
            Desciption
          </th>
          <th scope="col" className="px-6 py-3 hidden sm:table-cell">
            Main
          </th>
          <th scope="col" className="px-6 py-3 hidden sm:table-cell">
            Pressure
          </th>
          <th scope="col" className="px-6 py-3 hidden sm:table-cell">
            Humidity
          </th>
        </tr>
      </thead>
      <TableItem data={data} />
    </table>
  );
};

export default Table;
