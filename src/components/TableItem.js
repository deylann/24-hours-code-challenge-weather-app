import React from "react";
import moment from "moment";
const TableItem = ({ data }) => {
  return (
    <tbody>
      {data ? (
        data?.list?.map((current, index) => (
          <tr className="bg-white border-b " key={index}>
            <td className="px-6 py-4 ">
              <img
                src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                className="h-6 mr-3 sm:h-9"
                alt="Logo"
              />
            </td>
            <th scope="row" className="px-6 py-4">
              {moment().format("YYYY-MM-DD")}
            </th>

            <td className="px-6 py-4 ">{current?.main.temp}</td>
            <td className="px-6 py-4 hidden sm:table-cell">
              {current.weather[0].description}
            </td>
            <td className="px-6 py-4 hidden sm:table-cell">
              {current.weather[0].main}
            </td>
            <td className="px-6 py-4 hidden sm:table-cell">
              {current?.main.pressure}
            </td>
            <td className="px-6 py-4 hidden sm:table-cell">
              {current?.main.humidity}
            </td>
          </tr>
        ))
      ) : (
        <tr className="bg-white border-b ">
          <td
            colSpan={7}
            className="px-6 py-4 hidden sm:table-cell col-span-6 text-center"
          >
            <p className="text-2xl text-violet-700 font-bold">
              No results found.
            </p>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableItem;
