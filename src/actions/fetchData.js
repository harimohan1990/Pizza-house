import axios from "axios";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./action";

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}
