import { createAction } from "@reduxjs/toolkit";

export const fetchCountriesRequest = createAction(
  "countries/fetchCountriesRequest"
);
export const fetchCountriesSuccess = createAction(
  "countries/fetchCountriesSuccess"
);
export const fetchCountriesError = createAction(
  "countries/fetchCountriesError"
);
export const changeFilter = createAction("countries/changeFilter");
