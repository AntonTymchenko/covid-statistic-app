import axios from "axios";

import {
  fetchCountriesRequest,
  fetchCountriesSuccess,
  fetchCountriesError,
} from "./country-actions";

axios.defaults.baseURL = "https://api.covid19api.com";

const fetchCountries = () => async (dispatch) => {
  dispatch(fetchCountriesRequest());
  try {
    const { data } = await axios.get("/summary");
    dispatch(fetchCountriesSuccess(data));
  } catch (error) {
    dispatch(fetchCountriesError());
  }
};

export default {
  fetchCountries,
};
