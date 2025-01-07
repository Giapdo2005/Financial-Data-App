import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Fetch } from "./components/Fetch";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Fetch />
    </>
  );
}

export default App;
