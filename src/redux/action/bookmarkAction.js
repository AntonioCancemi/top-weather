export const SET_BOOKMARK = "SET_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";
export const CLEAR_BOOKMARK = "CLEAR_BOOKMARK";

export const setBookmark = (bookmark) => {
  return {
    type: SET_BOOKMARK,
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
