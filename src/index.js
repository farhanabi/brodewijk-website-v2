import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import './i18n';
import Loading from 'components/Loading';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from 'state/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import ReduxToastr from 'react-redux-toastr'
import WebRouter from 'WebRouter';

const reduxStore = configureStore()

const App = (
  <Suspense fallback={<Loading />}>
    <Provider store={reduxStore.store}>
      <PersistGate persistor={reduxStore.persistor}>
        <WebRouter/>
        <ReduxToastr
          timeOut={5000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          getState={(state) => state.toastr} // This is the default
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          closeOnToastrClick/>
      </PersistGate>
    </Provider>
  </Suspense>
);

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
