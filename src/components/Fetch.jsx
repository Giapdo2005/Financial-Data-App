import { useState } from "react";
import { Table } from "./Table";
import { Filter } from "./Filter";
export function Fetch({
  data,
  getData,
  handleFilter,
  filter,
  isFiltered,
  handleSort,
  sorted,
  isSorted,
}) {
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
          {data.length > 0 && (
            <Filter handleFilter={handleFilter} handleSort={handleSort} />
          )}
          {data.length > 0 && !isFiltered && !isSorted && <Table data={data} />}
          {isFiltered && filter.length > 0 && <Table data={filter} />}
          {isFiltered && filter.length === 0 && (
            <p className="text-gray-600 text-center">No matching result</p>
          )}
          {isSorted && <Table data={sorted} />}
        </div>
      </div>
    </div>
  );
}
