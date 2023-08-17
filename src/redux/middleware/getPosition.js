export const GET_POSITION_REQUEST = "GET_POSITION_REQUEST";
export const GET_POSITION_SUCCESS = "GET_POSITION_SUCCESS";
export const GET_POSITION_ERROR = "GET_POSITION_ERROR";
export const getPosition = (keyWord, countryCode, apiKey) => {
  return (dispatch) => {
    dispatch({ type: GET_POSITION_REQUEST });

    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=` +
        keyWord +
        "," +
        countryCode +
        "&limit=" +
        1 +
        "&appid=" +
        apiKey,
      { method: "GET", "content-type": "application/json" }
    )
      .then((response) => response.json()) // Attendere la risposta
      .then((data) =>
        dispatch({
          type: GET_POSITION_SUCCESS,
          payload: data, // Utilizzare direttamente la risposta JSON
        })
      )
      .catch((error) => dispatch({ type: GET_POSITION_ERROR, payload: error }));
  };
};
