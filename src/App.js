import React, { useState } from "react";
import CountriesList from "./components/CountriesList";
import FilterCountries from "./components/FilterCountries";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [countryForModal, setCountryForModal] = useState({});
  const toggleModal = (country) => {
    setShowModal(!showModal);
    setCountryForModal(country);
  };
  return (
    <div className="App">
      {showModal && (
        <Modal onClose={toggleModal} country={countryForModal}></Modal>
      )}
      <FilterCountries />
      <CountriesList onCLickCountry={toggleModal} />
    </div>
  );
}

export default App;
