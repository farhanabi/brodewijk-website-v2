import { combineReducers } from "redux";
import * as types from "./types";
import createReducer from "utils/createReducer";

const seva = createReducer(null)({
    [types.SET_USER]: (state, action) => action.state,
});

export default combineReducers({
  seva,
});
