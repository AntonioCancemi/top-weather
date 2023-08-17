import {
  GET_WEATHER_ERROR,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "../middleware/getWeather";

const initialState = {
  data: [],
  loading: true,
  error: null,
};
export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
