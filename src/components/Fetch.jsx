import { useState } from "react";
import { Table } from "./Table";
import { Filter } from "./Filter";
export function Fetch() {
  const [data, setData] = useState([]);

  async function onGetData() {
    console.log("Button clicked, fetching data...");
    try {
      const apiKey = import.meta.env.VITE_API_KEY;

      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${apiKey}`
      );
      const data = await response.json();

      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className="flex justify-center mt-10">
      <div>
        <button
          className="flex items-center bg-gray-800 text-white text-xl font-bold px-6 py-4 rounded hover:bg-gray-600"
          onClick={onGetData}
        >
          Get AAPL Apple Data
        </button>
        <div>
          {data.length > 0 && <Filter />}
          {data.length > 0 && <Table data={data} />}
        </div>
      </div>
    </div>
  );
}
