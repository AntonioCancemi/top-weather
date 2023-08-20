import {
  CLEAR_BOOKMARK,
  REMOVE_BOOKMARK,
  SET_BOOKMARK,
} from "../action/bookmarkAction";

const initialState = {
  bookmark: [],
};
export const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKMARK:
      return { ...state, bookmark: [...state.bookmark, action.payload] };
    case CLEAR_BOOKMARK:
      return { ...state, bookmark: [] };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmark:
          state.bookmark.slice(0, action.payload) +
          state.bookmark.slice(action.payload, state.bookmark.lenght),
      };
    default:
      return state;
  }
  
};
