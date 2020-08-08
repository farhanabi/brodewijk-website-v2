import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { isMobile } from 'react-device-detect';
import Loading from 'components/Loading';

const RouterDesktop = Loadable({ loading: () => <Loading text={false} />, loader: () => import('./RouterDesktop') });
const RouterMobile = Loadable({ loading: () => <Loading text={false} />, loader: () => import('./RouterMobile') });

function WebRouter (){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  if (isMobile) {
    return (
      <Router>
        <RouterMobile/>
      </Router>
    );
  }

  return (
    <Router>
      <RouterDesktop/>
    </Router>
  )
}

export default WebRouter;
