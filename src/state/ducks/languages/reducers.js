import { combineReducers } from "redux";
import * as types from "./types";

const fetchLanguagesInitialState = {
  loading: false,
  failed: false,
  completed: false,
  error_data: { error: "" },
  data: {
    results: [],
    paginationData: {}
  }
};

export function fetchLanguagesReducer(
  state = fetchLanguagesInitialState,
  action
) {
  switch (action.type) {
    case types.FETCH_LANGUAGES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_LANGUAGES_REQUEST_FAILURE:
      return {
        ...fetchLanguagesInitialState,
        error_data: action.payload.data,
        failed: true
      };
    case types.FETCH_LANGUAGES_REQUEST_SUCCESS:
      return {
        ...fetchLanguagesInitialState,
        data: action.payload.data
      };
    case types.FETCH_LANGUAGES_REQUEST_COMPLETED:
      return {
        ...state,
        data: action.payload.data,
        completed: true
      };
    default:
      return state;
  }
}

export default combineReducers({
  fetchLanguagesReducer
});
