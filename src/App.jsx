import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Fetch } from "./components/Fetch";
import "./index.css";

function App() {
  const [data, setData] = useState([]);
  const [filterAndSort, setFilterAndSort] = useState([]);
  const [currentFilterCriteria, setCurrentFilterCriteria] = useState(null);
  const [currentSortCriteria, setCurrentSortCriteria] = useState(null);
  const [isFilteredOrSorted, setIsFilteredOrSorted] = useState(false);

  async function onGetData() {
    console.log("Button clicked, fetching data...");
    try {
      const apiKey = import.meta.env.VITE_API_KEY;

      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${apiKey}`
      );
      const data = await response.json();

      setData(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  function onHandleFilter(e) {
    e.preventDefault();
    console.log("clicked");

    const form = e.target;
    const revenue = form.revenue.value;
    const netIncome = form.netIncome.value;

    console.log({ revenue, netIncome });

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

    const startYear = Number(form.startYear.value);
    const endYear = Number(form.endYear.value);

    const filterCriteria = {
      startYear,
      endYear,
      revenueStart,
      revenueEnd,
      incomeStart,
      incomeEnd,
    };

    setCurrentFilterCriteria(filterCriteria);

    applyFilterAndSort(filterCriteria, currentSortCriteria);
  }

  function onHandleSortBy(e) {
    e.preventDefault();

    const form = e.target;
    const sortBy = form.sortBy.value;
    const order = form.order.value;

    const sortCriteria = { sortBy, order };

    applyFilterAndSort(currentFilterCriteria, sortCriteria);

    setCurrentSortCriteria(sortCriteria);
  }

  function applyFilterAndSort(filterCriteria, sortCriteria) {
    let processedData = [...data];

    if (filterCriteria) {
      const {
        startYear,
        endYear,
        revenueStart,
        revenueEnd,
        incomeStart,
        incomeEnd,
      } = filterCriteria;

      processedData = processedData.filter((d) => {
        const year = Number(d.date.slice(0, 4));
        const dateMatch = year >= startYear && year <= endYear;

        const revenueMatch =
          revenueStart === 0 && revenueEnd === Infinity
            ? true
            : d.revenue >= revenueStart && d.revenue <= revenueEnd;

        const incomeMatch =
          incomeStart === 0 && incomeEnd === Infinity
            ? true
            : d.netIncome >= incomeStart && d.netIncome <= incomeEnd;

        return dateMatch && revenueMatch && incomeMatch;
      });
    }

    if (sortCriteria) {
      const { sortBy, order } = sortCriteria;
      processedData = [...processedData].sort((a, b) => {
        if (sortBy === "dateRange") {
          return order === "ascending"
            ? new Date(a.date) - new Date(b.date)
            : new Date(b.date) - new Date(a.date);
        } else if (sortBy === "revenue") {
          return order === "ascending"
            ? a.revenue - b.revenue
            : b.revenue - a.revenue;
        } else if (sortBy === "netIncome") {
          return order === "ascending"
            ? a.netIncome - b.netIncome
            : b.netIncome - a.netIncome;
        }
      });
    }

    console.log(processedData);
    setFilterAndSort(processedData);
    setIsFilteredOrSorted(true);
  }
  return (
    <>
      <Navbar />
      <Fetch
        data={data}
        getData={onGetData}
        handleFilter={onHandleFilter}
        filterAndSort={filterAndSort}
        handleSort={onHandleSortBy}
        isFilteredOrSorted={isFilteredOrSorted}
      />
    </>
  );
}

export default App;
