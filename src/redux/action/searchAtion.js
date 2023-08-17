export const SET_KEYWORD = "SET_KEYWORD";
export const CLEAR_KEYWORD = "CLEAR_KEYWORD";
export const SET_COUNTRY = "SET_COUNTRY";
export const CLEAR_COUNTRY = "CLEAR_COUNTRY";

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    payload: keyword,
  };
};
export const clearKeyword = () => {
  return {
    type: CLEAR_KEYWORD,
    payload: "",
  };
};
export const setCountry = (country) => {
  return {
    type: SET_COUNTRY,
    payload: country,
  };
};
export const clearCountry = () => {
  return {
    type: CLEAR_COUNTRY,
    payload: "",
  };
};
