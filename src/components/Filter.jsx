export function Filter({ handleFilter }) {
  return (
    <>
      <form onSubmit={handleFilter} className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="dateRange" className="font-semibold text-lg">
            Date Range
          </label>
          <select
            id="dateRange"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="revenue" className="font-semibold text-lg">
            Revenue
          </label>
          <select
            id="revenue"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      <div className="flex items-center space-x-4">
        <div className="flex flex-col">
          <label htmlFor="sortBy" className="font-semibold">
            Sort By
          </label>
          <select
            id="sortBy"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Date Range</option>
            <option>Revenue</option>
            <option>Net Income</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="order" className="font-semibold">
            Order
          </label>
          <select
            id="sortBy"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
        <button className="flex items-center bg-gray-800 text-white text-xl mt-5 font-bold px-6 py-2 rounded hover:bg-gray-600">
          Sort
        </button>
      </div>
    </>
  );
}
