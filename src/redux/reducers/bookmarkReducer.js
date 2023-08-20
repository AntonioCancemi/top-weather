import {
  CLEAR_BOOKMARK,
  REMOVE_BOOKMARK,
  ADD_BOOKMARK,
  GET_BOOKMARK,
} from "../action/bookmarkAction";

const initialState = {
  bookmark: [],
};
export const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return { ...state, bookmark: [...state.bookmark, action.payload] };
    case CLEAR_BOOKMARK:
      return { ...state, bookmark: [] };
    case REMOVE_BOOKMARK:
      const updatedBookmarks = state.bookmark.filter(
        (bookmark, index) => index !== action.payload
      );
      return {
        ...state,
        bookmark: updatedBookmarks,
      };
    case GET_BOOKMARK:
      return state;
    default:
      return state;
  }
};
