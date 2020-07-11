import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import './i18n';
import Loading from 'components/Loading';
import * as serviceWorker from './serviceWorker';
import WebRouter from 'WebRouter';

const App = (
  <Suspense fallback={<Loading />}>
    <WebRouter/>
  </Suspense>
);

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
