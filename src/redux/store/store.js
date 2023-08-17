import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { searchReducer } from "../reducers/searchReducer";
import { positionReducer } from "../reducers/positionReducer";
import { weatherReducer } from "../reducers/weatherReducer";
import { bookmarkReducer } from "../reducers/bookmarkReducer";

const bigReducer = combineReducers({
  search: searchReducer,
  bookmark: bookmarkReducer,
  
  position: positionReducer,
  weather: weatherReducer,
});

const store = configureStore({
  reducer: bigReducer,
  middleware: [thunk],
});
export default store;
