import {
  GET_POSITION_ERROR,
  GET_POSITION_REQUEST,
  GET_POSITION_SUCCESS,
} from "../middleware/getPosition";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
export const positionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSITION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_POSITION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_POSITION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
