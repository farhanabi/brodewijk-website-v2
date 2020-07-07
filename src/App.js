import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { BrowserView, MobileView } from 'react-device-detect';
import Loading from 'components/Loading';

const RouterDesktop = Loadable({ loading: () => <Loading text={true} />, loader: () => import('./RouterDesktop') });
const RouterMobile = Loadable({ loading: () => <Loading text={true} />, loader: () => import('./RouterMobile') });

function App (){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Router>
      <>
        <BrowserView><RouterDesktop /></BrowserView>
        <MobileView><RouterMobile /></MobileView>
      </>
  </Router>
  );
}

export default App;
