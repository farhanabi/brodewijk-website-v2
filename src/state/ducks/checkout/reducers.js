import { combineReducers } from "redux";
import * as types from "./types";
import createReducer from "utils/createReducer";

const random = createReducer(Math.random().toString(36).substr(2))({
    [types.SET_RANDOM]: (state, action) => action.state,
});

const permission = createReducer(false)({
    [types.SET_CHECKOUT_PERMISSION]: (state, action) => action.state,
});

// ---------------------------------------------------------------------------

const name = createReducer('')({
    [types.SET_NAME]: (state, action) => action.state,
});

const email = createReducer('')({
    [types.SET_EMAIL]: (state, action) => action.state,
});

const city = createReducer('')({
    [types.SET_CITY]: (state, action) => action.state,
});

const phonenumber = createReducer('')({
    [types.SET_PHONENUMBER]: (state, action) => action.state,
});

const product = createReducer('')({
    [types.SET_PRODUCT]: (state, action) => action.state,
});


export default combineReducers({
  random,
  permission,

  name,
  email,
  city,
  phonenumber,
  product,
});
