import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, getFilter } from "../redux/countreis-selectors";
import { fetchCountries } from "../redux/country-operations";
import getVisibleCountries from "../utils/getVisibleCountries";
import Container from "./Container";

import s from "./CountriesList.module.css";

function CountriesList({ onCLickCountry }) {
  const state = useSelector((state) => getCountries(state));
  const filter = useSelector((state) => getFilter(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const getInfoAboutPickedCountry = (
    Country,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered
  ) => {
    const country = {
      Country,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
    };
    onCLickCountry(country);
  };

  return (
    <Container>
      <table className={s.transactionHistory}>
        <thead className={s.thead}>
          <tr>
            <th>№</th>
            <th>Country</th>
            <th>Total Confirmed</th>
          </tr>
        </thead>

        <tbody>
          {state &&
            getVisibleCountries(state, filter).map(
              (
                { ID, Country, TotalConfirmed, TotalDeaths, TotalRecovered },
                i
              ) => (
                <tr key={ID} className={s.tbody}>
                  <td
                    className={s.itemsBody}
                    onClick={() =>
                      getInfoAboutPickedCountry(
                        Country,
                        TotalConfirmed,
                        TotalDeaths,
                        TotalRecovered
                      )
                    }
                  >
                    {++i}
                  </td>
                  <td
                    className={s.itemsBody}
                    onClick={() =>
                      getInfoAboutPickedCountry(
                        Country,
                        TotalConfirmed,
                        TotalDeaths,
                        TotalRecovered
                      )
                    }
                  >
                    {Country}
                  </td>
                  <td
                    className={s.itemsBody}
                    onClick={() =>
                      getInfoAboutPickedCountry(
                        Country,
                        TotalConfirmed,
                        TotalDeaths,
                        TotalRecovered
                      )
                    }
                  >
                    {TotalConfirmed}
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </Container>
  );
}

export default CountriesList;
