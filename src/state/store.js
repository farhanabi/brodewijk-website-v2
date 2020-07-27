// redux
import { createStore, applyMiddleware, compose } from "redux";

// storage and middlewares
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import multi from 'redux-multi';

// all needed variables & params
import * as reducers from "./ducks"; // import all reducers from ducks/index.js
const config = {
  key: 'root',
  storage,
  debug: !(process.env.NODE_ENV === "production"),
  blacklist: ['toastr', 'now'],
}


export default function configureStore() {
  // compile reducers
  const rootReducer = persistCombineReducers(config, reducers);

  // // compose
  var composeEnhancers = compose;
  if (!(process.env.NODE_ENV === "production")) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // compile store
  const store = createStore(rootReducer, /* initialState */ composeEnhancers(
    applyMiddleware(multi)
  ));

  // return
  return {
    persistor: persistStore(store),
    store
  };
}
