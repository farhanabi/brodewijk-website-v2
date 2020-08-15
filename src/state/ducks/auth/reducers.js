import { combineReducers } from "redux";
import * as types from "./types";
import createReducer from "utils/createReducer";

const user = createReducer(null)({
    [types.SET_USER]: (state, action) => action.state,
});

const auth = createReducer(null)({
    [types.SET_AUTH]: (state, action) => action.state,
});

export default combineReducers({
  user,
  auth,
});