export function Filter({ handleFilter }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <label htmlFor="dateRange" className="font-semibold text-lg">
          Date Range
        </label>
        <select
          id="dateRange"
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="1w">All</option>
          <option value="1w">2024</option>
          <option value="1m">2023</option>
          <option value="3m">2022</option>
          <option value="1y">2021</option>
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
          <option value="1w">All</option>
          <option value="asc">$0-1,000,000,000.00</option>
          <option value="desc">$1,000,000,001.00-2,000,000,000.00</option>
          <option value="desc">$2,000,000,001.00-3,000,000,000.00</option>
          <option value="desc">$3,000,000,001.00-4,000,000,000.00</option>
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
          <option value="1w">All</option>
          <option value="desc">$5,000,000,001.00-7,000,000,000.00</option>
          <option value="desc">$7,000,000,001.00-9,000,000,000.00</option>
          <option value="desc">$9,000,000,001.00-11,000,000,000.00</option>
        </select>
      </div>
      <button className="flex items-center bg-gray-800 text-white text-xl font-bold px-6 py-4 rounded hover:bg-gray-600">
        Filter
      </button>
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
    </div>
  );
}
