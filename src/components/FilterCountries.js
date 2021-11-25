import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/country-actions";

function FilterCountries() {
  const dispatch = useDispatch();
  const onFilterChange = (e) => dispatch(changeFilter(e.currentTarget.value));
  return (
    <header>
      <form>
        <input type="text" onChange={onFilterChange} placeholder="Search" />
      </form>
    </header>
  );
}

export default FilterCountries;
