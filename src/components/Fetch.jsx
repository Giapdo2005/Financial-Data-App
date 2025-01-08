import { useState } from "react";
import { Table } from "./Table";
import { Filter } from "./Filter";
export function Fetch({ data, getData, handleFilter, filterData }) {
  return (
    <div className="flex justify-center mt-10">
      <div>
        <button
          className="flex items-center bg-gray-800 text-white text-xl font-bold px-6 py-4 rounded hover:bg-gray-600"
          onClick={getData}
        >
          Get AAPL Apple Data
        </button>
        <div>
          {data.length > 0 && <Filter handleFilter={handleFilter} />}
          {data.length > 0 && filterData.length <= 0 ? (
            <Table data={data} />
          ) : (
            <Table data={filterData} />
          )}
        </div>
      </div>
    </div>
  );
}
