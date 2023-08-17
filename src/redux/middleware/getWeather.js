export const GET_WEATHER_REQUEST = "GET_WEATHER_REQUEST";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_ERROR = "GET_WEATHER_ERROR";

export const getWeather = (lat, lon, apiKey) => {
  return (dispatch) => {
    dispatch({ type: GET_WEATHER_REQUEST });

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?" +
        lat +
        "&" +
        lon +
        "&appid=" +
        apiKey +
        "&units=metric&lang=it",
      { "Content-Type": "application/json", method: "GET" }
    )
      .then((response) => response.json()) // Attendere la risposta
      .then((data) =>
        dispatch({
          type: GET_WEATHER_SUCCESS,
          payload: data, // Utilizzare direttamente la risposta JSON
        })
      )
      .catch((error) => dispatch({ type: GET_WEATHER_ERROR, payload: error }));
  };
};
