import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Fetch } from "./components/Fetch";
import "./index.css";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  async function onGetData() {
    console.log("Button clicked, fetching data...");
    try {
      const apiKey = import.meta.env.VITE_API_KEY;

      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${apiKey}`
      );
      const data = await response.json();

      setData(data);
      setClick(true);
    } catch (error) {
      console.error(error.message);
    }
  }

  function onHandleFilter(e) {
    e.preventDefault();
    console.log("clicked");

    const form = e.target;
    const dateRange = form.dateRange.value;
    const revenue = form.revenue.value;
    const netIncome = form.netIncome.value;

    if (dateRange === "All" && revenue === "All" && netIncome === "All") {
      setFilter([]);
      setIsFiltered(false);
      return;
    }

    setIsFiltered(true);

    console.log({ dateRange, revenue, netIncome });

    let revenueStart = 0;
    let revenueEnd = Infinity;
    if (revenue !== "All") {
      [revenueStart, revenueEnd] = revenue.slice(1, -1).split(",").map(Number);
    }

    let incomeStart = 0;
    let incomeEnd = Infinity;
    if (netIncome !== "All") {
      [incomeStart, incomeEnd] = netIncome.slice(1, -1).split(",").map(Number);
    }

    // filter all the data based on the user's requirement
    const filterData = data.filter((d) => {
      let dateMatch = true;
      if (dateRange !== "All") {
        const year = d.date.slice(0, 4);
        dateMatch = year === dateRange;
      }

      return (
        dateMatch &&
        d.revenue >= revenueStart &&
        d.revenue <= revenueEnd &&
        d.netIncome >= incomeStart &&
        d.netIncome <= incomeEnd
      );
    });

    console.log(filterData);
    setFilter(filterData);
    //3,910,350,000.00
  }

  return (
    <>
      <Navbar />
      <Fetch
        data={data}
        getData={onGetData}
        handleFilter={onHandleFilter}
        filter={filter}
        isFiltered={isFiltered}
      />
    </>
  );
}

export default App;
