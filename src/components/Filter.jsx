import { useState, useEffect } from "react";

export function Filter({ handleFilter, handleSort }) {
  const [startYear, setStartYear] = useState(2020);
  const [endYear, setEndYear] = useState(2024);
  const [endYearOptions, setEndYearOptions] = useState([]);
  const [revenue, setRevenue] = useState("All");
  const [netIncome, setNetIncome] = useState("All");

  useEffect(() => {
    const years = Array.from(
      { length: 2025 - startYear },
      (_, i) => startYear + i
    );
    setEndYearOptions(years);
  }, [startYear]);

  return (
    <>
      <form onSubmit={handleFilter} className="space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-4 mt-4">
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Start Year</label>
              <select
                id="startYear"
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={startYear}
                onChange={(e) => setStartYear(Number(e.target.value))}
              >
                {[2020, 2021, 2022, 2023, 2024].map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-lg">End Year</label>
              <select
                id="endYear"
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={endYear}
                onChange={(e) => setEndYear(Number(e.target.value))}
              >
                {endYearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="revenue" className="font-semibold text-lg">
            Revenue
          </label>
          <select
            id="revenue"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
          >
            <option value="All">All</option>
            <option value="[0,100000000000]">$0-1,000,000,000.00</option>
            <option value="[100000000100,200000000000]">
              $1,000,000,001.00-2,000,000,000.00
            </option>
            <option value="[200000000100,300000000000]">
              $2,000,000,001.00-3,000,000,000.00
            </option>
            <option value="[300000000100,400000000000]">
              $3,000,000,001.00-4,000,000,000.00
            </option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="netIncome" className="font-semibold text-lg">
            Net Income
          </label>
          <select
            id="netIncome"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={netIncome}
            onChange={(e) => setNetIncome(e.target.value)}
          >
            <option value="All">All</option>
            <option value="[50000000100,70000000000]">
              $500,000,001.00-700,000,000.00
            </option>
            <option value="[70000000100,90000000000]">
              $7,000,000,001.00-9,000,000,000.00
            </option>
            <option value="[90000000100,110000000000]">
              $900,000,001.00-110,000,000.00
            </option>
          </select>
        </div>
        <button className="flex items-center bg-gray-800 text-white text-xl font-bold px-6 py-4 rounded hover:bg-gray-600">
          Filter
        </button>
      </form>

      <form className="flex items-center space-x-4" onSubmit={handleSort}>
        <div className="flex flex-col">
          <label htmlFor="sortBy" className="font-semibold">
            Sort By
          </label>
          <select
            id="sortBy"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="dateRange">Date Range</option>
            <option value="revenue">Revenue</option>
            <option value="netIncome">Net Income</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="order" className="font-semibold">
            Order
          </label>
          <select
            id="order"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <button className="flex items-center bg-gray-800 text-white text-xl mt-5 font-bold px-6 py-2 rounded hover:bg-gray-600">
          Sort
        </button>
      </form>
    </>
  );
}
