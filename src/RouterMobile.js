import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import PageHome from 'pages/home/Mobile';
import PageBookAppointment from 'pages/bookAppointment/Mobile';
import PageCustomize from 'pages/customize/Mobile';

function RouterMobile (){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Switch>
      <Route exact={true} path="/" component={PageHome}/>
      <Route path="/book-appointment" component={PageBookAppointment}/>
      <Route path="/customize" component={PageCustomize}/>
    </Switch>
  );
}
export default RouterMobile;
