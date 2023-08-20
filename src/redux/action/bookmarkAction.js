export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const GET_BOOKMARK = "GET_BOOKMARK";
export const CLEAR_BOOKMARK = "CLEAR_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

export const setBookmark = (bookmark) => {
  return {
    type: ADD_BOOKMARK,
    payload: bookmark,
  };
};
export const removeBookmark = (index) => {
  return {
    type: REMOVE_BOOKMARK,
    payload: index,
  };
};
export const clearBookmark = () => {
  return {
    type: CLEAR_BOOKMARK,
  };
};
export const getBookmark = () => {
  return {
    type: GET_BOOKMARK,
  };
};
