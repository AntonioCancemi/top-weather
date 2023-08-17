import {
  CLEAR_COUNTRY,
  CLEAR_KEYWORD,
  SET_COUNTRY,
  SET_KEYWORD,
} from "../action/searchAtion";

const initialState = {
  keyword: "Roma",
  country: "it",
};
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEYWORD:
      return { ...state, keyword: action.payload };
    case CLEAR_KEYWORD:
      return { ...state, keyword: "" };
    case SET_COUNTRY:
      return { ...state, country: action.payload };
    case CLEAR_COUNTRY:
      return { ...state, country: "" };

    default:
      return state;
  }
};
