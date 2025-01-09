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
    <div className="flex justify-center mt-6 px-4 sm:mt-10">
      <div className="w-full max-w-3xl">
        <button
          className="w-full sm:w-auto flex items-center justify-center bg-gray-800 text-white text-lg font-bold px-4 py-3 sm:px-6 sm:py-4 rounded hover:bg-gray-600 mb-6"
          onClick={getData}
        >
          Get AAPL Apple Data
        </button>
        <div className="overflow-x-auto sm:overflow-x-visible">
          {data.length > 0 && (
            <div>
              <Filter handleFilter={handleFilter} handleSort={handleSort} />
            </div>
          )}
          {data.length > 0 && !isFiltered && !isSorted && <Table data={data} />}
          {isFiltered && filter.length > 0 && !isSorted && (
            <Table data={filter} />
          )}
          {isFiltered && filter.length === 0 && (
            <p className="text-gray-600 text-center">No matching result</p>
          )}
          {isSorted && <Table data={sorted} />}
        </div>
      </div>
    </div>
  );
}
