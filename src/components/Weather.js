import React from "react";

const Weather = () => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg sm:mx-[250px]">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Weather
          {/* <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            
          </p> */}
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th></th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
            <th scope="col" class="px-6 py-3">
              Temp
            </th>
            <th scope="col" class="px-6 py-3 ">
              Desciption
            </th>
            <th scope="col" class="px-6 py-3 ">
              Main
            </th>
            <th scope="col" class="px-6 py-3 ">
              Pressure
            </th>
            <th scope="col" class="px-6 py-3 ">
              Humidity
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4 ">
              <img src="/img/sun.png" className="h-6 mr-3 sm:h-9" alt="Logo" />
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>

            <td class="px-6 py-4 ">Sliver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">$2999</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Weather;
