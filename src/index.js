import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import './i18n';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import Loading from 'components/Loading';
import RouterDesktop from './RouterDesktop';
import RouterMobile from './RouterMobile';
import * as serviceWorker from './serviceWorker';

const App = (
  <Suspense fallback={<Loading />}>
    <Router>
      <>
        <BrowserView><RouterDesktop /></BrowserView>
        <MobileView><RouterMobile /></MobileView>
      </>
    </Router>
  </Suspense>
);

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
