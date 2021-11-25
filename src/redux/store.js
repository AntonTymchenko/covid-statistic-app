import countriesReducer from "./country-reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
export default store;
