import axios from "axios";

export const FETCH_SMURF_DATA_START = "FETCH_SMURF_DATA_START";
export const FETCH_SMURF_DATA_SUCCESS = "FETCH_SMURF_DATA_SUCCESS";
export const FETCH_SMURF_DATA_FAIL = "FETCH_SMURF_DATA_FAIL";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data.drinks });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURF_DATA_FAIL, payload: err.response });
      });
  };
};