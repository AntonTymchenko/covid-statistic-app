import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, getFilter } from "../redux/countreis-selectors";
import countryOperations from "../redux/country-operations";
import getVisibleCountries from "../utils/getVisibleCountries";

import s from "./CountriesList.module.css";

function CountriesList() {
  const state = useSelector((state) => getCountries(state));
  const filter = useSelector((state) => getFilter(state));
  const dispatch = useDispatch();
  console.log("state", state);
  useEffect(() => {
    dispatch(countryOperations.fetchCountries());
  }, []);

  return (
    <div>
      <table className={s.transactionHistory}>
        <thead className={s.thead}>
          <tr>
            <th>№</th>
            <th>Country</th>
            <th>Total Confirmed</th>
          </tr>
        </thead>

        <tbody>
          {!state ? (
            <p>Loading...</p>
          ) : (
            getVisibleCountries(state, filter).map(
              ({ ID, Country, TotalConfirmed }, i) => (
                <tr key={ID} className={s.tbody}>
                  <td className={s.itemsBody}>{++i}</td>
                  <td className={s.itemsBody}>{Country}</td>
                  <td className={s.itemsBody}>{TotalConfirmed}</td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CountriesList;
