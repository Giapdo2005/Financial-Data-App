import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Fetch } from "./components/Fetch";
import "./index.css";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

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

  function onHandleFilter(range) {}

  return (
    <>
      <Navbar />
      <Fetch data={data} getData={onGetData} handleFilter={onHandleFilter} />
    </>
  );
}

export default App;
