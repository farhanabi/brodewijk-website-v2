import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session' // default: localStorage if web
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import * as reducers from "./ducks"; 

const config = {
  key: 'primary',
  storage,
  debug: (process.env.NODE_ENV !== "production"),
  blacklist: ['toastr']
}

export default function configureStore() {
  // compile reducers
  const rootReducer = persistCombineReducers(config, reducers);

  // compose
  var composeEnhancers = compose;
  // if debug do connect to Redux Devtools
  if (process.env.NODE_ENV !== "production") {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  // compile store
  const store = createStore(rootReducer, /* initialState */ composeEnhancers(
    applyMiddleware(thunk, multi)
  ));

  return {
    persistor: persistStore(store),
    store
  };
}
