import React from "react";
import CountriesList from "./components/CountriesList";
import FilterCountries from "./components/FilterCountries";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FilterCountries />
      <CountriesList />
    </div>
  );
}

export default App;
