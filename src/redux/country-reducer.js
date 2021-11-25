import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { fetchCountriesSuccess, changeFilter } from "./country-actions";

const items = createReducer([], {
  [fetchCountriesSuccess]: (_, { payload }) => {
    return payload;
  },
});
const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => {
    return payload;
  },
});
export default combineReducers({ items, filter });
